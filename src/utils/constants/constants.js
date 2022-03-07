import { EnglishIcon } from '../../components/ui-kit/atoms/icons/iconComponents/EnglishIcon'
import { FrenchIcon } from '../../components/ui-kit/atoms/icons/iconComponents/FrenchIcon'
import { GermanIcon } from '../../components/ui-kit/atoms/icons/iconComponents/GermanIcon'
import { PortugalIcon } from '../../components/ui-kit/atoms/icons/iconComponents/PortugalIcon'
import { RussianIcon } from '../../components/ui-kit/atoms/icons/iconComponents/RussianIcon'
import { SpanishIcon } from '../../components/ui-kit/atoms/icons/iconComponents/SpanishIcon'

/* ==========================================================================
  LANGUAGES
  ========================================================================== */
const LANGUAGES = [
  { label: 'English', languageCode: 'en', flag: EnglishIcon },
  { label: 'German', languageCode: 'de', flag: GermanIcon },
  { label: 'Spanish', languageCode: 'es', flag: SpanishIcon },
  { label: 'French', languageCode: 'fr', flag: FrenchIcon },
  { label: 'Portuguese', languageCode: 'pt', flag: PortugalIcon },
  { label: 'Russian', languageCode: 'ru', flag: RussianIcon }
]

/* ==========================================================================
LocalStorage data
========================================================================== */
const TOKEN = 'token'
const LANGUAGE = 'language'
const USERNAME = 'username'

/* ==========================================================================
  TOASTER / NOTIFICATION
========================================================================== */
const TOASTER_TYPE = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
}

/* ==========================================================================
  All the navigation route Paths
========================================================================== */
const ROUTE_PATHS = {
  // ----single routes------------
  login: '/login',
  settings: '/settings',
  dashboard: '/dashboard',
  profile: '/profile',
  // ----parent child routes------------
  games: '/games',
  preRoundReportReports: '/games/pre-round-reports',
  cancelledGames: '/games/cancelled-games'

}
export { TOASTER_TYPE, LANGUAGES, TOKEN, LANGUAGE, USERNAME, ROUTE_PATHS }
