import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import AppWrapper from "./context/app-wrapper";
import Header from "./components/header/header";

const poppins = Poppins({subsets:['latin'], weight: '500'})
const inter = Inter({subsets: ['latin']})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppWrapper>
       <body className={poppins.className}>
       <div className=" w-full h-full">
       <Header/>
          <main>
           {children}
          </main>
        </div>  
        </body>
        
      </AppWrapper>
    </html>
  );
}
