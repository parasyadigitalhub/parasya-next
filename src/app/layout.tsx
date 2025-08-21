import Header from "@/components/header/header";
import "./globals.css";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Parasya",
  description: "Parasya official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Animation logic can go here if needed */}
        <div className="app-layout">
          <Header />
          {/* <Breadcrumb /> */}
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
