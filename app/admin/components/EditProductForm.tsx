"use client";
import { deleteProduct, editProduct } from "@/app/endpoints/product-endpoints";
import { productSchema } from "@/app/zod-validation/products";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Prisma, Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface Props {
  categories: Prisma.CategoryGetPayload<{}>[]; // Alla kategorier
  product: Product & { categories: { id: number; name: string }[] }; // Produkt med sina kategorier
}

export default function EditProductForm({ categories, product }: Props) {
  const router = useRouter();

  // Initialisera valda kategorier från produktens kategorier
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    product.categories.map((c) => c.id.toString())
  );

  const form = useForm<Product>({
    mode: "onChange",
    resolver: zodResolver(productSchema),
    defaultValues: {
      ...product,
    },
  });

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedCategories(event.target.value as string[]);
  };

  const save = async (data: Product) => {
    try {
      const chosenCategories = selectedCategories.map((c) => Number(c));
      await editProduct(data, chosenCategories, product.id);
      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(product.id);
      router.push("/admin"); // Navigera till admin-sidan
      router.refresh(); // Ladda om sidan för att visa uppdaterade data
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(save)}
      sx={{
        borderRadius: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <TextField
        fullWidth
        label="Title"
        defaultValue={product.title}
        {...form.register("title")}
        sx={{ width: "100%", marginBottom: "20px" }}
      />

      <TextField
        fullWidth
        label="Image URL"
        defaultValue={product.image}
        {...form.register("image")}
        sx={{ width: "100%", marginBottom: "20px" }}
      />

      <TextField
        fullWidth
        label="Price"
        defaultValue={product.price.toString()}
        {...form.register("price")}
        sx={{ marginBottom: "20px" }}
      />

      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel id="categories-label">Categories</InputLabel>
        <Select
          labelId="categories-label"
          multiple
          value={selectedCategories}
          label="Categories"
          placeholder="Choose a category"
          onChange={handleCategoryChange}
          onClose={() => setSelectedCategories(selectedCategories)}
        >
          {categories.map((c) => (
            <MenuItem key={c.id} value={c.id.toString()}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Content"
        multiline
        rows={6}
        defaultValue={product.content}
        {...form.register("content")}
        sx={{ width: "100%", marginBottom: "40px", height: "150px" }}
      />
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button type="submit" variant="contained">
          <SaveIcon />
          Save
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          <DeleteIcon />
          Delete
        </Button>
      </Box>
    </Box>
  );
}
