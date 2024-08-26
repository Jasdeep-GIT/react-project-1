import '../../css/users-component.css';
import UsersTable from './users-table-component';
import ShowUsers from './show-users-component';
import ViewUser from '../user/view-user-component';
import EditUser from '../user/edit-user-component';
import RemoveUser from './remove-user-component';

import {useState, useEffect} from 'react';

export default
function ManageUsers() {
const hasAdminRights = true;
const [users, setUsers] = useState([]);
const [user, setUser] = useState({});
const [userId, setUserId] = useState(-1);
const [error, setError] = useState(null);
const [isLoading, setLoading] = useState(false);
const [isEditing, setEditing] = useState(false);
const [isModified, setModified] = useState(false);
const [forRemoval, setForRemoval] = useState(false);
const [isRemoved, setRemoved] = useState(false);

const selectUser = (id) => { setUserId(id); };
const updateEditing = (value) => { setEditing(value) };
const updateModified = (value) => { setModified(value); };
const markForRemoval = (value) => { setForRemoval(value); };
const updateRemoved = (value) => { 
	//updateRemoved(value);
	markForRemoval(false);
};

useEffect(() => {
setLoading(true);
if (userId === -1) {
setUsers([]);
setEditing(false);
fetch(`https://jsonplaceholder.typicode.com/users`)
	.then((response) => {
	if (!response.ok) throw new Error(`Couldn't retrieve data`);
	return response.json();
}).then((data) => {
	setUsers(data);
	setLoading(false);
}).catch((error) =>{
	setError(error);
	setLoading(false);
});
} else {
setUser({});
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
	.then((response) => {
		if (!response.ok) throw new Error("Couldn't fetch data");
		return response.json();
	}).then((data) => {
 		setUser(data);
		setLoading(false);
		console.log(data);
		console.log(`Found user with id ${userId}`);
	}).catch((error) => {
		setError(error);
		setLoading(false);
		console.log(error);
	});
}
}, [userId]);

if (isLoading) {
return(<>
<p>Loading data...</p>
</>);
}

if (error) {
return(<>
<h2>{error.message}</h2>
<p>An error occured while fetching data from the server. Please click on Reload button to resume operation. If problem persists, contact the systems administrator.</p>
<button type="button" onClick={() => {setError(null); setUserId(-1); }} >Reload</button>
</>);
}

return(<>
{ (userId === -1) ? 
	<ShowUsers users={users} hasAdminRights={hasAdminRights} selectUser={selectUser} markForRemoval={markForRemoval} /> : 
	( isEditing ?
		<EditUser user={user} hasAdminRights={hasAdminRights} selectUser={selectUser} updateEditing={updateEditing} updateModified={updateModified} /> : 
		(forRemoval ?
			<RemoveUser user={user} selectUser={selectUser} updateRemoved={updateRemoved} updateEditing={updateEditing} /> :
			<ViewUser user={user} isModified={isModified} hasAdminRights={hasAdminRights} selectUser={selectUser} updateEditing={updateEditing} />  
)	)
}
</>);
}

