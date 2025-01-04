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

// app/admin/product/[id]/page.tsx

import db from "@/prisma/db";
import { Container } from "@mui/material";
import EditProductForm from "../../components/EditProductForm";

export default async function UpdateExistProduct({
  params,
}: {
  params: { id: string };
}) {
  // Hämta produkt och kategorier på servern
  const { id } = params;

  // Hämtar produkt och kategorier
  const product = await db.product.findFirst({ where: { id: Number(id) } });
  const categories = await db.category.findMany();

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
