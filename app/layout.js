import './globals.css'

export const metadata = {
  title: 'Doğruluk mu Cesaret mi? - Uzak Mesafe +18',
  description: 'Sevgilinizle uzaktan oynayabileceğiniz özel oyun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
