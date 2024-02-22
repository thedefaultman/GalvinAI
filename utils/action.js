'use server'

import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

export const generateChatResponse = async (chatMessages) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [
                {role: 'system', content: 'you are a helpful travel planning assistant name Galvin'},
                ...chatMessages
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0.1
        })
    
        return response.choices[0].message
    } catch (error) {
        return null
    }
}