import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.scss'

const Navbar = (props) => {
	return (
		<nav className={s.nav}>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/profile">Profile</NavLink>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/users">Users</NavLink>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/dialogs" >Messages</NavLink>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/news">News</NavLink>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/music">Music</NavLink> 
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/settings">Settings</NavLink>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active} ${s.nav__friends}`}>
					<Friends state={props.state}></Friends>
			</div>
		</nav>
	);
}

export default Navbar;