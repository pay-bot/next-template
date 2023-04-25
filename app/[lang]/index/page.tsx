import { Locale } from '@/components/context/i18n-config'
import LocaleSwitcher from '@/components/locale-switcher'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{' '}
      </p>
    </div>
  )
}
