import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="title" content="Dynamic Biz | Innovate • Connect • Inspire • Invests" />
        <meta name="description" content="We transform your ideas into code!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dynamicbiz.org.lk/" />
        <meta property="og:title" content="Dynamic Biz | Innovate • Connect • Inspire • Invests" />
        <meta property="og:description" content="We transform your ideas into code!" />
        <meta property="og:image" content="https://dynamicbiz.org.lk/logo.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dynamicbiz.org.lk/" />
        <meta property="twitter:title" content="Dynamic Biz | Innovate • Connect • Inspire • Invests" />
        <meta property="twitter:description" content="We transform your ideas into code!" />
        <meta property="twitter:image" content="https://dynamicbiz.org.lk/logo.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="scroll-smooth bg-gray-200 text-neutral-900 dark:bg-neutral-900 dark:text-white duration-200 transition-colors">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
