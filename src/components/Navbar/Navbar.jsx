import s from './Navbar.module.scss'

console.log(s);
const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={`${s.nav__item} ${s.nav__item_hover}`}>
				<a href="/profile">Profile</a>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover}`}>
				<a href="/dialogs">Messages</a>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover}`}>
				<a href="">News</a>
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover}`}>
				<a href="">Music</a> 
			</div>
			<div className={`${s.nav__item} ${s.nav__item_hover}`}>
				<a href="">Settings</a>
			</div>
		</nav>
	);
}

export default Navbar;