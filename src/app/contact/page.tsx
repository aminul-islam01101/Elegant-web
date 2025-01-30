"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import bg from "../../../public/assets/mainBg.png";

type Inputs = {
  name: string;
  email: string;
  message: string;
  honeypot?: string; // Optional field for honeypot
};

const ContactPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Honeypot Check
    if (data.honeypot) {
      console.warn("Spam detected!");
      return;
    }

    console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, "this line");

    // Send email using EmailJS
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          Swal.fire(
            "Message Sent",
            "Your message has been sent successfully!",
            "success"
          );
          reset();
        },
        (error) => {
          console.error("Email send failed:", error);
          Swal.fire(
            "Error",
            "Failed to send your message. Please try again.",
            "error"
          );
        }
      );
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat overflow-x-hidden">
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="w-full h-full">
          <Image
            alt="contact us"
            src={bg}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>

      <motion.div
        initial={{ y: -1300, opacity: 0.1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "circIn" }}
        className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8 z-20 mt-[5%] w-full md:w-[80%] "
      >
        <div className="text-white w-full">
          <div className="mb-6 flex flex-col items-center">
            <span className="text-gray-300 mt-2 uppercase">Contact Us</span>
          </div>
          {/* form field */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center"
          >
            {/* Honeypot Field (Hidden) */}
            <input
              type="text"
              placeholder="Leave this empty"
              {...register("honeypot")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="my-2 w-full md:w-[50%]">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md w-full"
                {...register("name", { required: "Name is required" })}
              />
              <div className="text-center">
                {errors.name && (
                  <span className="text-red-500 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>

            <div className="my-2 w-full md:w-[50%]">
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md w-full"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <div className="text-center">
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="my-2 w-full md:w-[50%]">
              <textarea
                placeholder="Your Message"
                className="rounded-3xl border-none bg-transparent bg-opacity-50 px-6 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md w-full h-40 resize-none"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              <div className="text-center">
                {errors.message && (
                  <span className="text-red-500 text-xs">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-3 flex justify-center">
              <button
                type="submit"
                className="rounded-3xl bg-[#4db5ff] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
