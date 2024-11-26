import db from "../db";
import { seedCategories as seedCategoriesWithProducts } from "./categoryWithProducts";
import { product as seedProducts } from "./product";

async function main() {
  await seedCategoriesWithProducts();
  await seedProducts();
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
