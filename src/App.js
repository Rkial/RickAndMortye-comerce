import { useEffect } from "react";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import { AppRoutes } from "./routes/AppRouter";
import {useStateValue} from "./StateProvide";

function App() {
  const [{user},dispatch]=useStateValue();

useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    console.log(authUser);
    if(authUser){
      dispatch({
        type: actionTypes.SET_USER,
        user: authUser,
      })
    }
  })
},{})

  return (
    <>
           
          <AppRoutes />
        
      
    </>
  );
}

export default App;
