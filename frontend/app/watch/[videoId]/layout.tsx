
export default function WatchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="watch-page">
        <div className="video-wrapper">
        {children}
        </div>
    </div>
  );
}
