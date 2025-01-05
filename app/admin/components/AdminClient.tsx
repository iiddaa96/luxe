"use client";

import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProductGrid, { ProductGridProps } from "../../ui/ProductGrid";

function AdminClient({ products }: ProductGridProps) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.refresh();
    }, 100);
  }, [router]);
  return (
    <section>
      <Box
        component={"main"}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "15px",
          marginBottom: "10px",
          marginRight: "30px",
        }}
      >
        {/*  Lägg till en ny produkt knapp som navigerar till /admin/product/new */}
        <Link
          aria-label="Navigate to add new product form"
          href="/admin/product/new"
        >
          <AddIcon
            sx={{
              color: "black",
              padding: "10px",
              fontSize: "42px",
              borderRadius: "999px",
              transition: "background-color 0.3s",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
              "&:hover": {
                background: "#f5f5f5",
              },
            }}
          />
        </Link>
      </Box>

      <ProductGrid products={products} />
    </section>
  );
}

export default AdminClient;
