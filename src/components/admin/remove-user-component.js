import ConfirmationDialog from '../confirmation-dialog';

export default
function RemoveUser({user, selectUser, updateRemoved, updateEditing}) {
const message = `Are you sure you want to permanently delete user.name} with username ${user.username}?`;
const handleConfirm = () => {
	updateRemoved(true);
	selectUser(-1);
};
const handleCancel = () => {
	updateRemoved(false);
};
const handleEdit = () => {
	updateEditing(true);
	updateRemoved(false);
};

console.log(message);
return(<>
<div className="RemoveUser-overlay">
<ConfirmationDialog message={message} handleConfirm={handleConfirm} handleCancel={handleCancel} updateEditing={updateEditing} />
</div>
</>);
}
