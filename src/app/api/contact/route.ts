import { NextResponse } from "next/server";
import { brand } from "@/data/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, role, type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Forward to FormSubmit to deliver to fusecraftsngp@gmail.com
    const forwardPayload = {
      name: String(name).trim(),
      email: String(email).trim(),
      role: role ? String(role).trim() : "Not specified",
      "project type": type ? String(type).trim() : "Not specified",
      message: String(message).trim(),
      _subject: `New Project Inquiry from ${name} — Fusecrafts Website`,
      _replyto: String(email).trim(),
      _template: "table",
      _captcha: "false",
    };

    const targetEmail = brand.email || "fusecraftsngp@gmail.com";
    const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://fusecrafts.com",
        Referer: "https://fusecrafts.com/contact",
      },
      body: JSON.stringify(forwardPayload),
    });

    const data = await res.json().catch(() => ({}));

    // FormSubmit returns 200 with activation message or success
    if (res.ok) {
      return NextResponse.json({
        success: true,
        message:
          data.message ||
          `Thank you, ${name}. Your message has been sent to ${targetEmail}.`,
        isActivationNotice:
          typeof data.message === "string" &&
          data.message.toLowerCase().includes("activation"),
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: data.message || "Unable to submit inquiry at this time.",
      },
      { status: res.status || 500 }
    );
  } catch (error) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while sending your message.",
      },
      { status: 500 }
    );
  }
}
