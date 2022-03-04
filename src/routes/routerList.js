import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Reports } from '../pages/Reports'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import LoginIcon from '@mui/icons-material/Login'
import { Settings } from '../pages/Settings'
import { ROUTE_PATHS } from '../utils/constants/constants'

const routerList = [
  {
    key: 1,
    label: 'home',
    path: ROUTE_PATHS.dashboard,
    component: Home,
    hasNavbar: true,
    icon: DashboardIcon,
    subMenus: [
      {
        key: 2,
        label: 'reports',
        path: ROUTE_PATHS.dashboardReports,
        component: Home,
        hasNavbar: true,
        icon: AssessmentIcon
      }
    ]
  },
  {
    key: 3,
    label: 'login',
    path: ROUTE_PATHS.login,
    component: Login,
    hasNavbar: false,
    icon: LoginIcon,
    subMenus: []
  },
  {
    key: 4,
    label: 'users',
    path: ROUTE_PATHS.users,
    component: Reports,
    hasNavbar: true,
    icon: AssessmentIcon,
    subMenus: [
      {
        key: 6,
        label: 'reports',
        path: ROUTE_PATHS.usersReports,
        component: Reports,
        hasNavbar: true,
        icon: AssessmentIcon
      }
    ]
  },
  {
    key: 5,
    label: 'settings',
    path: ROUTE_PATHS.settings,
    component: Settings,
    hasNavbar: true,
    icon: AssessmentIcon,
    subMenus: []
  }
]

export default routerList
