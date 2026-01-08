
import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    
    const { name, subject, email, message } = await req.json();
    

    
    if (!name || !subject || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' }, // Error message
        { status: 400 } // 400 = Bad Request
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // We're using Gmail to send emails
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_APP_PASSWORD, 
      },
    
    });

    
    const mailOptions = {
      from: process.env.GMAIL_USER, 
      to: process.env.GMAIL_USER, 
      subject: `Portfolio Contact: ${message.substring(0, 50)}`, 
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <!-- Email Header -->
          <h2 style="color: #2563eb;">New Message from Submission</h2>
          
          <!-- Box with sender's information -->
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <!-- ${name} inserts the actual name from the form -->

            <p><strong>Subject:</strong> ${subject}</p>
            <!-- ${subject} inserts the actual name from the form -->
            
            <p><strong>Email:</strong> ${email}</p>
            <!-- ${email} inserts the sender's email address -->
          </div>
          
          <!-- Box with the actual message -->
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #334155; margin-top: 0;">Message:</h3>
            <p style="color: #475569; line-height: 1.6;">${message}</p>
            <!-- ${message} inserts the full message text -->
          </div>
          
          <!-- Footer information -->
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 14px;">
            Reply directly to this email to respond to ${name} at ${email}
          </p>
        </div>
      `,
      
      
      replyTo: email, 
    };

   
    await transporter.sendMail(mailOptions);
   
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 } // 200 = Success
    );
    
  } catch (error) {
    // Handle errors
    
    console.error('Error sending email:', error);
   
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 } // 500 = Server Error
    );
  }
}

