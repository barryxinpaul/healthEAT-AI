import Image from "next/image";
import ChatComponent from "../components/chatComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className ="bg-slate-400 p-3 w-[1000px] rounded-md text-white" >
        <h2 className="text -2xl text-center"> HealthEAT AI Chatbot</h2>
        <ChatComponent />
      </div>
    </main>
  );
}
