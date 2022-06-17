import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage, updateDialogText } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
	return (
		{
			dialogs: state.dialogsPage.dialogs,
			messages: state.dialogsPage.messages,
			newDialogText: state.dialogsPage.newDialogText,
			isAuth: state.auth.isAuth
		}
	)
}

export default compose(
	connect(mapStateToProps, {updateDialogText, sendMessage}),
	withAuthRedirect,

)(Dialogs)