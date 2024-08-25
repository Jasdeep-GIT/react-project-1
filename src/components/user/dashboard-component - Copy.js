
function Dashboard({userDetails, updateLoggedIn}) {
return(<>
<h1>Welcome {userDetails.username}</h1>
<h2>Dashboard</h2>
		<p>
			Name: {userDetails.name} 
			<br/>
		Phone: {userDetails.phone}
			<br />
		Email: {userDetails.email}
			<br />
			Street: {userDetails.address.street}
			<br />
			Suite: {userDetails.address.suite}
			<br />
			City: {userDetails.address.city}
			<br />
			Zipcode: {userDetails.address.zipcode}
			</p>

<button type="button" onClick={() => updateLoggedIn(false)} >Logout</button>
</>);
}
export default Dashboard;