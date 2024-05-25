import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const formSchema = z.object({
    username: z
      .string()
      .min(6, {
        message: "Username must be at least 6 characters.",
      })
      .max(50),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const postLoginData = async (data: object) => {
    await axios
      .post("http://localhost:8081/login", data)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/gallery");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      const username = values.username;
      // const hashedPassword = bcrypt.hashSync(values.password, 10);
      const password = values.password;
      const data = {
        userName: username,
        userPass: password,
      };
      // console.log(hashedPassword);
      // console.log();
      postLoginData(data);
      // console.log("Form submission success");
    } catch (error) {
      console.log("Error in form submission", error);
    }
  }
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        ease: [0.17, 0.67, 0.83, 0.67],
        duration: 2,
        x: { duration: 1 },
      }}
      className="flex items-center justify-center w-[480px] h-[480px] bg-transparent "
    >
      <div className="w-[350px] p-8 bg-slate-200 dark:bg-slate-800 rounded-lg shadow-lg bg-opacity-50 dark:bg-opacity-50 text-center">
        <h2 className="text-2xl font-bold text-slate-600 dark:text-slate-300 mb-6 ">
          Login
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Password" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="animate-bounce bg-[#324a5f] dark:bg-[#ccc9dc]"
            >
              Login
            </Button>
          </form>
        </Form>
        <a
          href="#"
          className="text-[#415a77] dark:text-[#f2e9e4] hover:text-[#1b263b] dark:hover:text-[#ffa69e] font-medium transition duration-300 ease-in-out p-2"
        >
          Forgot Username/Password?
        </a>
      </div>
    </motion.div>
  );
}

export default Login;
