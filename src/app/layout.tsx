import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Parasya",
  description: "Elevating Your Identity",
  keywords: "branding, design, marketing, Parasya",
  authors: [{ name: "Parasya" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Parasya - Elevating Your Identity",
    description: "Parasya helps elevate your brand identity through innovative solutions.",
    url: "https://parasya.in",
    siteName: "Parasya",
    type: "website",
    images: [
      {
        url: "/parasya/parasya.jpg",
        width: 1200,
        height: 630,
        alt: "Parasya Branding"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parasya - Elevating Your Identity",
    description: "Parasya helps elevate your brand identity through innovative solutions.",
    images: ["/images/twitter-image.png"],
    site: "@Parasya",
    creator: "@Parasya",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
