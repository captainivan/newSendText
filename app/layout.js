import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

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
      <body className={`${poppins.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
