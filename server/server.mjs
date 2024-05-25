import express from "express";
import crypto from "crypto";
import mysql from "mysql";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { log } from "console";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST, GET"],
    credentials: true,
  })
);

function generateRandomToken() {
  // Generate 8 random bytes
  const randomBytes = crypto.randomBytes(8);
  // Convert to hexadecimal string and return
  return randomBytes.toString("hex");
}
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "myDB",
  multipleStatements: true,
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.hashedToken;
  if (!token) {
    return res.json({ Message: "We need token,please provide" });
  } else {
    jwt.verify(token, "our-secret-jsonwebtoken-key", (err, decoded) => {
      if (err) {
        return res.json({ Message: "Authentication Error" });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  }
};

app.get("/gallery", verifyUser, (req, res) => {
  return res.json({ Status: "Success", userId: req.userId });
});

app.post("/login", (req, res) => {
  const loginsql = "SELECT * FROM logintbl WHERE user_name=? AND user_pass=?";
  db.query(loginsql, [req.body.userName, req.body.userPass], (err, data) => {
    if (err) return res.json({ Message: "ServerSide error occured" });
    if (data.length > 0) {
      const userId = data[0].user_id;
      const token = jwt.sign({ userId }, "our-secret-jsonwebtoken-key", {
        expiresIn: "1d",
      });
      res.cookie("hashedToken", token);
      return res.json({ Status: "Success" });
    } else {
      return res.json({ Message: "No records found" });
    }
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("hashedToken");
  return res.json({ Status: "Success" });
});

app.post("/signup", (req, res) => {
  // console.log(dataRes);
  const userToken = generateRandomToken();
  // return res.json({userToken});
  const signSql= `
  SET @status = '';
  CALL InsertUserAndLogin(?, ?, ?, ?, @status);
  SELECT @status AS status;`;
  db.query(signSql, [req.body.name, req.body.email, req.body.pass, userToken], (err,data)=>{
    if (err) {
      return res.json({ Message: "ServerSide error occured" });
    }
    const statusResult = data[data.length - 1]; // Get the last result set
    const status = statusResult[0].status;
    if(status === 1){
      return res.json({ Status: "Success" });
    }else{
      return res.json({ Message: "Transaction failed" });
    }
  });
});

app.listen(8081, () => {
  console.log("Running!");
});
