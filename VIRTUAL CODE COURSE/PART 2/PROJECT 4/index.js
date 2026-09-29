import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import {ChatGoogleGenerativeAI} from "@langchain/google-genai";

dotenv.config();

const app = express();

app.use(express.json());

const llm=new ChatGoogleGenerativeAI({
  model:"gemini-3.6-flash",
})

app.post("/ai",async(req,res)=>{
   const {input}=req.body;

   const response=await llm.invoke();

   return res.status(200).json({
    "ai":response.text
   })
})

app.listen(process.env.PORT, () => {
  console.log("Server is running....");
});



// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// app.post("/ai", async (req, res) => {
//   try {
//     const { input } = req.body;

//     const response = await ai.interactions.create({
//       model: "gemini-3.6-flash",
//       system_instruction: "You are an assistant and your name is Super V.",
//       input: input,
//     });

//     console.log(response.output_text);

//     res.json({
//       response: response.output_text,
//     });

//   } catch (error) {
//     console.error("Gemini Error:", error);

//     res.status(500).json({
//       error: "Something went wrong",
//     });
//   }
// });

// app.get("/", (req, res) => {
//   return res.json({
//     message: "Hiii",
//   });
// });

