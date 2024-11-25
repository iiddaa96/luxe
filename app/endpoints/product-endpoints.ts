"use server";
import db from "@/prisma/db";

// Hämta alla produkter
export async function getAllProducts() {
  try {
    await db.product.findMany();
  } catch (error) {
    console.error("Failed to retrieve all products:", error);
    throw new Error("Failed to retrieve all products");
  }
}

// Hämta en specifik produkt
export async function getProduct(id: number) {
  try {
    await db.product.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error("Failed to retrieve product:", error);
    throw new Error("Failed to retrieve product");
  }
}

// Skapa en produkt
export async function createProduct(data: {
  image: string;
  alt: string;
  price: number;
  content: string;
}) {
  try {
    await db.product.create({
      data,
    });
  } catch (error) {
    console.error("Failed to create product:", error);
    throw new Error("Failed to create product");
  }
}
