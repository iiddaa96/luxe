"use server";
import db from "@/prisma/db";
import { Product } from "@prisma/client";

export async function getAllProducts() {
  // Hämta alla produkter som inte är arkiverade från databasen
  try {
    return await db.product.findMany({
      where: {
        isArchived: false, // Filtrera bort arkiverade produkter
      },
    });
  } catch (error) {
    console.error("Failed to retrieve all products:", error);
    throw new Error("Failed to retrieve all products");
  }
}

// Hämta en specifik produkt från databasen baserat på id
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

// Lägg till en ny produkt i databasen med valda kategorier
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

// Arkivera en produkt i databasen baserat på id
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
