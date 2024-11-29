import SingleProduct from "@/app/ui/SingleProduct";
import db from "@/prisma/db";

export default async function ServerForSingleProduct({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const productId = Number(id);

  if (!productId || isNaN(productId)) {
    return <div>Invalid product ID</div>;
  }

  // Fetch produkt data från databasen
  const product = await db.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return <SingleProduct product={product} />;
}
