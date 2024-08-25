import {useState} from 'react';
import ViewUser from './view-user-component';
import EditUser from './edit-user-component';

export default 
function Dashboard({user, updateLoggedIn}) {
const hasAdminRights = false;
const [isEditing, setEditing] = useState(false);
const [isModified, setModified] = useState(false);
const updateEditing = (value) => { setEditing(value) };
const updateModified = (value) => { setModified(value); };

return(<>
<h1>Welcome {user.username}</h1>
<button type="button" onClick={() => updateLoggedIn(false)} >Logout</button>
<h2>Dashboard</h2>
{ isEditing ? 
	<EditUser user={user} hasAdminRights={hasAdminRights} updateEditing={updateEditing} updateModified={updateModified} /> : 
	<ViewUser user={user} isModified={isModified} hasAdminRights={hasAdminRights} updateEditing={updateEditing} />
}
</>);
}
