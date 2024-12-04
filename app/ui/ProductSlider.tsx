import db from "@/prisma/db";
import ProductSliderClient from "./ProductSliderClient";

export default async function ProductSlider() {
  // Hämta produkter från databasen
  const products = await db.product.findMany({
    orderBy: { id: "desc" },
  });

  return <ProductSliderClient products={products} />;
}
