import { NotificationIcon } from '../../../../ui-kit/icons/iconComponents/NotificationIcon'
import { StyledIconButton } from '../../styles/Header.styles'

export const Notification = () => {
  return (
    <StyledIconButton>
      <NotificationIcon style={{ width: 20, height: 20 }} />
    </StyledIconButton>
  )
}
