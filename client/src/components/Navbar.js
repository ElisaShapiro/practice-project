import { NavLink } from 'react-router-dom';

function Navbar({ user, setUser }){

    function handleLogoutClick() {
        fetch('/logout', {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null);
                // history.push('/')
            }
        });          
    }
    return(
        <nav>
            {user ? 
            (<>
            <button>
                <NavLink exact to="/">Home</NavLink> 
            </button>
            <button onClick={handleLogoutClick}>Logout</button>
            {/* <button></button> */}
            </>)
            :
            (<>
            <button>
                <NavLink to="/login">Login</NavLink>
            </button>
            <button>
                <NavLink to="/register">Register</NavLink>
            </button>
            </>)
            }
        </nav>
    )
}

export default Navbar