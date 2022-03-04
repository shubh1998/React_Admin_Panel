import { NotificationIcon } from '../../../../ui-kit/atoms/icons/iconComponents/NotificationIcon'
import { useHeaderController } from '../../controller/useHeaderController'
import { StyledIconButton } from '../../styles/Header.styles'

export const Notification = () => {
  const { showNotification } = useHeaderController()

  return (
    <StyledIconButton onClick={showNotification}>
      <NotificationIcon style={{ width: 20, height: 20 }} />
    </StyledIconButton>
  )
}
