import { Outfit } from "@next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ViewTransitions } from "next-view-transitions";
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weights: ["400"],
});

export const metadata = {
  title: "Portfolio",
  description:
    "A beautiful portfolio handcrafted with sleek design and smooth animations. Showcasing my projects and skills in a visually stunning way.",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${outfit.className} bg-neutral-100 antialiased dark:bg-neutral-800`}
        >
          <Navbar />

          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
