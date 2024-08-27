import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISTE NITH Official Website",
  description: "Created by Technical Team @ISTE-NITH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
   



    <html lang="en">

<body className=  {inter.className} >
  <main className="bg-[#171616]" >
    
{children}</main> 

</body>
</html>


  



  );
}
