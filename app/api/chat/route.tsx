import { trainingData } from "@/training/data";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { messages, conversationHistory } = await req.json();
    
        const latestMessage = messages[messages.length - 1];
        
        const myHeaders = new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.WORQHAT_API}`
        });

        const requestBody = {
            question: latestMessage.content,
            randomness: 0.6,
            stream_data: false,
            model: "aicon-v4-large-160824",
            training_data: "Before you start reading the training data, the read the following paragraph that gives you the conversation history, your response should align with your conversation history \n" + `\n *****\n coversation history: ${JSON.stringify(conversationHistory, null, 2)}\n *****`+ trainingData,
            response_type: "text",
        };

        const response = await fetch("https://api.worqhat.com/api/ai/content/v4", {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const result = await response.json();

        const lastConvo = {
            conversation_id: result.conversation_id,
            user: latestMessage.content,
            assistant: result.content
        } 
        
        return NextResponse.json({ content: result.content, lastConvo  });

    } catch (error) {
        console.error('Error processing chat request:', error);
        return NextResponse.json(
            { error: 'Failed to process chat request' },
            { status: 500 }
        );
    }
}