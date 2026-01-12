import { GoogleGenAI } from "@google/genai";
import { ORACLE_SYSTEM_PROMPT } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    if (!process.env.API_KEY) {
      console.warn("API Key not found. Oracle features will be limited.");
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const consultTheOracle = async (query: string): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: query }] }
      ],
      config: {
        systemInstruction: ORACLE_SYSTEM_PROMPT,
        temperature: 1.2, // High creativity
        topP: 0.95,
        topK: 40,
      }
    });

    return response.text || "Il silenzio avvolge il Vittoriale oggi...";
  } catch (error) {
    console.error("The Oracle is silent:", error);
    return "Le nebbie del Garda offuscano la mia vista. Riprova più tardi, o viandante.";
  }
};
