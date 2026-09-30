 import { Article_model } from "../article model/article.model.js"
 import { Chunk_Model } from "../article model/chunk.model.js"
 import { Split_text_into_chunks } from "../article serves/chunk.serve.js"

 //injestion of article
 async function Injestion_of_article(req,res) {
    let {title,article}=req.body
   //save it into the database
   let saved_article= await Article_model.create({title,article})
   //send the artile id and content into chunking service which divides the article into chunks
   const list_of_chunks= await Split_text_into_chunks(saved_article.article)
   res.json(list_of_chunks)
   //send the chunks to embedding service will will create mebedding for the chunks
   //send res
 }
 export {Injestion_of_article}