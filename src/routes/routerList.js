import LoginIcon from '@mui/icons-material/Login'
import { AddUserIcon } from 'components/ui-kit/icons/iconComponents/AddUserIcon'
import { DashboardIcon } from 'components/ui-kit/icons/iconComponents/DashboardIcon'
import { EllipseIcon } from 'components/ui-kit/icons/iconComponents/EllipseIcon'
import { GameIcon } from 'components/ui-kit/icons/iconComponents/GameIcon'
import { MailIcon } from 'components/ui-kit/icons/iconComponents/MailIcon'
import { PerformanceIcon } from 'components/ui-kit/icons/iconComponents/PerformanceIcon'
import { PhoneIcon } from 'components/ui-kit/icons/iconComponents/PhoneIcon'
import { PlayersIcon } from 'components/ui-kit/icons/iconComponents/PlayersIcon'
import { ProfileIcon } from 'components/ui-kit/icons/iconComponents/ProfileIcon'
import { UserListIcon } from 'components/ui-kit/icons/iconComponents/UserListIcon'
import { AddUser } from 'pages/AddUser/AddUser'
import { Login } from 'pages/Auth/Login/Login'
import { Dashboard } from 'pages/Dashboard/Dashboard'
import { CancelledGames } from 'pages/Games/CancelledGames/CancelledGames'
import { PreRoundReport } from 'pages/Games/PreRoundReport/PreRoundReport'
import { Profile } from 'pages/Profile/Profile'
import { Settings } from 'pages/Settings/Settings'
import { ROUTE_PATHS } from 'utils/constants/constants'
import { v4 as uuidv4 } from 'uuid'

export const routerList = [
  {
    id: uuidv4(),
    sectionName: 'home',
    sectionChilds: [
      {
        key: uuidv4(),
        label: 'dashboard',
        path: ROUTE_PATHS.dashboard,
        component: Dashboard,
        hasAuth: true,
        hasSideBarOption: true,
        icon: DashboardIcon,
        subMenus: []
      }
    ]
  },
  {
    id: uuidv4(),
    sectionName: null,
    sectionChilds: [
      {
        key: uuidv4(),
        label: 'login',
        path: ROUTE_PATHS.login,
        component: Login,
        hasAuth: false,
        hasSideBarOption: false,
        icon: LoginIcon,
        subMenus: []
      }
    ]
  },
  {
    id: uuidv4(),
    sectionName: null,
    sectionChilds: [
      {
        key: uuidv4(),
        label: 'profile',
        path: ROUTE_PATHS.profile,
        component: Profile,
        hasAuth: true,
        hasSideBarOption: false,
        icon: ProfileIcon,
        subMenus: []
      },
      {
        key: uuidv4(),
        label: 'settings',
        path: ROUTE_PATHS.settings,
        component: Settings,
        hasAuth: true,
        hasSideBarOption: false,
        icon: EllipseIcon,
        subMenus: []
      }
    ]
  },
  {
    id: uuidv4(),
    sectionName: 'reports',
    sectionChilds: [
      {
        key: uuidv4(),
        label: 'games',
        path: ROUTE_PATHS.games,
        component: PreRoundReport,
        hasAuth: true,
        hasSideBarOption: true,
        icon: GameIcon,
        subMenus: [
          {
            key: uuidv4(),
            label: 'preRoundReports',
            path: ROUTE_PATHS.preRoundReportReports,
            component: PreRoundReport,
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          },
          {
            key: uuidv4(),
            label: 'cancelledGames',
            path: ROUTE_PATHS.cancelledGames,
            component: CancelledGames,
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          }
        ]
      },
      {
        key: uuidv4(),
        label: 'players',
        path: ROUTE_PATHS.games,
        component: PreRoundReport,
        hasAuth: true,
        hasSideBarOption: true,
        icon: PlayersIcon,
        subMenus: [
          {
            key: uuidv4(),
            label: 'allPlayers',
            path: ROUTE_PATHS.allPlayers,
            component: PreRoundReport,
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          },
          {
            key: uuidv4(),
            label: 'activePlayers',
            path: ROUTE_PATHS.activePlayers,
            component: CancelledGames,
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          },
          {
            key: uuidv4(),
            label: 'blockedPlayers',
            path: ROUTE_PATHS.blockedPlayers,
            component: CancelledGames,
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          }
        ]
      },
      {
        key: uuidv4(),
        label: 'performance',
        path: ROUTE_PATHS.performance,
        component: PreRoundReport,
        hasAuth: true,
        hasSideBarOption: true,
        icon: PerformanceIcon,
        subMenus: [
          {
            key: uuidv4(),
            label: 'gamingRevenue',
            path: ROUTE_PATHS.gamingRevenue,
            component: PreRoundReport,
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          },
          {
            key: uuidv4(),
            label: 'tipsReceived',
            path: ROUTE_PATHS.tipsReceived,
            component: CancelledGames,
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          },
          {
            key: uuidv4(),
            label: 'gamingRevenueByGameType',
            path: ROUTE_PATHS.gamingRevenueByGameType,
            component: CancelledGames,
            hasAuth: true,
            hasSideBarOption: true,
            icon: EllipseIcon
          }
        ]
      }
    ]
  },
  {
    id: uuidv4(),
    sectionName: 'administrator',
    sectionChilds: [
      {
        key: uuidv4(),
        label: 'addNewUser',
        path: ROUTE_PATHS.addNewUser,
        component: AddUser,
        hasAuth: true,
        hasSideBarOption: true,
        icon: AddUserIcon,
        subMenus: []
      },
      {
        key: uuidv4(),
        label: 'usersList',
        path: ROUTE_PATHS.usersList,
        component: PreRoundReport,
        hasAuth: true,
        hasSideBarOption: true,
        icon: UserListIcon,
        subMenus: []
      }
    ]
  },
  {
    id: uuidv4(),
    sectionName: 'customerSupport',
    sectionChilds: [
      {
        key: uuidv4(),
        label: '+1-888-000-999',
        path: ROUTE_PATHS.phone,
        component: PreRoundReport,
        hasAuth: true,
        hasSideBarOption: true,
        icon: PhoneIcon,
        subMenus: []
      },
      {
        key: uuidv4(),
        label: 'support@fg.com',
        path: ROUTE_PATHS.support,
        component: PreRoundReport,
        hasAuth: true,
        hasSideBarOption: true,
        icon: MailIcon,
        subMenus: []
      }
    ]
  }
]
