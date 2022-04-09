import s from './scss/Navbar.module.scss'

console.log(s);
const Navbar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.nav__item}>
				<a href="">Profile</a>
			</div>
			<div className={s.nav__item}>
				<a href="">Messages</a>
			</div>
			<div className={s.nav__item}>
				<a href="">News</a>
			</div>
			<div className={s.nav__item}>
				<a href="">Music</a> 
			</div>
			<div className={`${s.nav__item} ${s.nav__item_active}`}>
				<a href="">Settings</a>
			</div>
		</nav>
	);
}

export default Navbar;