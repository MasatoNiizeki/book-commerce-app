import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import { SessionProvider } from "next-auth/react";
import {NextAuthProvider} from "@/app/lib/next-auth/provider";
import {Suspense} from "react";
import Loading from "@/app/loading";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book commerce app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={notoSansJP.className}>
        <NextAuthProvider>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextAuthProvider>
      </body>
    </html>
  );
}
