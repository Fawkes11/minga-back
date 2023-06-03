import { Router } from "express";
import Author from "../models/Author.js";

let authorsRouter = Router();

/* Acá se configuran las rutas para CRUD de authors */
authorsRouter.post("/", async (req, res) => {
  try {
    let data = req.body;
    let one = Author.create(data);
    if(one){
        return res.status(201).json({
            response: one,
            message: "created"
        })
    }else{
        return res.status(400).json({
            response: null,
            message: 'not created'
        })
    }
  } catch (error) {
    return res.status(500).json({
      response: null,
      message: "not created",
    });
  }
});

authorsRouter.get("/", async (req, res) => {
  try {
    let all = await Author.find();
    if (all) {
      return res.status(200).json({
        response: all,
        message: "authors found!",
      });
    } else {
      return res.status(404).json({
        response: null,
        message: "No authors found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      response: "null",
      message: "error",
    });
  }
});

export default authorsRouter;
