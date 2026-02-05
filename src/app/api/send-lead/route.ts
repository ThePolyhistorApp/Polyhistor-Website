import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, groupSize, phone, linkedin, to } = body;

    // Format the email content
    const emailContent = `
New Enterprise Lead - Pilot Demo Request

Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company}
- Group Size: ${groupSize}
- Phone: ${phone || "Not provided"}
- LinkedIn: ${linkedin || "Not provided"}

Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}

Please follow up within 24 hours.
    `.trim();

    console.log("New enterprise lead received:");
    console.log(emailContent);

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, we'll just log it
    // In production, you would send email here:
    // await sendEmail({
    //   to: to,
    //   subject: `New Enterprise Lead from ${company}`,
    //   text: emailContent,
    // });

    return NextResponse.json({ 
      success: true, 
      message: "Lead received and logged" 
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process lead" },
      { status: 500 }
    );
  }
}
