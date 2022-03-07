import LoginIcon from '@mui/icons-material/Login'
import { ROUTE_PATHS } from '../utils/constants/constants'
import { Login } from '../pages/Auth/Login/Login'
import { PreRoundReport } from '../pages/Games/PreRoundReport/PreRoundReport'
import { CancelledGames } from '../pages/Games/CancelledGames/CancelledGames'
import { Settings } from '../pages/Settings/Settings'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Profile } from '../pages/Profile/Profile'
import { DashboardIcon } from '../components/ui-kit/atoms/icons/iconComponents/DashboardIcon'
import { GameIcon } from '../components/ui-kit/atoms/icons/iconComponents/GameIcon'
import { EllipseIcon } from '../components/ui-kit/atoms/icons/iconComponents/EllipseIcon'
import { ProfileIcon } from '../components/ui-kit/atoms/icons/iconComponents/ProfileIcon'

const routerList = [
  {
    key: 1,
    label: 'dashboard',
    sectionName: 'home',
    path: ROUTE_PATHS.dashboard,
    component: Dashboard,
    hasAuth: true,
    hasSideBarOption: true,
    icon: DashboardIcon,
    subMenus: []
  },
  {
    key: 3,
    label: 'login',
    sectionName: 'login',
    path: ROUTE_PATHS.login,
    component: Login,
    hasAuth: false,
    hasSideBarOption: false,
    icon: LoginIcon,
    subMenus: []
  },
  {
    key: 4,
    label: 'games',
    sectionName: 'reports',
    path: ROUTE_PATHS.games,
    component: PreRoundReport,
    hasAuth: true,
    hasSideBarOption: true,
    icon: GameIcon,
    subMenus: [
      {
        key: 6,
        label: 'preRoundReports',
        sectionName: 'reports',
        path: ROUTE_PATHS.preRoundReportReports,
        component: PreRoundReport,
        hasAuth: true,
        hasSideBarOption: true,
        icon: EllipseIcon
      },
      {
        key: 7,
        label: 'cancelledGames',
        sectionName: 'reports',
        path: ROUTE_PATHS.cancelledGames,
        component: CancelledGames,
        hasAuth: true,
        hasSideBarOption: true,
        icon: EllipseIcon
      }
    ]
  },
  {
    key: 5,
    label: 'settings',
    sectionName: 'settings',
    path: ROUTE_PATHS.settings,
    component: Settings,
    hasAuth: true,
    hasSideBarOption: false,
    icon: EllipseIcon,
    subMenus: []
  },
  {
    key: 6,
    label: 'profile',
    sectionName: 'profile',
    path: ROUTE_PATHS.profile,
    component: Profile,
    hasAuth: true,
    hasSideBarOption: false,
    icon: ProfileIcon,
    subMenus: []
  }
]

export default routerList
