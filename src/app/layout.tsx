import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Goutham Kaluvakolu - Software Engineer in Texas",
  description: "Experienced Software Engineer based in Texas. Full-stack developer specializing in web development, AI, and software engineering. View my portfolio, projects, and experience.",
  keywords: [
    "Goutham Kaluvakolu",
    "Software Engineer",
    "Texas Software Developer",
    "Full Stack Developer",
    "Web Developer Texas",
    "AI Engineer",
    "Software Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Goutham Kaluvakolu - Software Engineer Portfolio",
    description: "Software Engineer based in Texas specializing in full-stack development, AI, and modern web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goutham Kaluvakolu - Software Engineer Portfolio",
    description: "Software Engineer based in Texas specializing in full-stack development, AI, and modern web applications.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
