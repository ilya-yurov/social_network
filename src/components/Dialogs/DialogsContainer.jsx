import { connect } from "react-redux";
import { sendMessage, updateDialogText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
	return (
		{
			dialogs: state.dialogsPage.dialogs,
			messages: state.dialogsPage.messages,
			newDialogText: state.dialogsPage.newDialogText
		}
	)
}

const DialogsContainer = connect(mapStateToProps, {updateDialogText, sendMessage})(Dialogs);
export default DialogsContainer;