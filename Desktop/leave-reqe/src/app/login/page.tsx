"use client";

import Image from "next/image";

import { useState } from "react";
// import { useLogin } from '@/context/LoginContext';
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { error } from "console";
import { object, string, number, date, InferType } from "yup";
import OtpPage from "../components/otpPage";
import Router from "next/router";
import Link from "next/link";
import logo_1 from "@/assets/logo.jpeg"
const Login = () => {
  return (
    <div className="mt-24" data-testid="createOTP-modal">
      <Card className="bg-white w-[500px] h-full m-auto mx-auto p-12">
        <h1 className="font-bold text-center mb-6 mx-4">Нэвтрэх</h1>
        <Image
          src="/logo_1.jpeg"
          alt="logo"
          width={150}
          height={150}
          className="mx-auto"
        />
        <Label className="">И-Мэйл хаягаа оруулна уу</Label>
        <Input className="my-3"></Input>
        <Link href="/otp">
          <Button type="submit" className="w-full">
            Нэвтрэх
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Login;
