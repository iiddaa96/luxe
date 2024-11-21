import { ReactNode } from "react";
import Footer from "./ui/Footer";
import ResponsiveAppBar from "./ui/ResponsiveAppBar";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body style={{ margin: "0" }}>
        <ResponsiveAppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
