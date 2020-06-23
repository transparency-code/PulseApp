import React,{ useState, useCallback }  from 'react'

export const SnackBarContext = React.createContext({
    error: null,
    addError: () => {},
    removeError: () => {}
  });

  export default function SnackBarProvider({ children }) {

    const cleanErrorObj = {errorState : false, errorMessage: ""}
    const [error, setError] = useState(cleanErrorObj);
  
    function addError(message){
        setError({errorState : true, errorMessage: message});
    }

    const contextValue = {
      error,
      addError: useCallback((message) => addError(message), []),
      removeError: useCallback(() => setError(cleanErrorObj), [cleanErrorObj])
    };

    //Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    //Accepts a value prop to be passed to consuming components that are descendants of this Provider. 
    //addError and removeError in context, use useCallback
    return (
        <SnackBarContext.Provider value={contextValue}>
          {children}
        </SnackBarContext.Provider>
    );

}