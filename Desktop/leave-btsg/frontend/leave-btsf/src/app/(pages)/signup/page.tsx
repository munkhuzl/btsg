"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormValues {
  name: string;
  email: string;
  password: string;
  rePassword: string;
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Нэрээ оруулна уу?"),
    email: Yup.string()
      .email("И-мэйл буруу байна")
      .required("И-Мэйл ээ оруулна уу?"),
    password: Yup.string()
      .min(8, "Нууц үг хамгийн багадаа 8 тэмдэгттэй байх ёстой")
      .matches(/[A-Z]/, "Нууц үг дор хаяж 1 том үсэг агуулсан байх ёстой")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Нууц үг дор хаяж 1 тусгай тэмдэгт агуулсан байх ёстой"
      )
      .required("Нууц үгээ оруулна уу?"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Нууц үг давтагдаагүй байна")
      .required("Нууц үгээ давтаж оруулна уу?"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await singUp(values);
    },
  });

  const singUp = async (values: FormValues) => {
    setLoading(true);
    setErrorMessage("");
    try {
      const allUsers = values;
      const response = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        body: JSON.stringify(allUsers),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (response.status === 201) {
        console.log("successfully registered the user");
        router.push("/login");
      } else {
        const data = await response.json();
        setErrorMessage(data.errorMessage || "Registration failed");
      }
    } catch (error) {
      setErrorMessage("Error during registering the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto login-box flex align-items-center w-[334px] my-[100px]">
      <form onSubmit={formik.handleSubmit}>
        <div className="w-[334px] ">
          <h1 className="mx-center font-semibold  mb-5 text-center text-[#09090B]">
            Бүртгүүлэх
          </h1>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}{" "}
          {/* Display error message */}
          <Input
            type="text"
            placeholder="Нэр"
            className="rounded-2xl w-full mt-6 text-black"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <span className="text-red-500 text-sm text-start">
              {formik.errors.name}
            </span>
          )}
          <Input
            type="email"
            id="email"
            placeholder="И-мэйл"
            className="rounded-2xl w-full mt-4 text-black"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <span className="text-red-500 text-sm text-start">
              {formik.errors.email}
            </span>
          )}
          <Input
            id="password"
            type="password"
            placeholder="Нууц үг"
            className="rounded-2xl w-full mt-4 text-black"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <span className="text-red-500 text-sm text-start">
              {formik.errors.password}
            </span>
          )}
          <Input
            id="rePassword"
            type="password"
            placeholder="Нууц үг давтах"
            className="rounded-2xl w-full mt-4 text-black"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
          />
          {formik.errors.rePassword && formik.touched.rePassword && (
            <span className="text-red-500 text-sm text-start">
              {formik.errors.rePassword}
            </span>
          )}
          <Button
            type="submit"
            variant="default"
            className="bg-blue-500 w-full text-white mt-3 rounded-2xl"
            disabled={!(formik.isValid && formik.dirty) || loading}
          >
            {loading ? "Ачааллаж байна..." : "Үүсгэх"}
          </Button>
          <Button
            asChild
            variant="default"
            className="text-blue-500 rounded-2xl"
          >
            <Link
              href="/login"
              className="bg-sky-50 mt-8 w-full def2"
              type="password"
            >
              Нэвтрэх
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
