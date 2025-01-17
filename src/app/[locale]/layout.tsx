import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Navbar from "../components/navbar/navbar";
import "./globals.css";
import Anasayfa from "../components/home/home";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <Anasayfa />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "../components/navbar/navbar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// interface RootLayoutProps {
//   children: React.ReactNode;
//   params: {
//     locale: string;
//   };
// }

// export default function RootLayout({
//   children,
//   params: { locale },
// }: Readonly<RootLayoutProps>) {
//   return (
//     <html lang={locale}>
//       <body className={inter.className}>
//         <div>
//           <Navbar />
//           <div> {children} </div>
//         </div>
//       </body>
//     </html>
//   );
// }
