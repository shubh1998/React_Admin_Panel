import { Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'

export const MainLayout = ({ children }) => {
    return (
        <div className="App">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header />
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </div>
    )
}
