import db from "@/prisma/db";
import { Container } from "@mui/material";
import AddProductForm from "../../components/AddProductForm";

export default async function AddNewProduct() {
  const categories = await db.category.findMany();

  if (!categories || categories.length === 0) {
    return (
      <Container
        fixed
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <p>No categories available</p>
      </Container>
    );
  }

  // Om kategorier finns, visa formuläret för att lägga till en ny produkt
  return (
    <Container
      fixed
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <AddProductForm categories={categories} />
    </Container>
  );
}
