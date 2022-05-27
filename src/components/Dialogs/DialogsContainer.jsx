import { connect } from "react-redux";
import { sendMessageActionCreator, updateDialogTextActionCreator } from "../../redux/dialogsReducer";
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

let mapDispatchToProps = (dispatch) => {
	return (
		{
			onSendMessage: () => dispatch(sendMessageActionCreator()),
			onNewMessageText: (text) => dispatch(updateDialogTextActionCreator(text))
		}
	)
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;