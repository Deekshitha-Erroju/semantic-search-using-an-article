import { query_embedding } from "../article serves/query_embedding.service.js"
import { Chunk_Model } from "../article model/chunk.model.js"
import {Types} from "mongoose" 
//retrival
async function retrival_of_article(req,res) {
      let  article_id=req.params.article_Id
       //convert the object id into a mongodb object
      const id=new Types.ObjectId(article_id)
      const query=req.body.query
      if(!query){
        res.status(401).json({success:false,message:"no query was found"})
      }
      //generate an embedding
      const embedded_query=await query_embedding(query)
      //perform verctor search
      let results=await Chunk_Model.aggregate([
      {
        $vectorSearch:{
             index:"rag_vector_index",
             path:"embedding",
             queryVector:embedded_query,
             numCandidates:100,
             limit:5
             
        }
      },
      {
        $project:{
        _id:0,
        Chunk_index:1,
        Chunk_Text:1,
        score:{
            $meta:"vectorSearchScore"
          }
        }  
       }
      ])
      res.json({success:true,data:results})
}
export {retrival_of_article}