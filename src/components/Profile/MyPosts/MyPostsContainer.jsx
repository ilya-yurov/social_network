import { connect } from "react-redux";
import { addPost} from "../../../redux/reducers/profile-reducer/profile-reducer";
import MyPosts from './MyPosts'

let mapStateToProps = (state) => {
	return (
		{
			posts: state.profilePage.posts,
		}
	)
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);
export default MyPostsContainer;