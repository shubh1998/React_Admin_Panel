/* ==========================================================================
  LANGUAGES
  ========================================================================== */
const LANGUAGES = [
  { label: 'English', languageCode: 'en', flagUrl: 'images/uk-flag.png' }, // English is default language
  { label: 'German', languageCode: 'de', flag: 'images/german-flag.png' }
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
  root: '/',
  login: '/login',
  users: '/users',
  settings: '/settings',
  dashboard: '/dashboard',
  reports: '/reports',
  dashboardReports: '/dashboard/reports',
  usersReports: '/users/reports'
}
export { TOASTER_TYPE, LANGUAGES, TOKEN, LANGUAGE, USERNAME, ROUTE_PATHS }
