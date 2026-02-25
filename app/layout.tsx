import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./(home)/_components/Navbar";
import Footer from "./(home)/_components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francis Letters",
  description: "Documenting the journey.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${poppins.variable} antialiased`}>
        <div className="relative h-screen w-full overflow-hidden bg-background flex flex-col md:flex-row">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <div className="absolute h-[20rem] w-[20rem] rounded-full bg-primary/10 blur-3xl lg:h-[30rem] lg:w-[30rem]"></div>

            <div className="absolute h-[35rem] w-[35rem] rounded-full border-[1px] border-primary/14 lg:h-[45rem] lg:w-[45rem]"></div>

            <div className="absolute h-[55rem] w-[55rem] rounded-full border-[1px] border-primary/14 lg:h-[70rem] lg:w-[70rem]"></div>

            <div className="absolute h-[75rem] w-[75rem] rounded-full border-[1px] border-primary/7 lg:h-[100rem] lg:w-[100rem]"></div>
          </div>
          <main className="relative z-10 flex-1 h-full overflow-y-auto overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
