import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
	return (
		{
			dialogs: state.dialogsPage.dialogs,
			messages: state.dialogsPage.messages,
		}
	)
}

export default compose(
	connect(mapStateToProps, {sendMessage}),
	withAuthRedirect
)(Dialogs)