import PropTypes from 'prop-types'
import { Box, Divider } from '@mui/material'
import { CustomTypography } from '../../atoms/Typography/CustomTypography'
import { DrawerHeader, StyledDrawer, StyledIconButton } from './AppDrawer.styles'
import { SideArrowIcon } from '../../atoms/icons/iconComponents/SideArrowIcon'

export const AppDrawer = ({ children, openDrawer = true, handleDrawer = () => {}, text = 'Default' }) => {
  return (
    <StyledDrawer anchor='left' variant='persistent' open={openDrawer}>
      <Box sx={{ overflow: 'auto' }}>
        <DrawerHeader>
          <CustomTypography
            sx={{ paddingLeft: '15px' }}
            variant='h4'
            value={text}
          />
          <StyledIconButton padding='0px' onClick={handleDrawer}>
            <SideArrowIcon />
          </StyledIconButton>
        </DrawerHeader>
        <Divider />
        {children}
      </Box>
    </StyledDrawer>
  )
}

AppDrawer.defaultProps = {
  openDrawer: true,
  handleDrawer: () => {},
  children: 'null'
}

AppDrawer.propTypes = {
  openDrawer: PropTypes.bool,
  handleDrawer: PropTypes.func,
  children: PropTypes.element
}
