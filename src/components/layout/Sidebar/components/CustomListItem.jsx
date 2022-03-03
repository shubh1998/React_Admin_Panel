import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

export const CustomListItem = ({
  item,
  onClick,
  selected,
  text,
  icon,
  to,
  isbutton,
  expandless,
  component,
  hasSubMenu,
  iconStyle,
  ...otherProps
}) => {
  return (
    <ListItem
      button={Boolean(isbutton)}
      to={to}
      component={component}
      onClick={onClick}
      selected={selected}
      {...otherProps}
    >
      <ListItemIcon sx={iconStyle}>
        {icon && icon}
      </ListItemIcon>
      <ListItemText primary={text} />
      {hasSubMenu
        ? expandless ? (<ExpandLess />) : (<ExpandMore />)
        : <></>}
    </ListItem>
  )
}
