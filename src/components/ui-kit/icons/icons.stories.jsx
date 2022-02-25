import React from 'react'
import { Box } from '@mui/material'
import { LeftArrowIcon } from './iconComponents/LeftArrowIcon'
import { NotificationIcon } from './iconComponents/NotificationIcon'
import { ProfileIcon } from './iconComponents/ProfileIcon'

export default {
  title: 'icons'
}

const Row = props => <Box p={2} {...props} />
const Cell = props => <Box display='inline-block' m={1} {...props} style={{ cursor: 'pointer' }} />

export const icons = () => (
  <Box>
    <Row>
      <Cell><LeftArrowIcon title='LeftArrowIcon' width={40} height={40} /></Cell>

      <Cell><NotificationIcon title='NotificationIcon' width={40} height={40} /></Cell>

      <Cell><ProfileIcon title='ProfileIcon' width={40} height={40} /></Cell>
    </Row>
  </Box>
)
