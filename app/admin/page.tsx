import db from "@/prisma/db";
import AdminClient from "./components/AdminClient";

export default async function Admin() {
  const products = await db.product.findMany({
    where: { isArchived: false },
    orderBy: { id: "asc" },
  });

  return <AdminClient products={products} />;
}
