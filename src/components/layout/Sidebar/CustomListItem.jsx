import { Link as RouterLink } from 'react-router-dom'
import { ListItem } from '@mui/material'

export const CustomListItem = ({ children, onClick, selected, to, isbutton, ...otherProps }) => {
  return (
    <ListItem
      button={Boolean(isbutton)}
      to={to}
      component={RouterLink}
      onClick={onClick}
      selected={selected}
      {...otherProps}
    >
      {children}
    </ListItem>
  )
}
