import React from "react";
import { initState, reducer } from "./reducer"
import type { State, Actions } from "./reducer"

type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Actions>;
}

export const AppContext = React.createContext<AppContextType | undefined>(undefined)

const AppContextProvider = ({ children }: {children: React.ReactNode}) => {

  const [state, dispatch] = React.useReducer(reducer, initState)

  return (
    <AppContext.Provider value={{state, dispatch}}>
      { children }
    </AppContext.Provider>
  )
}

export default AppContextProvider