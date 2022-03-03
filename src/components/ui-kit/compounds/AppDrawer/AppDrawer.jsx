import PropTypes from 'prop-types'
import { Box, Divider } from '@mui/material'
import { LeftArrowIcon } from '../../atoms/icons/iconComponents/LeftArrowIcon'
import { CustomTypography } from '../../atoms/Typography/CustomTypography'
import { DrawerHeader, StyledDrawer, StyledIconButton } from './AppDrawer.styles'

export const AppDrawer = ({ children, openDrawer = true, handleDrawer = () => {} }) => {
  return (
    <StyledDrawer anchor='left' variant='persistent' open={openDrawer}>
      <Box sx={{ overflow: 'auto' }}>
        <DrawerHeader>
          <CustomTypography
            sx={{ paddingLeft: '15px' }}
            variant='h4'
            value='Admin'
          />
          <StyledIconButton padding='0px' onClick={handleDrawer}>
            <LeftArrowIcon />
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
