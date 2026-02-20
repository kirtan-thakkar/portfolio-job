import {Outfit} from "@next/font/google";
import localFont from "@next/font/local";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weights: ["400", "500", "600", "700","800","900"],
})


export const metadata = {
  title: "Portfolio",
  description: "A beautiful portfolio handcrafted with sleek design and smooth animations. Showcasing my projects and skills in a visually stunning way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
