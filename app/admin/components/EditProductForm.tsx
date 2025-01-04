// "use client";
// import { deleteProduct, editProduct } from "@/app/endpoints/product-endpoints";
// import { productSchema } from "@/app/zod-validation/products";
// import { zodResolver } from "@hookform/resolvers/zod";
// import DeleteIcon from "@mui/icons-material/Delete";
// import SaveIcon from "@mui/icons-material/Save";
// import {
//   Box,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   SelectChangeEvent,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Category, Product } from "@prisma/client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// export interface Props {
//   categories: Category[];
//   product: Product & { categories: { id: number; name: string }[] };
// }

// export default function EditProductForm({ categories, product }: Props) {
//   const router = useRouter();

//   // Initialisera valda kategorier från produktens kategorier
//   const [selectedCategories, setSelectedCategories] = useState<string[]>(
//     product.categories.map((c) => c.id.toString())
//   );

//   const [openDialog, setOpenDialog] = useState(false);

//   const form = useForm<Product>({
//     mode: "onChange",
//     resolver: zodResolver(productSchema),
//     defaultValues: {
//       ...product,
//     },
//   });

//   const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
//     setSelectedCategories(event.target.value as string[]);
//   };

//   const save = async (data: Product) => {
//     try {
//       const chosenCategories = selectedCategories.map((c) => Number(c));
//       await editProduct(data, chosenCategories, product.id);
//       router.push("/admin");
//       router.refresh();
//     } catch (error) {
//       console.error("Error saving product:", error);
//       alert("Failed to save product. Please try again.");
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await deleteProduct(product.id);
//       setOpenDialog(false);
//       router.push("/admin"); // Navigera till admin-sidan
//       router.refresh();
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   return (
//     <Box
//       component="form"
//       aria-label="Edit product form"
//       onSubmit={form.handleSubmit(save)}
//       sx={{
//         borderRadius: "10px",
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "20px",
//         boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
//       }}
//     >
//       <Box>
//         <Typography variant="h1" sx={{ fontSize: "2rem" }}>
//           Edit product
//         </Typography>
//       </Box>

//       <TextField
//         fullWidth
//         label="Title"
//         defaultValue={product.title}
//         helperText={form.formState.errors.title?.message}
//         error={Boolean(form.formState.errors.title)}
//         sx={{ width: "100%", marginBottom: "20px" }}
//         {...form.register("title")}
//       />

//       <TextField
//         fullWidth
//         label="Image url"
//         defaultValue={product.image}
//         helperText={form.formState.errors.image?.message}
//         error={Boolean(form.formState.errors.image)}
//         sx={{ width: "100%", marginBottom: "20px" }}
//         {...form.register("image")}
//       />

//       <TextField
//         fullWidth
//         label="Price"
//         helperText={form.formState.errors.price?.message}
//         error={Boolean(form.formState.errors.price)}
//         sx={{ width: "100%", marginBottom: "20px" }}
//         {...form.register("price")}
//       />

//       {/* Textfält för kategorierna */}
//       {/* Är label fel och någon kontrast fel på denna som jag inte kan fixa, har testat massvis med olika lösningar som inte fungerar */}
//       <FormControl fullWidth sx={{ marginBottom: "20px" }}>
//         <InputLabel id="categories-label">Categories</InputLabel>
//         <Select
//           labelId="categories-label"
//           id="categories-select"
//           label="Categories"
//           multiple
//           value={selectedCategories}
//           onChange={handleCategoryChange}
//           sx={{
//             color: "#000000",
//             backgroundColor: "white",
//           }}
//         >
//           {categories.map((c) => (
//             <MenuItem
//               key={c.id}
//               value={c.id.toString()}
//               sx={{
//                 color: "#000000",
//                 backgroundColor: "white",
//               }}
//             >
//               {c.name}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       <TextField
//         label="Content"
//         multiline
//         rows={6}
//         helperText={form.formState.errors.content?.message}
//         error={Boolean(form.formState.errors.content)}
//         defaultValue={product.content}
//         {...form.register("content")}
//         sx={{ width: "100%", marginBottom: "40px", height: "150px" }}
//       />

//       <Box sx={{ display: "flex", gap: "10px" }}>
//         <Button aria-label="Save button" type="submit" variant="contained">
//           <SaveIcon />
//           Save
//         </Button>
//         <Button
//           aria-label="Delete button"
//           variant="outlined"
//           color="error"
//           onClick={() => setOpenDialog(true)} // Öppna dialogen rutan
//         >
//           <DeleteIcon />
//           Delete
//         </Button>
//       </Box>

//       <Dialog
//         open={openDialog}
//         onClose={() => setOpenDialog(false)}
//         aria-labelledby="delete-confirmation-dialog"
//         aria-describedby="delete-confirmation-description"
//         sx={{
//           "& .MuiDialog-paper": {
//             borderRadius: "12px",
//             padding: "20px",
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
//             backgroundColor: "#ffffff",
//           },
//         }}
//       >
//         <DialogTitle
//           id="delete-confirmation-dialog"
//           sx={{
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//             color: "#3f3e3e",
//           }}
//         >
//           Confirm delete
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText
//             id="delete-confirmation-description"
//             sx={{
//               fontSize: "1rem",
//               color: "#555",
//               marginBottom: "20px",
//             }}
//           >
//             Are you sure you want to delete this product? This action cannot be
//             undone
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions
//           sx={{
//             display: "flex",
//             gap: "10px",
//             padding: "10px 20px",
//           }}
//         >
//           <Button
//             onClick={() => setOpenDialog(false)}
//             color="primary"
//             variant="outlined"
//             sx={{
//               borderColor: "#117de9",
//               color: "#2273c4",
//               "&:hover": {
//                 backgroundColor: "rgba(25, 118, 210, 0.1)",
//               },
//             }}
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={handleDelete}
//             color="error"
//             variant="contained"
//             autoFocus
//             sx={{
//               backgroundColor: "#d32f2f",
//               color: "white",
//               "&:hover": {
//                 backgroundColor: "#b71c1c",
//               },
//             }}
//           >
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// }

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
import { Prisma, Product } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface Props {
  categories: Prisma.CategoryGetPayload<{}>[];
  product: Product;
}

export type ProductWithCategories = Product & { categories: string[] };

export default function EditProductForm({ categories, product }: Props) {
  const { id } = useParams();
  const router = useRouter();

  // Initialisera valda kategorier från produktens kategorier
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const form = useForm<ProductWithCategories>({
    mode: "onChange",
    resolver: zodResolver(productSchema),
  });

  const handleCategoryChange = (event: SelectChangeEvent<string[]>) => {
    setSelectedCategories(event.target.value as string[]);
  };

  const [openDialog, setOpenDialog] = useState(false);

  function handleSubmit() {
    deleteProduct(Number(id));
    console.log(id);
    router.push("/admin");
    router.refresh();
  }
  const save = (data: ProductWithCategories) => {
    const { categories, ...updatedProduct } = data;
    const chosenCategories = selectedCategories.map((c) => Number(c));

    editProduct(updatedProduct, chosenCategories, Number(id));
    router.push("/admin");
  };

  return (
    <Box
      component="form"
      aria-label="Edit product form"
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
        defaultValue={product.title}
        helperText={form.formState.errors.title?.message}
        error={Boolean(form.formState.errors.title)}
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("title")}
      />
      <TextField
        fullWidth
        label="Image url"
        defaultValue={product.image}
        helperText={form.formState.errors.image?.message}
        error={Boolean(form.formState.errors.image)}
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("image")}
      />
      <TextField
        fullWidth
        label="Price"
        defaultValue={product.price}
        helperText={form.formState.errors.price?.message}
        error={Boolean(form.formState.errors.price)}
        sx={{ width: "100%", marginBottom: "20px" }}
        {...form.register("price")}
      />
      {/* Textfält för kategorierna */}
      {/* Är label fel och någon kontrast fel på denna som jag inte kan fixa, har testat massvis med olika lösningar som inte fungerar */}
      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel id="categories-label">Categories</InputLabel>
        <Select
          labelId="categories-label"
          id="categories-select"
          label="Categories"
          multiple
          value={selectedCategories}
          onChange={handleCategoryChange}
          sx={{
            color: "#000000",
            backgroundColor: "white",
          }}
        >
          {categories.map((c) => (
            <MenuItem
              key={c.id}
              value={c.id.toString()}
              sx={{
                color: "#000000",
                backgroundColor: "white",
              }}
            >
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
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
          onClick={() => setOpenDialog(true)} // öppnar dialogrutan
        >
          <DeleteIcon />
          Delete
        </Button>
      </Box>

      {/* Dialog ruta för att säkerhets ställa om man vill radera en produkt */}
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
            backgroundColor: "#ffffff",
          },
        }}
      >
        <DialogTitle
          id="delete-confirmation-dialog"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#3f3e3e",
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
            undone
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
              borderColor: "#117de9",
              color: "#2273c4",
              "&:hover": {
                backgroundColor: "rgba(25, 118, 210, 0.1)",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleSubmit()}
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
