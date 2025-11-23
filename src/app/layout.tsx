import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // you can adjust
  variable: "--font-roboto",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Zinkq",
    template: "%s",
  },
  description: "Zinkq is Sri Lanka’s startup community where founders, innovators, and creators connect, collaborate, and grow through real opportunities.",
  keywords: [
    "Sri Lanka startup network",
    "startup community",
    "founders Sri Lanka",
    "startup events Sri Lanka",
    "startup ecosystem Sri Lanka",
    "entrepreneurs Sri Lanka",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Zinkq",
    description:
      "Zinkq is Sri Lanka’s startup community where founders, innovators, and creators connect, collaborate, and grow through real opportunities.",
    images: [
      {
        url: "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763115529/nkxhgeiy5ekueji2hjzy.jpg",
        width: 800,
        height: 600,
        alt: "Zinkq",
      },
    ],
    siteName: "Zinkq",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zinkq",
    description:
      "Zinkq is Sri Lanka’s startup community where founders, innovators, and creators connect, collaborate, and grow through real opportunities.",
    images: [
      {
        url: "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763115529/nkxhgeiy5ekueji2hjzy.jpg",
        width: 800,
        height: 600,
        alt: "Zinkq",
      },
    ],
  }



};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Metricool */}
        <Script id="metricool-script" strategy="afterInteractive">
          {`
            function loadScript(a){
              var b=document.getElementsByTagName("head")[0],
              c=document.createElement("script");
              c.type="text/javascript",
              c.src="https://tracker.metricool.com/resources/be.js",
              c.onreadystatechange=a,
              c.onload=a,
              b.appendChild(c)
            }
            loadScript(function(){
              beTracker.t({hash:"7ab2c882e4dbfb475daaa8a82a43c69a"});
            });
          `}
        </Script>
         {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MSQPKXH6');
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://app.termly.io/embed.min.js"
          data-auto-block="off"
          data-website-uuid="7b1c3e73-7532-4314-82c5-98eac8a69ebd"
        />
      </head>
  
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
         {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSQPKXH6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
        <a href="#" className="termly-display-preferences hidden">
          Consent Preferences
        </a>
      <Footer />
    </html>
  );
}
