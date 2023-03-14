// import { createContext } from "vm";
// import { useReducer } from "react-redux";
// import axios from "axios";

// const AppContext = createContext();

// const API = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"

// const initialState = {
//    isLoading: false,
//    isError: false,
//    users: [],
//    featureUsers: [],
//    isSingleLoading: false,
//    singleUser: {}
// };

// const AppProvider = ({ children }) => {
//     const [state, dispatch ] = useReducer(reducer, initialState);

//     const getSingleUser = async (url) => {
//         dispatch({ type: "SET_SINGLE_LOADING" });
//         try {
//             const res = await axios.get(url);
//             const singleUser = await res.data;
//             dispatch({ type: "SET_SINGLE_USER", payload: singleUser });
//         }  catch (error) {
//             dispatch({ type: "SET_SINGLE_ERROR" });
//         }
//     };


//     useEffect(() => {
//         getUsers(API);
//     }, []);

//     return (
//         <AppContext.Provider value={{ ...state, getSingleUser}}>{children}</AppContext.Provider>
//     );

// };

// //custom hooks
// const useUserContext = () => {
//     return useContext(AppContext);
// };

// export { AppProvider, AppContext, useUserContext };