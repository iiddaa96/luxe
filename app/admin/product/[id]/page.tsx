// import db from "@/prisma/db";
// import { Container } from "@mui/material";
// import EditProductForm from "../../components/EditProductForm";

// type Props = { params: { id: number } };

// export default async function UpdateExistProduct({ params }: Props) {
//   const { id } = params;

//   // Fetch produkten från databasen med id som matchar id i URL:en
//   const product = await db.product.findFirst({ where: { id: Number(id) } });

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
import { notFound } from "next/navigation";
import EditProductForm from "../../components/EditProductForm";

//Hämtar produkt och kategorier från databasen
async function fetchProductAndCategories(id: string) {
  const product = await db.product.findFirst({ where: { id: Number(id) } });
  const categories = await db.category.findMany();

  return { product, categories };
}

// Huvudkomponent
export default async function UpdateExistProduct({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  // Hämta produkt och kategorier
  const { product, categories } = await fetchProductAndCategories(id);

  // Om produkten inte finns, visa en 404-sida
  if (!product) {
    return notFound();
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
