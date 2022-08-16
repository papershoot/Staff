import UserContext from "./Context";
import { useReducer } from "react";
import UserReducer, { initialState } from "./Reducer";
function Provider({ children }) {

    const [state, dispatch] = useReducer(UserReducer, initialState)

    console.log(state);
    // console.log(dispatch)
    return (

        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    )
}

export default Provider