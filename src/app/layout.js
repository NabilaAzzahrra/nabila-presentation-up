import "./globals.css";

export const metadata = {
  title: "Nabila Azzahra - 232101403",
  description: "Make with Next.Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
