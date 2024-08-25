import {useState, useEffect} from 'react';

export default 
function EditUser({user, hasAdminRights, selectUser, updateEditing, updateModified}) {
const [userName, setUserName] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [street, setStreet] = useState("");
const [suite, setSuite] = useState("");
const [city, setCity] = useState("");
const [zipcode, setZipcode] = useState("");

useEffect(() => {
	if (user && user.address) updateUserStates(user);
}, [user]);

const handleSubmit = (e) => {
	e.preventDefault();
	updateEditing(false);
	updateModified(true);
};
const handleCancel = (e) => {
	updateEditing(false);
	updateModified(false);
};
const handleReset = () => {
	updateUserStates(user);
};
const updateUserStates = (user) => {
	setUserName(user.username);
	setName(user.name);
	setPhone(user.phone);
	setEmail(user.email);
	setStreet(user.address.street);
	setSuite(user.address.suite);
	setCity(user.address.city);
	setZipcode(user.address.zipcode);
}

if (!user || !user.address) {
return(<>
<p>Loading...</p>
</>);
}

return(<>
{hasAdminRights && <button type="button" onClick={() => selectUser(-1)} >Back to List</button>}
<h2>Updating details for  <i>{user.name}</i></h2>
<form onSubmit={handleSubmit} >
<label htmlFor="user-name" >Username: </label>
<input type="text" name="user-name" id="user-name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
<br />
<label htmlFor="name" >Name: </label>
<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
<br/>
<label htmlFor="phone" >Phone: </label>
<input type="tel" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
<br />
<label htmlFor="email" >email: </label>
<input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
<br />
<label htmlFor="street" >Street: </label>
<input type="text" name="street" id="street" value={street} onChange={(e) => setStreet(e.target.value)} required />
<br />
<label htmlFor="suite" > Suite: </label>
<input type="text" name="suite" id="suite" value={suite} onChange={(e) => setSuite(e.target.value)} required />
<br />
<label htmlFor="city" >City: </label>
<input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
<br />
<label htmlFor="zipcode" >Zipcode: </label>
<input type="text" name="zipcode" id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} required />
<button type="submit" >Save</button>
<button type="button" onClick={handleReset} >Reset</button>
<button type="button" onClick={handleCancel} >Cancel</button>
</form>
</>);
}
