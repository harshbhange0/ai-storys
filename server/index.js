import express from "express";
import OpenAI from "openai";

const app = express();
app.use(express.json());

let apiKey = "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"; //  make it an environment variable
const openai = new OpenAI({
  apiKey: apiKey,
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
  });

  console.log(chatCompletion.choices);
}

main();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});
