import { pusher } from "@/lib/pusher";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { message } = await request.json();
    await pusher.trigger("chat", "message", {
        message,
    });
    return NextResponse.json({ message: "Message sent" });
}
