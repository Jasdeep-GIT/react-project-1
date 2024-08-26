import UsersTable from './users-table-component';
import AddUser from './add-user-component';
import {useState} from 'react';

export default
function ShowUsers({users, hasAdminRights, selectUser, markForRemoval}) {
const [newUser, setNewUser] = useState(null);
const [addNew, setAddNew] = useState(false);
const [isAdded, setAdded] = useState(false);

const updateAddNew = (value) => { setAddNew(value) };
const updateAdded = (value) => { 
	setAdded(value); 
	setAddNew(false);
};
const updateNewUser = (user) => { setNewUser(user) };

return(<>
{ isAdded && <p>New employee {newUser} has been added to the portal!</p> }
{ addNew ?
	<AddUser hasAdminRights={hasAdminRights} updateAdded={updateAdded} updateNewUser={updateNewUser} /> :
	<div>
		<button type="button" onClick={updateAddNew} >Add new</button>
		<UsersTable users={users} selectUser={selectUser} markForRemoval={markForRemoval} />
	</div>
}
</>);
}
