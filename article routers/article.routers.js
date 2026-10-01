import exp from "express"
export const ArticleRouter=exp.Router()
import { Injestion_of_article } from "../article controllers/article_injestion.controller.js"
import { retrival_of_article } from "../article controllers/article_retrival.controller.js"

//ingestion of article
ArticleRouter.post("/ingestion",Injestion_of_article)
//retrival of data
ArticleRouter.post("/retrival/:article_Id/search",retrival_of_article)