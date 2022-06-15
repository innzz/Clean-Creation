import express, { Request, Response } from "express";
import next from "next";
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
var cors = require('cors')
app.use(cors());

//Get product by id
app.get("/products/:id", async (req: Request, res: Response,next) => {
  return res.status(200).json({ message: "hello world." });
});

//Get all Products
app.get("/products", async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({});
    console.log(products)
    res.json(products);
  } catch (error) {
    res.send({message : error});
  }
});

//Post a product or Create Product
app.post("/products", async (req: Request, res: Response) => {
  return res.status(200).json({ message: "hello world." });
});

//Delete a product
app.delete("/products/:id", async (req: Request, res: Response) => {
  return res.status(200).json({ message: "hello world." });
});

//Update a Product
app.patch("/products/:id", async (req: Request, res: Response) => {
  return res.status(200).json({ message: "hello world." });
});

const port = 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));
