import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default 
function Login({updateLoggedIn, updateUserDetails, updateAdminLoggedIn}) {
const navigate = useNavigate();
const [user, setUser] = useState("");
const [data, setData] = useState([]);
const [error, setError] = useState(null);
const [errorMessage, setErrorMessage] = useState(null);

useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/users`)
	.then((response) => {
	if (!response.ok) throw new Error(`Couldn't retrieve data`);
	return response.json();
}).then((data) => {
	setData(data);
}).catch((error) =>{
	setError(error);
});
}, []);

const handleSubmit = (e) => {
	e.preventDefault();
	if (error) {
		setErrorMessage(error.message);
		setError(null);
	}
for (let i=0; i<data.length; i++) {
	if (data[i].username == user) {
		console.log(`found user ${user}.`);
		updateLoggedIn(true);
		updateUserDetails(data[i]);
		updateAdminLoggedIn(false);
		navigate(`/dashboard`);
		
return;
	}

		} // end for loop

	updateLoggedIn(false);
	setErrorMessage(`User '${user}' not found. Please check the spellings and try again!`);
	console.log(errorMessage);
};

return(<>
<h1>Employee Login</h1>
{errorMessage && <p>{errorMessage} </p>}
<form onSubmit={handleSubmit} >
<label htmlFor="user-name" >UserName: </label>
<input type="text" name="user-name" id="user-name" onChange={(e) => setUser(e.target.value)} required />
<br />
<label htmlFor="user-password" >Password: </label>
<input type="password" id="user-password" name="user-password" required />
<br />
<button type="submit" >Login</button>
</form>
</>);
}

