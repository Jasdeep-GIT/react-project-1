import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function AdminLogin({updateAdminLoggedIn, updateUserLoggedIn}) {
const navigate = useNavigate();
const [user, setUser] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState(null);

// hardcoding username and password for admin. This can also be fetched if required
const adminUser = "Admin";
const adminPassword = "admin@000";

const handleSubmit = (e) => {
	e.preventDefault();
	if ( user == adminUser && password == adminPassword )  {
		console.log(`Admin logged in at ${Date.now()}`);
		updateAdminLoggedIn(true);
		updateUserLoggedIn(false);
		navigate("/admin-dashboard");
	} else {
		setErrorMessage("Incorrect username or password for administrator.");
	}
}

return(<>
<h1>Admin Login</h1>
{errorMessage && <p>{errorMessage}</p>}
<form onSubmit={handleSubmit}>
<label htmlFor="user-name" >Username: </label>
<input type="text" name="user-name" id="user-name" required onChange={(e) => setUser(e.target.value)} />
<br />
<label htmlFor="user-password" >Password: </label>
<input type="password" id="user-password" name="user-password" required onChange={(e) => setPassword(e.target.value)} />
<br />
<button type="submit" >Login</button>
</form>
</>);
}
export default AdminLogin;