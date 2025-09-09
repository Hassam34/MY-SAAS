import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    // Placeholder: integrate email provider or database here
    console.log("Contact submission:", { name, email, message });

    return NextResponse.json({ message: "Thanks! We will get back to you soon." });
  } catch (error) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}

