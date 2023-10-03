import React, {createContext, useState} from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [id, setid] = useState();
    return <AppContext.Provider value={{id, setid}}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider};