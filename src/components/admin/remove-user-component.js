import ConfirmationDialog from '../confirmation-dialog';

export default
function RemoveUser({user, updateEditing}) {
const message = `Are you sure you want to permanently delete user.name} with username ${user.username}?`
const handleConfirm = () => {
	updateRemoved(true);
};
const handleCancel = () => {
	// do nothing
};
const handleEdit = () => {
	updateEditing(true);
};

return(<>
<ConfirmationDialog message={message} />
</>);
}
