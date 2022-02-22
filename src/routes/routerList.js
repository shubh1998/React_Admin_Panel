import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Reports } from "../pages/Reports";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LoginIcon from '@mui/icons-material/Login';

const routerList = [
  {
    key: 1,
    label: 'Home',
    path: '/',
    component: Home,
    hasNavbar: true,
    icon: DashboardIcon
  },
  {
    key: 2,
    label: 'Login',
    path: '/login',
    component: Login,
    hasNavbar: false,
    icon: LoginIcon
  },
  {
    key: 3,
    label: 'Reports',
    path: '/reports',
    component: Reports,
    hasNavbar: true,
    icon: AssessmentIcon
  }
]

export default routerList
