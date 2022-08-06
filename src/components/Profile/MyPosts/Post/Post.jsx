import {Avatar, Typography} from '@mui/material'
import {deepOrange} from '@mui/material/colors'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import s from './Post.module.scss'


const Post = (props) => {
	return (

		<div className={s.post}>
			<div className={s.post__postIcon}>
				<Avatar sx={{bgcolor: deepOrange[500]}}>A</Avatar>
			</div>
			<div className={s.post__postText}>
				<Typography variant="h6" component="div">{props.message}</Typography>
			</div>
			<div className={s.post__like}>
				<ThumbUpOffAltIcon fontSize='large' />
			</div>
			<div className={s.post__count}>
				{props.likes}
			</div>
		</div>
	)
}

export default Post