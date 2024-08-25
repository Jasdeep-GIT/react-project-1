import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import ManageUsers from './users-component';

export default 
function AdminDashboard({updateAdminLoggedIn}) {

return(<>
<h1>Admin dashboard</h1>
<div>
<button type="button" onClick={() => updateAdminLoggedIn(false)} >Logout</button>
</div>
	<ManageUsers /> 
</>);
}
