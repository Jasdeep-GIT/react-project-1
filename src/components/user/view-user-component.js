
export default
function ViewUser({user, isModified, hasAdminRights, selectUser, updateEditing}) {
if (!user || !user.address) {
return(<>
<p>Loading...</p>
</>);
}

return(<>
{hasAdminRights && <button type="button" onClick={() => selectUser(-1)} >Back to List</button>}
<h2>Details for <i>{user.name}</i></h2>
<div>
<button type="button" onClick={() => updateEditing(true)} >Edit</button>
</div>
{isModified && <p>The modifications to '{user.username}' have been saved.</p>}
		<p>
Username: {user.username}
<br />
			Name: {user.name} 
			<br/>
		Phone: {user.phone}
			<br />
		Email: {user.email}
			<br />
			Street: {user.address.street}
			<br />
			Suite: {user.address.suite}
			<br />
			City: {user.address.city}
			<br />
			Zipcode: {user.address.zipcode}
			</p>
</>);
}

