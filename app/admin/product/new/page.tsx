import db from "@/prisma/db";
import { Container } from "@mui/material";
import React from "react";
import AddProductForm from "../../components/AddProductForm";

const AddNewProduct: React.FC = async () => {
  const categories = await db.category.findMany();

  if (!categories || categories.length === 0) {
    return <div>No categories available</div>; // Om inte kategorier finns så visas ett error meddelande
  }
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
};

export default AddNewProduct;
