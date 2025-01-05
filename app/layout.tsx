import Head from "next/head";
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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <CartProvider>
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
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
