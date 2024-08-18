// Route Handlers for Chat API: POST localhost:3000/api/chat request

import {Configuration, OpenAIApi} from 'openai-edge';
import {OpenAIStream, StreamingTextResponse} from 'ai';

export const runtime = 'edge'; // Provide the runtime for the OpenAI API

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {
    const { messages } = await request.json(); 

    // createChatCompletion -> get response from GPT model

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream:true,
        messages: [
            {role:'system', content:'You are a helpful with a mastary of computer science concepts. You explain things in a way that is easy to understand.'},
            ...messages],
    });

    // create a stream of data from OpenAI (stream data to the frontend)

    const stream = await OpenAIStream(response);

    // send the stream a a response to our client/frontend

    return new StreamingTextResponse(stream);
}