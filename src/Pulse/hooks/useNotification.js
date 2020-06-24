import { useContext } from 'react';
import  {NotificationContext} from 'Pulse/providers/NotificationContextProvider';

//https://medium.com/yld-blog/handling-global-notifications-with-reacts-context-api-7d8135510d50
function useNotification() {

  //Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. 
  //The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
  const { notification, addNotification, removeNotification } = useContext(NotificationContext);
  return { notification, addNotification, removeNotification };
}

export default useNotification;