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
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <CartProvider>
          {/* <AppRouterCacheProvider> */}
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1000,
              width: "100%",
            }}
          >
            <ResponsiveAppBar />
          </div>
          <main
            style={{
              paddingTop: "10px",
              flex: "1 0 auto",
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
