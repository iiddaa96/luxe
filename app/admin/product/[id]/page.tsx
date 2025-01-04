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
import { Category, Product } from "@prisma/client";
import { GetServerSideProps } from "next";
import EditProductForm from "../../components/EditProductForm";

type Props = {
  params: { id: string }; // params.id kommer vara en string här
  product: Product | null; // Vi hanterar produktens data
  categories: Category[]; // Kategorierna vi hämtar
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }; // Definiera id som string

  // Hämta produkt och kategorier
  const product = await db.product.findFirst({ where: { id: Number(id) } });
  const categories = await db.category.findMany();

  if (!product) {
    return {
      notFound: true, // För att hantera om produkten inte finns
    };
  }

  return {
    props: {
      params: { id },
      product,
      categories,
    },
  };
};

export default function UpdateExistProduct({ product, categories }: Props) {
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
