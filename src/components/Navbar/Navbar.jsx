import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss'

console.log(s);
const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active}`}>
				<NavLink to="/profile">Profile</NavLink>
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
		</nav>
	);
}

export default Navbar;