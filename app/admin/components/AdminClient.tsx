import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import Link from "next/link";
import ProductGrid, { ProductGridProps } from "../components/ProductGrid";

function AdminClient({ products }: ProductGridProps) {
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
        {/* <Add new product /> */}
        <Link href="/admin/product/new">
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
