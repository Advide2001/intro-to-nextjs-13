import "@/styles/global.css";

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-zinc-500 p-6">{children}</body>
    </html>
  );
}
