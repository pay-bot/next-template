import { i18n } from '@/components/context/i18n-config'
import '@/components/context/styles/global.css'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className="">{children}</body>
    </html>
  )
}
