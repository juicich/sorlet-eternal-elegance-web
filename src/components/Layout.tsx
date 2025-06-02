import Navigation from "./Navigation";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-sorlet-ivory">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
