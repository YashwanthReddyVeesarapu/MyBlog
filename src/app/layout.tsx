import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog by Redsols",
  description:
    "Explore the vibrant world of Redsols Blog, where insightful articles and engaging content come together to enlighten and entertain. From the latest trends to in-depth analyses, our blog covers a diverse range of topics, offering valuable insights and expert perspectives. Join us on a journey of discovery as we share knowledge, inspiration, and captivating stories. Redsols Blog – Your go-to destination for enriching content that goes beyond the ordinary.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
