import React,{ useState, useCallback }  from 'react'

export const NotificationContext = React.createContext({
    message: null,
    addNotification: () => {},
    removeNotification: () => {}
  });

  export default function NotificationContextProvider({ children }) {

    const cleanNotificationObj = {openState : false, message: ""}
    const [notification, setNotification] = useState(cleanNotificationObj);
  
    function addNotification(message){
      setNotification({openState: true, message});
    }

    const contextValue = {
      notification,
      addNotification: useCallback((message) => addNotification(message), []),
      removeNotification: useCallback(() => setNotification(cleanNotificationObj), [cleanNotificationObj])
    };

    //Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    //Accepts a value prop to be passed to consuming components that are descendants of this Provider. 
    //addError and removeError in context, use useCallback
    return (
        <NotificationContext.Provider value={contextValue}>
          {children}
        </NotificationContext.Provider>
    );

}