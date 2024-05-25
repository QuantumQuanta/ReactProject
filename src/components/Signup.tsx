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

function Signup() {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().min(7).max(254).email(),
    pass: z.string().min(8).max(15),
    cpass: z.string().min(8).max(15),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      pass: "",
      cpass: "",
      terms: false,
    },
  });
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const postSignupData = async (data: object) => {
    await axios
      .post("http://localhost:8081/signup", data)
      .then((res) => {
        // console.log(res.status);
        if (res.data.Status === "Success") {
          navigate("/login");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const userName = values.name;
      const email = values.email;
      const pass = values.pass;
      const cpass = values.cpass;
      const terms = values.terms;
      // console.log(terms);

      if (pass === cpass && terms === true) {
        const signupData = {
          name: userName,
          email: email,
          pass: pass,
          terms: terms,
        };
        // console.log("SignupData",signupData);
        postSignupData(signupData);
      }
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
        <h2 className="text-2xl font-bold text-slate-600 dark:text-slate-300 mb-6">
          Sign Up
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Full Name (This will be your Username)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="your@email.id" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pass"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cpass"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Rewrite Password "
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center">
                      <Input
                        {...field}
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="link-checkbox"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        I agree with the{" "}
                        <a
                          href="#"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          terms and conditions
                        </a>
                        .
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="animate-bounce bg-[#324a5f] dark:bg-[#ccc9dc]"
            >
              Signup
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
}

export default Signup;
