// import db from "@/prisma/db";
// import { Container } from "@mui/material";
// import EditProductForm from "../../components/EditProductForm";

// type Props = { params: { id: string } };

// export default async function UpdateExistProduct({ params }: Props) {
//   const { id } = params;

//   if (!id) {
//     throw new Error("Product ID not provided");
//   }

//   // Fetch produkten från databasen med id som matchar id i URL:en
//   const product = await db.product.findUnique({
//     where: { id: Number(id) },
//     include: { categories: true }, // Inkluderar relaterade kategorier
//   });
//   const categories = await db.category.findMany();

//   if (!product) {
//     return (
//       <Container
//         fixed
//         component="main"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginTop: "30px",
//           marginBottom: "30px",
//         }}
//       >
//         <p>Product not found</p>
//       </Container>
//     );
//   }

//   return (
//     <Container
//       fixed
//       component="main"
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: "30px",
//         marginBottom: "30px",
//       }}
//     >
//       <EditProductForm categories={categories} product={product} />
//     </Container>
//   );
// }

import db from "@/prisma/db";
import { Container } from "@mui/material";
import EditProductForm from "../../components/EditProductForm";

type Props = { params: { id: string } };

export default async function UpdateExistProduct({ params }: Props) {
  const { id } = params;

  if (!id) {
    throw new Error("Product ID not provided");
  }

  // Hämta produkt med matchande id från databasen
  const product = await db.product.findUnique({
    where: { id: Number(id) },
    include: { categories: true }, // Inkluderar relaterade kategorier
  });

  // Hämta alla kategorier från databasen
  const categories = await db.category.findMany();

  // Om produkten inte hittades
  if (!product) {
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
        <p>Product not found</p>
      </Container>
    );
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
      <EditProductForm categories={categories} product={product} />
    </Container>
  );
}
