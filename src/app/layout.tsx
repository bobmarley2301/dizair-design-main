export const metadata = {
  title: 'Profile UI Test Task',
  description: 'Profile UI Test Task',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <title>Profile UI Test Task</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
