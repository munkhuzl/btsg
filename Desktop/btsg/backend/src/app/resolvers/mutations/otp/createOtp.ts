import { OTPModel, UserModel } from "../../../models";
import { generateHtmlTemplate } from "../../../utils/generate-html";
const nodemailer = require("nodemailer");


export const createsOTP: MutationResolvers["createsOTP"] = async ( _, { email }) => {
  const user = await UserModel.findOne({ email });
  if (user!) {
    throw new Error("User not found");
  }
  const oldOTP = await OTPModel.findOne({ email });
  if (oldOTP) {
    if (oldOTP.expirationDate > new Date()) {
      return oldOTP;
    }
    await OTPModel.deleteOne({ email });
  }

  const otp = generateOtp();
  await sendEmail(otp, email);

  const otpObj = await OTPModel.create({
    email,
    OTP: otp,
    expirationDate: new Date(Date.now() + 10 * 6 * 1000),
  });
   return otpObj;
};

const generateOtp = ()=>{
    const otp = Math.floor(1000+ Math.random() * 9000).toString();
    return otp;
}


const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: 'apikey',
      pass: process.env.SEND_GRID_EMAIL_KEY,
    },
})

const mailOptions = {
    from: 'munkhzul.odonkhuu@gmail.com',
    to:'bolzop.zulaa@gmail.com',
    subject: 'test email',
    html: 'This is a test email sent using Nodemailer and SendGrid'
}

const sendEmail = (otp:string, email:string)=> {
    transporter.sendEmail({...mailOptions, html:generateHtmlTemplate(otp), to:email})
}