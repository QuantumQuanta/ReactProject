import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Gallery() {
  const [auth, setAuth] = useState(false);
  const [userid, setUserid] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/gallery").then((res) => {
      if (res.data.Status === "Success") {
        setAuth(true);
        setUserid(res.data.userId);
      } else {
        setAuth(false);
        setMessage(res.data.Message);
      }
    });
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios
      .post("http://localhost:8081/logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
          //   console.log(navigate);
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{
      ease: [0.17, 0.67, 0.83, 0.67],
      duration: 2,
      x: { duration: 1 }
    }}
    >
      {auth ? (
        <div>
          <h1>Welcome to the gallery user-{userid}</h1>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <div>
          <h1>{message}</h1>
          <h1>Login Now</h1>
          <Link
            to="/login"
            className="inline-block px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </motion.div>
  );
}

export default Gallery;
