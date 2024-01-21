import { TNullable } from "@/types/common.types";
import { INotification } from "@/types/notifications.types";
import { generateId } from "@/utils";
import { Dispatch, FC, ReactNode, createContext, useContext, useReducer } from "react";

interface INotificationsProps {
  children: ReactNode
}

interface INotificationState { notifications: INotification[] }

enum NotificationActionKind {
  add = 'ADD',
  delete = 'DELETE'
}
interface NotificationAction {
  type: NotificationActionKind;
  payload: string;
}

interface INotificationValue {
  state: {
    notifications: INotification[];
  };
  createNotification: (payload: string) => void;
  deleteNotification: (payload: string) => void;
}

export const NotificationsContext = createContext<TNullable<INotificationValue>>(null)

export const useNotificationsContext = () => {
  const context = useContext(NotificationsContext)

  if (!context) {
    throw new Error('NotificationsContext must be used within NotificationsContext.Provider')
  }

  return context
}

function notificationsReducer(state: INotificationState, action: NotificationAction) {
  switch (action.type) {
    case 'ADD': {
      return {
        notifications: [
          ...state.notifications,
          { id: generateId(), message: action.payload }
        ]
      }
    }
    case 'DELETE': {
      return { notifications: state.notifications.filter(n => n.id !== action.payload) }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const NotificationsProvider: FC<INotificationsProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    notificationsReducer,
    { notifications: [] }
  )

  const createNotification = (payload: string) => dispatch({ type: NotificationActionKind.add, payload })
  const deleteNotification = (payload: string) => dispatch({ type: NotificationActionKind.delete, payload })
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, createNotification, deleteNotification }
  return <NotificationsContext.Provider
    value={value}
  >{children}</NotificationsContext.Provider>
}