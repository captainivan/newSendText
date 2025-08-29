import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "SendText – Anonymous & Secure Messaging",
  description: "Send and receive messages worldwide without revealing your phone number or email. Enjoy secure, end-to-end encrypted communication, temporary messaging, and total privacy."
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="yszqlDoRKS6U1tdVLGVIIxKyWd52VER3wa9TD6S5Psw" />
      </head>
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="19f53f8e-9713-45c1-9df3-672a339ded8a"
        strategy="afterInteractive"
        defer
      />
      <body className={`${poppins.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
