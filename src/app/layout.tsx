export const metadata = {
  title: "ColegaDeCena V3",
  description: "AI rehearsal tool for actors"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:"sans-serif"}}>
        {children}
      </body>
    </html>
  )

}
