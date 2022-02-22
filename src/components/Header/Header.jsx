import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'

export const Header = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#000000', color: '#ffffff' }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Admin Panel
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
