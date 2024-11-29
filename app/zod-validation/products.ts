import { z } from "zod";

export const ProductCreateSchema = z.object({
  title: z.string().min(3).max(170),
  description: z.string().min(5).max(500),
  price: z.number().int().positive(),
});

export type ProductCreate = z.infer<typeof ProductCreateSchema>;

export const productSchema = z.object({
  id: z.number().optional(),
  image: z.string().url().optional(),
  title: z
    .string()
    .min(5, { message: "The title must have at least 5 letters" })
    .optional(),
  alt: z.string().optional(),
  price: z.coerce.number().positive({ message: "Write a price number" }),
  content: z
    .string()
    .min(1)
    .max(1200, { message: "The post may be 400 characters long" })
    .optional(),
});

export type Product = z.infer<typeof productSchema>;

export interface CartItem extends Product {
  quantity: number;
}
