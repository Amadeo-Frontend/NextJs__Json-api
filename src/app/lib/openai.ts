import { OpenAI } from "openai";

// Acessando a chave da API do OpenAI através das variáveis de ambiente
const apiKey = process.env.OPENAI_API_KEY;

export const openai = new OpenAI({
    apiKey: apiKey,
});
