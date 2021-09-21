import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar'

function Home(){
    const [user, setUser ] = useState(null)

    console.log('home line 9', user)
    // console.log(user.username)

    // useEffect(async() => {
    //     // auto-login
    //     await fetch("/me").then((r) => {
    //       if (r.ok) {
    //         r.json().then((user) => {
    //           setUser(user)
    //         });
    //       }
    //     });
    //   }, []);


    return (
        <div>
            <Navbar user={user} setUser={setUser}/>
            <h1> {user ? "you're logged in" : "go log in"}</h1>
            <Switch>
                <Route exact path="/">
                </Route>
                <Route path="/login">
                    <Login setUser={setUser}/>
                </Route>    
                <Route path="/register">
                    <Register setUser={setUser}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Home