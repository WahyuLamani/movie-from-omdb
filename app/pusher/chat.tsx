"use client";

import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";

export default function Chat() {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
            cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
        });

        const channel = pusher.subscribe("chat");
        channel.bind("message", (data: { message: string }) => {
            setMessages((prevMessages) => [...prevMessages, data.message]);
        });
        return () => {
            pusher.unsubscribe("chat");
        };
    }, []);
    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            message: {
                value: string;
            };
        };
        const message = target.message.value;
        await fetch("/api/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });
        target.message.value = "";
    };
    return (
        <div className="">
            <ul className="text-sm">
                {messages.map((message, index) => (
                    <li
                        className="bg-gray-200 rounded-md p-2 m-2 text-right"
                        key={index}
                    >
                        {message}
                    </li>
                ))}
            </ul>
            <form onSubmit={sendMessage} className="flex gap-2 justify-between">
                <input
                    type="text"
                    placeholder="Type your message here"
                    name="message"
                    className="border-2 border-gray-300 focus:outline-blue-100 rounded-md p-2 w-full max-w-md"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
