import db from "@/prisma/db";
import ProductSliderClient from "./Slider/ProductSliderClient";

export default async function ProductSlider() {
  // Hämta produkter från databasen, bara kategorin Eyeshadow
  const products = await db.product.findMany({
    where: {
      categories: {
        some: {
          name: "Eyeshadow",
        },
      },
    },
    orderBy: { id: "desc" },
  });

  return <ProductSliderClient products={products} />;
}
