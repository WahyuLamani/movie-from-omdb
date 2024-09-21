import Chat from "@/app/pusher/chat";

export default function Chats() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Real-time Chat</h1>
            <div className="border-2 border-blue-500 rounded-md p-4 w-full max-w-md">
                <Chat />
            </div>
        </div>
    );
}
