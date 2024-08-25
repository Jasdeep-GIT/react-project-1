import '../css/confirmation-dialog.css';

export default
function ConfirmationDialog({message, handleConfirm, handleCancel, updateEditing}) {
return(<>
<div className="ConfirmationDialog"
<p>{message}</p>
<div className="ConfirmationDialog-buttons">
<button type="button" onClick={handleConfirm} >Yes</button>
<button type="button" onClick={handleCancel} >No</button>
<button type="button" onClick={updateEditing} >Edit instead</button>
</div>
</div>
</>);
}
