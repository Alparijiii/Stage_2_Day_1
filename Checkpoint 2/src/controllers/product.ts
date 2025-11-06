import { Request, Response } from "express";
import { posts as products, Post as Product } from "../models/product";

export const getProducts = (req: Request, res: Response) => {
  res.json(products);
};

export const createProduct = (req: Request, res: Response) => {
  const { name, price, type } = req.body;
  if (!name || !price || !type) {
    return res
      .status(400)
      .json({ message: "Name, price, and type are required" });
  }
  const newProduct: Product = {
    id: products.length + 1,
    name,
    price: Number(price),
    type,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};
