export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-2xl mx-auto px-4 py-20">{children}</div>;
}
