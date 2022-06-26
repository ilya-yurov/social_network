import { NavLink } from 'react-router-dom';
import unLoginImg from '../../assets/images/header/unLogin.png'
import s from './Header.module.scss'

const Header = (props) => {
	return (
		<header className={s.header}>
			<div className={s.header__logo}>
				<img src='https://e7.pngegg.com/pngimages/539/883/png-clipart-globe-earth-globe-miscellaneous-blue.png'></img>
			</div>
			<div className={s.header__login}>
				{props.isAuth ?
				<>
					<div className={s.header__avatar}>
						<img src={props.photos.small}/>
					</div>
					<div className={s.header__user}>{props.login}</div>
					<div className={s.header__unLogin}>
						<button onClick={props.unLoginUser}>
							<img src={unLoginImg}/>
						</button>
					</div>
				</> : 
					<NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}

export default Header;