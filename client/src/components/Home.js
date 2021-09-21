import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import Navbar from './Navbar'

function Home(){
    const [user, setUser ] = useState(null)
    const [notes, setNotes] = useState([])

    // console.log('home line 9', user)
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

    //   useEffect(()=> {
    //       fetch('/notes')
    //       .then(res => res.json())
    //       .then(data => setNotes(data))
    //   }, [])
    //   console.log('notes 30', notes)
    //   const notesMap = notes.map((note) => {
    //     return <div><h2>{note.title}</h2><small> on {note.category}</small><p>{note.content}</p></div>}
    // })

    return (
        <div>
            <Navbar user={user} setUser={setUser}/>
            {user ? 
            // {notesMap}
            <h1> "you're logged in"</h1>
            : 
            <h1> "go log in"</h1>}
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