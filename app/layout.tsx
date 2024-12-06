// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";
import { CartProvider } from "./context/CheckoutContext";
import Footer from "./ui/Navigation/Footer";
import ResponsiveAppBar from "./ui/Navigation/ResponsiveAppBar";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {/* <AppRouterCacheProvider> */}
          <ResponsiveAppBar />
          <main
            style={{
              paddingTop: "140px",
            }}
          >
            {children}
          </main>
          <Footer />
          {/* </AppRouterCacheProvider> */}
        </CartProvider>
      </body>
    </html>
  );
}
