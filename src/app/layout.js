import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define your metadata for SEO (including title, description, and other meta tags)
export const metadata = {
  title: "Your Project Name | My Awesome Project", // Customize this title
  description: "This is the description for My Awesome Project. It explains what the project is about and its key features.", // Customize your description
  openGraph: {
    type: "website",
    url: "https://www.example.com", // Replace with your actual URL
    title: "Your Project Name | My Awesome Project",
    description: "This is the description for My Awesome Project. It explains what the project is about and its key features.",
    images: [
      {
        url: "https://www.example.com/og-image.png", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Your Project Image",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    title: "Your Project Name | My Awesome Project",
    description: "This is the description for My Awesome Project. It explains what the project is about and its key features.",
    images: ["https://www.example.com/og-image.png"], // Replace with your actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Automatically applied metadata */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
