import React from 'react';

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="min-h-screen flex flex-col bg-gray-100">
    <main className="flex-grow flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 h-1/2">
        {children}
      </div>
    </main>
    </body>
    </html>
  )
}