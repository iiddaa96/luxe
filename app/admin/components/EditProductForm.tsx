"use client";
import { deleteProduct, editProduct } from "@/app/endpoints/product-endpoints";
import { productSchema } from "@/app/zod-validation/products";
import { zodResolver } from "@hookform/resolvers/zod";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Category, Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface Props {
  categories: Category[];
  product: Product & { categories: { id: number; name: string }[] };
}

export default function EditProductForm({ categories, product }: Props) {
  const router = useRouter();

  // Initialisera valda kategorier från produktens kategorier
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    product.categories.map((c) => c.id.toString())
  );

  const [openDialog, setOpenDialog] = useState(false);

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
      setOpenDialog(false);
      router.push("/admin"); // Navigera till admin-sidan
      router.refresh();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Box
      component="form"
      aria-labelledby="Edit-product-form"
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
          Edit product
        </Typography>
      </Box>

      <TextField
        fullWidth
        label="Title"
        error={Boolean(form.formState.errors.title)}
        defaultValue={product.title}
        {...form.register("title")}
        sx={{ width: "100%", marginBottom: "20px" }}
      />

      <TextField
        fullWidth
        label="Image url"
        helperText={form.formState.errors.image?.message}
        error={Boolean(form.formState.errors.image)}
        defaultValue={product.image}
        {...form.register("image")}
        sx={{ width: "100%", marginBottom: "20px" }}
      />

      <TextField
        fullWidth
        label="Price"
        helperText={form.formState.errors.price?.message}
        error={Boolean(form.formState.errors.price)}
        defaultValue={product.price.toString()}
        {...form.register("price")}
        sx={{ marginBottom: "20px" }}
      />

      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel id="categories-label">Categories</InputLabel>
        <Select
          label="Categories"
          multiple
          value={selectedCategories}
          onChange={handleCategoryChange}
          onClose={() => setSelectedCategories(selectedCategories)}
        >
          {categories.map((category) => (
            <MenuItem
              aria-label={`Category ${category.name}`}
              key={category.id}
              value={category.id.toString()}
            >
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Content"
        multiline
        rows={6}
        helperText={form.formState.errors.content?.message}
        error={Boolean(form.formState.errors.content)}
        defaultValue={product.content}
        {...form.register("content")}
        sx={{ width: "100%", marginBottom: "40px", height: "150px" }}
      />

      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button aria-label="Save button" type="submit" variant="contained">
          <SaveIcon />
          Save
        </Button>
        <Button
          aria-label="Delete button"
          variant="outlined"
          color="error"
          onClick={() => setOpenDialog(true)} // Öppna dialogen rutan
        >
          <DeleteIcon />
          Delete
        </Button>
      </Box>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="delete-confirmation-dialog"
        aria-describedby="delete-confirmation-description"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#fefefe",
          },
        }}
      >
        <DialogTitle
          id="delete-confirmation-dialog"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Confirm delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="delete-confirmation-description"
            sx={{
              fontSize: "1rem",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            Are you sure you want to delete this product? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            gap: "10px",
            padding: "10px 20px",
          }}
        >
          <Button
            onClick={() => setOpenDialog(false)}
            color="primary"
            variant="outlined"
            sx={{
              borderColor: "#1976d2",
              color: "#1976d2",
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.1)",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
            variant="contained"
            autoFocus
            sx={{
              backgroundColor: "#d32f2f",
              color: "white",
              "&:hover": {
                backgroundColor: "#b71c1c",
              },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
