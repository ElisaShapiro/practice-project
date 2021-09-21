import { useState } from "react"
// import { useHistory } from "react-router-dom"

function Login({ setUser } ){
    // const history = useHistory()

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: ''
    })

    function handleChange(event) {
        setLoginInfo({ ...loginInfo,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // debugger
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginInfo)
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.error) {
                // debugger
                alert(data.error)
            } else {
                setUser(data)
                // history.push("/")
            }
        })
    }


    return(
        <div>
            <form className="login-signup-form" onSubmit={handleSubmit}>
                <br/>
                <label htmlFor="username">Username:</label><br/>
                <input type="text" name="username" className="input-field" id="username" value={loginInfo.email} onChange={handleChange} /><br/><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="password" name="password" className="input-field" id="password" value={loginInfo.password} onChange={handleChange} /><br/><br/>
                <button type="submit" style={{ borderRadius: "30px" }}>Submit</button>
            </form>
        </div>
    )
}

export default Login;