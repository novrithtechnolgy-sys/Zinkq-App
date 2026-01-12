import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;
    console.log(body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "sumalnadira123@gmail.com",
        pass: process.env.EMAIL_PASS || "vwud gbqe wvxq pjbk",
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: process.env.EMAIL_TO || "hello@zinkq.com",
      subject: `📨 New Message from ${firstName} ${lastName} via Website Contact Form`,
      html: `
      <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f5f5f5; padding: 40px;">
        <div style="max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e5e5;">
  
          <!-- ZINKQ GRADIENT HEADER -->
          <div style="
              padding: 35px; 
              text-align: center; 
              color: white;
              background: linear-gradient(90deg, #007CE5, #6F00FF, #6F00FF, #00DBAC);
          ">
            <img src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763724246/ahtvdlm6csewlybkm1qf.png"
                 alt="Company Logo"
                 style="width: 220px;" />
            <h1 style="margin: 0; font-size: 22px; letter-spacing: 1px;">New Contact Form Submission</h1>
          </div>
  
          <div style="padding: 30px;">
            <h2 style="color: #1C1E26; margin-top: 0; font-size: 18px;">Contact Details</h2>
            <table width="100%" cellpadding="5" cellspacing="0" style="border-collapse: collapse; color: #000;">
              <tr>
                <td style="font-weight: bold; width: 150px;">Name:</td>
                <td>${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Email:</td>
                <td><a href="mailto:${email}" style="color: #007CE5; text-decoration: underline;">${email}</a></td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Phone:</td>
                <td>${phone || "Not provided"}</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Subject:</td>
                <td>${subject || "Not provided"}</td>
              </tr>
            </table>
  
            <h2 style="color: #1C1E26; margin-top: 30px; font-size: 18px;">Message</h2>
            <div style="
                background: #E9EBEF;
                border-left: 4px solid #6F00FF;
                padding: 15px;
                margin-top: 10px;
                line-height: 1.6; 
                color: #1C1E26;
            ">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
  
          <!-- ZINKQ GRADIENT FOOTER -->
          <div style="
              padding: 20px;
              text-align: center;
              font-size: 12px;
              color: #ffffff;
              background: linear-gradient(135deg, #1C1E26, #007CE5, #6F00FF);
          ">
            <p style="margin: 0;">This message was sent from your website contact form.</p>
            <p style="margin: 5px 0;">© ${new Date().getFullYear()} Zinkq. All rights reserved.</p>
          </div>
  
        </div>
      </div>
    `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent!" });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ 
      success: false, 
      message: "Failed to send email" 
    }, { status: 500 });
  }
}
