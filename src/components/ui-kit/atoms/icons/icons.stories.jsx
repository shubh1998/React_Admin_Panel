import React from 'react'
import { Box } from '@mui/material'
import { DashboardIcon } from './iconComponents/DashboardIcon'
import { EllipseIcon } from './iconComponents/EllipseIcon'
import { GameIcon } from './iconComponents/GameIcon'
import { NotificationIcon } from './iconComponents/NotificationIcon'
import { ProfileIcon } from './iconComponents/ProfileIcon'
import { SideArrowIcon } from './iconComponents/SideArrowIcon'

export default {
  title: 'atoms/icons'
}

const Row = props => <Box p={2} {...props} />
const Cell = props => <Box display='inline-block' m={1} {...props} style={{ cursor: 'pointer' }} />

export const icons = () => (
  <Box>
    <Row>
      <Cell><DashboardIcon title='DashboardIcon' width={40} height={40} /></Cell>

      <Cell><EllipseIcon title='EllipseIcon' width={40} height={40} /></Cell>

      <Cell><GameIcon title='GameIcon' width={40} height={40} /></Cell>

      <Cell><NotificationIcon title='NotificationIcon' width={40} height={40} /></Cell>

      <Cell><ProfileIcon title='ProfileIcon' width={40} height={40} /></Cell>

      <Cell><SideArrowIcon title='SideArrowIcon' width={40} height={40} /></Cell>
    </Row>
  </Box>
)
