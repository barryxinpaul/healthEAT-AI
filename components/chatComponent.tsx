'use client'

import { useChat, Message } from "ai/react"


export default function ChatComponent() {
    // useChat -> handles messages for us. user input, handling user subits, etc
    const {input, handleInputChange, handleSubmit, isLoading, messages} = useChat()

    return (
        <div>
            { /* Chatbot component */ }
            {messages.map((message : Message) => {
                return (
                    <div key={message.id}>
                    {/* Name of person talking */}
                    {message.role === 'system'? 
                    <h3 className="text-lg font -semibold mt-2">Chatbot</h3>:
                    <h3 className="text-lg font -semibold mt-2">User</h3>}

                    {/* Message */}
                    {message.content.split('\n').map((currentTextBlocks: string, index: number) => {
                        if (currentTextBlocks === '') {
                            return <p key = {message.id + index}>&nbsp;</p> // ""
                        } else {
                            return <p key = {message.id + index}>{currentTextBlocks}</p>
                        }
                        return (
                            <></>
                        )
                    })}


                    </div>
                )
            })}

            <form className="mt-12" onSubmit={handleSubmit}>
                <p>User</p>
                <textarea className="mt-2 w-full bg-slate-200 p-2" placeholder="Type here" value={input} onChange={handleInputChange}/>
                <button className="rounded-md bg-slate-600 w-full p-2 mt-2">Send</button>
            </form>
        </div>
    )
}