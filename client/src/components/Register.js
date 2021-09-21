import { useState } from "react"
// import { useHistory } from "react-router-dom"

function Register({ setUser }){
    // const history = useHistory()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    })

    function handleChange(event) {
        setFormData({...formData, 
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        let data = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.password_confirmation
        }
        console.log('usercreate',data)
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {
            if (json.errors) {
                alert(json.errors)
            }
            else {
                setUser(json)
                // history.push("/")
            }
        })
    }


    return(
        <div className="login-signup-form-wrapper">
        <form className="login-signup-form" onSubmit={handleSubmit}>
            <br/>
            <label htmlFor="username" >Username:</label><br/>
            <input type="text" name="username" className="input-field" id="username" value={formData.username} onChange={handleChange} /><br/><br/>
            <label htmlFor="email">Email:</label><br/>
            <input type="text" name="email" className="input-field" id="email" value={formData.email} onChange={handleChange} /><br/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" name="password" className="input-field" id="password" value={formData.password} onChange={handleChange} /><br/><br/>
            <label htmlFor="confPass">Confirm Password:</label><br/>
            <input type="password" name="password_confirmation" className="input-field" id="password_confirmation" value={formData.password_confirmation} onChange={handleChange} /><br/><br/>
            <button type="submit" style={{ borderRadius: "30px" }} >Submit</button>
        </form>
        </div>
    )
}

export default Register;