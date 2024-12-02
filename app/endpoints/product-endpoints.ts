"use server";
import db from "@/prisma/db";
import { Product } from "@prisma/client";

export async function getAllProducts() {
  try {
    // Lägg till en where-klasul för att hämta produkter som inte är arkiverade
    return await db.product.findMany({
      where: {
        isArchived: false, // Filtrera bort arkiverade produkter
      },
    });
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
    await db.product.delete({
      where: { id: id },
    });
  } catch (error) {
    console.error("Failed to delete product", error);
    throw new Error("Failed to delete product");
  }
}
