import exp from "express"
export const ArticleRouter=exp.Router()
import { Injestion_of_article } from "../article controllers/article.controller.js"

//ingestion of article
ArticleRouter.post("/ingestion",Injestion_of_article)
//retrival of data
ArticleRouter.post("/retrival",(req,res)=>{})