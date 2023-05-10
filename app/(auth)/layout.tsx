import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="rainbow-mesh h-screen w-screen p-6">
        <GlassPane className="flex h-full w-full items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
