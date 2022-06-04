import s from './Preloader.module.scss'
import userLoader from '../../assets/loaders/users-loader.gif'

const Preloader = () =>
{
	return (
		<div className={s.loader}>
			<img src={userLoader}/>
		</div>
	)
}
export default Preloader;