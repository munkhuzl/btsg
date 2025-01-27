"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw } from "lucide-react";
import Router from "next/router";
import Login from "../login/page";
import { useRouter } from 'next/navigation';
const OtpPage = () => {
  const [otp, setOtp] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const router= useRouter();

  const login = useCallback(async ()=> {
    if(otp.length !==4) return 
  })

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError(null);
    try {
      const isValid = otp === "1234"; 
      if (isValid) {
        setIsVerified(true);
      } else {
        throw new Error("Invalid OTP.");
      }
    } catch (err: any) {
      setError({ message: err.message });
    } finally {
      setLoading(false);
    }
    router.push("./login")
  };

  return (
    <div className="mt-24" data-testid="check-otp-modal">
      <Card className="bg-white w-[500px] h-full m-auto mx-auto p-10">
        <h1 className="my-6 font-bold text-center">Нэвтрэх</h1>
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="mx-auto"
        />
        <div className="flex flex-col items-center mt-8">
          <Label className="my-4">И-мэйлээ шалгаад код оо оруулна уу.</Label>
          <InputOTP
            maxLength={4}
            onChange={(value) => setOtp(value)}
            className="mx-auto"
            data-testid="otp-input"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        {loading && (
          <div className="mt-4 text-center text-gray-500">Verifying OTP...</div>
        )}
        {error && (
          <div className="mt-4 text-center text-red-500">{error.message}</div>
        )}
        {isVerified && (
          <div className="mt-4 text-center text-green-500">
            OTP Verified! Proceeding to login...
          </div>
        )}

        <Button
          onClick={handleVerifyOtp}
          disabled={loading || otp.length < 4}
          className="w-full mt-6"
        >
          Verify OTP
        </Button>

        <div className="flex items-center justify-between p-6">
          <Link href="/login">
            <ArrowLeft />
          </Link>
          <div
            onClick={() => console.log("Resend OTP")}
            className="cursor-pointer"
          >
            <RefreshCw />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OtpPage;
