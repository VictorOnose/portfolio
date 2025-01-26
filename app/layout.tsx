import "../app/globals.css";

export const metadata = {
  title: "Victor Onose - Portfolio",
  description: "Victor Onose's Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
