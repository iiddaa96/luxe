"use server";
import db from "@/prisma/db";
import { Product } from "@prisma/client";

export async function getAllProducts() {
  try {
    return await db.product.findMany();
  } catch (error) {
    console.error("Failed to retrieve all products");
    throw new Error("Failed to retrieve all products");
  }
}

export async function editProduct(
  updatedProduct: Product,
  chosenCategories: number[],
  id: number
) {
  try {
    await db.product.update({
      where: { id: id },
      data: {
        title: updatedProduct.title,
        image: updatedProduct.image,
        price: updatedProduct.price,
        content: updatedProduct.content,
        categories: {
          set: chosenCategories.map((id) => ({
            id,
          })),
        },
      },
    });
  } catch (error) {
    console.error("Failed to edit product", error);
    throw new Error("Failed to edit product");
  }
}

export async function addNewProduct(
  newProduct: Product,
  chosenCategories: number[]
) {
  try {
    await db.product.create({
      data: {
        title: newProduct.title,
        image: newProduct.image,
        alt: newProduct.title,
        price: newProduct.price,
        content: newProduct.content,
        categories: {
          connect: chosenCategories.map((id) => ({
            id,
          })),
        },
      },
    });
  } catch (error) {
    console.error("Failed to add new product", error);
    throw new Error("Failed to add new product");
  }
}

export async function deleteProduct(id: number) {
  try {
    await db.product.update({
      where: { id: id },
      data: {
        isArchived: true,
      },
    });
  } catch (error) {
    console.error("Failed to delete product");
    throw new Error("Failed to delete product");
  }
}
