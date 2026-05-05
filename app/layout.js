export const metadata = {
  title: "APS Awareness Hub",
  description: "APS support and awareness platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
