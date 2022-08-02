import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PeopleIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import {Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography} from '@mui/material';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.scss'

const NavbarItem = ({icon, link, element}) => {
	return (
		<ListItem >
			<Stack flexGrow={1} className={s.navbarItem}>
				<IconButton>
					<ListItemIcon>
						<NavLink to={link}>
							{icon}
						</NavLink>
					</ListItemIcon>
					<NavLink to={link}>
					<Typography sx={{marginRight: '200px'}}variant='subtitle1'>{element}</Typography>
					</NavLink>
				</IconButton>
			</Stack>
		</ListItem>
	)
}

const Navbar = ({navbarToogle, setNavbarClose}) => {

	return (
		<Drawer
			anchor='left'
			open={navbarToogle}
			onClose={setNavbarClose}
		>
			<List sx={{width: '300px'}}>
				<ListItem>
					<ListItemIcon >
						<MenuOpenIcon fontSize='large' />
					</ListItemIcon>
					<Typography variant='h6'>Social network menu</Typography>
				</ListItem>
				<Divider />
				<NavbarItem icon={<AccountCircle fontSize='large' />} link={'/profile'} element={'Profile'} />
				<NavbarItem icon={<PeopleIcon fontSize='large' />} link={'/users'} element={'Users'} />
				<NavbarItem icon={<ForumIcon fontSize='large' />} link={'/dialogs'} element={'Dialogs'} />
				<NavbarItem icon={<NewspaperIcon fontSize='large' />} link={'/news'} element={'News'} />
				<NavbarItem icon={<LibraryMusicIcon fontSize='large' />} link={'/music'} element={'Music'} />
				<NavbarItem icon={<SettingsIcon fontSize='large' />} link={'/settings'} element={'Settings'} />
			</List>
		</Drawer>
	);
}

export default Navbar;

/* <nav className={s.nav}>
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
	<div className={`${s.nav__item} ${s.nav__item_hover} ${s.nav__item_active} ${s.nav__friends}`}>
			<Friends state={props.state}></Friends>
	</div>
</nav> */