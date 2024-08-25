
export default
function UserTable({users, selectUser, markForRemoval}) {
return(<>
<p>Total number of employees: {users.length} </p>
<table>
<caption><h2>List of employees</h2></caption>
<thead>
<tr>
<th>ID</th>
<th>Username</th>
<th>Name</th>
<th colspan="2" ></th>
</tr>
</thead>
<tbody>
{ 
users.map((user) => (
	<tr key={user.id} >
		<TableDataRow user={user} selectUser={selectUser}markForRemoval={markForRemoval} />
	</tr>
))
}
</tbody>
</table>
</>);
}

function TableDataRow({user, selectUser, markForRemoval}) {
return(<>
<td>{user.id}</td>
<th>{user.username}</th>
<td>{user.name}</td>
<td>
<button type="button"  onClick={() => selectUser(user.id)} >Details</button>
</td>
<td>
<button type="button"  onClick={() => {selectUser(user.id); markForRemoval(true);}} >Remove</button>
</td>
</>);
}

