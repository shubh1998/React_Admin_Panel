import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Box } from '@mui/material/node_modules/@mui/system'
import React from 'react'
import routerList from '../../routes/routerList';
import { Link as RouterLink, useLocation } from 'react-router-dom'

const drawerWidth = 240;

export const Sidebar = () => {
    const location = useLocation();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {routerList.map((item, index) => {
                        const NavIcon = item.icon
                        if (item.hasNavbar) {
                            return (
                                (
                                    <ListItem button to={item.path} component={RouterLink} key={item.label} selected={item.path === location.pathname}>
                                        <ListItemIcon>
                                            <NavIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item.label} />
                                    </ListItem>
                                )
                            )
                        }
                        return null
                    })}
                </List>
            </Box>
        </Drawer>
    )
}
