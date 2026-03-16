export const metadata = { title: 'previewModeId Leak Demo' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'monospace', padding: '2rem', maxWidth: '700px' }}>
        {children}
      </body>
    </html>
  )
}
