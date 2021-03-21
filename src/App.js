import React, { useEffect } from 'react';
import Homescreen from './Homescreen'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProfileScreen from './ProfileScreen/ProfileScreen'
import LoginScreen from './LoginScreen/LoginScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import SingleMovie from './singleMovie/SingleMovie'


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //Logged In
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        //logged out
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch])


  return (
    <div className="App">
      <Router>
        {
          !user ? <LoginScreen /> : (
            <Switch>

              <Route path='/movie/:id'>
                <SingleMovie />  
              </Route>

              <Route path='/tv/:id'>
                <SingleMovie />
              </Route>
              
              
              <Route path='/profile'>
                <ProfileScreen />
              </Route>
              <Route exact path="/">
              <Homescreen />
              </Route>
            </Switch>
          )
        }
        
      </Router>
    </div>
    
    
  );
}

export default App;
