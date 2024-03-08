import React, { useState } from 'react'
import * as s from './Notifications.styled'
import { useNotificationsContext } from 'context/notifications.context'
import { Notification } from './components'

export const Notifications = () => {
  const { state } = useNotificationsContext()

  return (
    <s.Notifications>
      <div style={{ position: 'relative' }}>
        {state.notifications.map(n => <Notification key={n.id} notification={n} />)}
      </div>
    </s.Notifications>
  )
}
