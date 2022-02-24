import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Reports } from '../pages/Reports'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import LoginIcon from '@mui/icons-material/Login'
import { Settings } from '../pages/Settings'

const routerList = [
  {
    key: 1,
    label: 'home',
    path: '/dashboard',
    component: Home,
    hasNavbar: true,
    icon: DashboardIcon
  },
  {
    key: 2,
    label: 'login',
    path: '/login',
    component: Login,
    hasNavbar: false,
    icon: LoginIcon
  },
  {
    key: 3,
    label: 'reports',
    path: '/reports',
    component: Reports,
    hasNavbar: true,
    icon: AssessmentIcon
  },
  {
    key: 3,
    label: 'settings',
    path: '/settings',
    component: Settings,
    hasNavbar: true,
    icon: AssessmentIcon
  }
]

export default routerList
