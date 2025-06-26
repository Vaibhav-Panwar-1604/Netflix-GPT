import OpenAI from "openai";

const token = import.meta.env.VITE_GITHUB_TOKEN;

const openAi = new OpenAI({
  baseURL: "https://models.github.ai/inference",
  apiKey: token,
  dangerouslyAllowBrowser: true,
});

export default openAi;
