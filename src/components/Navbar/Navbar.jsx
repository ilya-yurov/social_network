import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.scss'

const Navbar = (props) => {
	return (
		<nav className={s.nav}>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/profile" data-testid='profile-link'>My profile</NavLink>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/users" data-testid='users-link'>Users</NavLink>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/dialogs" data-testid='dialogs-link'>Messages</NavLink>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/news" data-testid='news-link'>News</NavLink>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/music" data-testid='music-link'>Music</NavLink> 
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/settings" data-testid='settings-link'>Settings</NavLink>
			</div>
			{/* <div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active} ${s.nav__friends}`}>
					<Friends state={props.state}></Friends>
			</div> */}
		</nav>
	);
}

export default Navbar;