import React, { FC, useState } from 'react'
import * as s from './Notification.styled'
import { useTimeout } from 'hooks'
import { animation } from 'utils'
import { useNotificationsContext } from 'context'
import { INotification } from 'types/notifications.types'

interface INotificationProps {
  notification: INotification
}

type AnimationType = 'showing' | 'hiding'

export const Notification: FC<INotificationProps> = ({ notification }) => {
  const { deleteNotification } = useNotificationsContext()
  const [animationType, setAnimationType] = useState<AnimationType>('showing')
  const currentAnimation = animationType === 'showing' ? animation.slideFromRight() : animation.slideFromLeft({
    initialX: 0,
    transitionXTo: 300
  })

  useTimeout(() => setAnimationType('hiding'), 2500)

  useTimeout(() => deleteNotification(notification.id), 3000)

  return (
    <s.Wrapper key={animationType} {...currentAnimation}>{notification.message}</s.Wrapper>
  )
}
