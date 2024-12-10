// app/layout.js (if using Next.js App Directory structure)
import "./globals.css"; // Ensure this path is correct
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"], // Correct key for weights
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
