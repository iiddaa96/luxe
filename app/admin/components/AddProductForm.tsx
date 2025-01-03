"use client";
import { addNewProduct } from "@/app/endpoints/product-endpoints";
import { productSchema } from "@/app/zod-validation/products";
import { zodResolver } from "@hookform/resolvers/zod";
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
  Typography,
} from "@mui/material";
import { Prisma, Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface Props {
  categories: Prisma.CategoryGetPayload<{}>[];
}

export type ProductWithCategories = Product & { categories: string[] };

export default function AddProductForm({ categories }: Props) {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const form = useForm<ProductWithCategories>({
    mode: "onChange",
    resolver: zodResolver(productSchema),
  });
  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedCategories(event.target.value as string[]);
  };

  const save = (data: ProductWithCategories) => {
    const { categories, ...newProduct } = data;
    const chosenCategories = selectedCategories.map((c) => Number(c));

    addNewProduct(newProduct, chosenCategories);
    router.push("/admin");

    if (!addNewProduct) {
      console.log("Error");
    }
  };
  return (
    <Box
      aria-label="Add product form"
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
      <Box>
        <Typography variant="h1" sx={{ fontSize: "2rem" }}>
          Add new product
        </Typography>
      </Box>

      <TextField
        fullWidth
        label="Title"
        helperText={form.formState.errors.title?.message}
        error={Boolean(form.formState.errors.title)}
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("title")}
      />

      <TextField
        fullWidth
        label="Image url"
        helperText={form.formState.errors.image?.message}
        error={Boolean(form.formState.errors.image)}
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("image")}
      />

      <TextField
        fullWidth
        label="Price"
        helperText={form.formState.errors.price?.message}
        error={Boolean(form.formState.errors.price)}
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("price")}
      />

      {/* Textfält för kategorierna */}
      {/* Är label fel på denna som jag inte kan fixa, har testat massvis med olika lösningar som inte fungerar */}
      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel id="categories-label">Categories</InputLabel>
        <Select
          labelId="categories-label"
          id="categories-select"
          label="Categories"
          multiple
          value={selectedCategories}
          {...form.register("categories")}
          sx={{
            width: "100%",
            marginBottom: "20px",
            color: "black",
          }}
          onChange={handleCategoryChange}
        >
          {categories.map((c) => (
            <MenuItem
              aria-label={`Category ${c.name}`}
              key={c.id}
              value={c.id.toString()}
            >
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        id="content-textfield"
        label="Content"
        multiline
        rows={6}
        helperText={form.formState.errors.content?.message}
        error={Boolean(form.formState.errors.content)}
        variant="outlined"
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("content")}
      />

      <Box sx={{ display: "flex", gap: "5vh" }}>
        <Button
          aria-label="Save product button"
          type="submit"
          variant="contained"
          sx={{ width: "150px" }}
        >
          <SaveIcon fontSize="large" />
          Save
        </Button>
      </Box>
    </Box>
  );
}
