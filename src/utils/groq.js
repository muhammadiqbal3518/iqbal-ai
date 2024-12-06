import {Groq} from "groq-sdk"

const API_KEY = import.meta.env.VITE_API_KEY;

const groq = new Groq({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export const requestToGroqAI = async(content) => {
    const reply = await groq.chat.completions.create({
        messages: [
            {
                role: 'user',
                content,
            }
        ], 
        model: 'llama3-8b-8192',
    });
    return reply.choices[0].message.content;
}
