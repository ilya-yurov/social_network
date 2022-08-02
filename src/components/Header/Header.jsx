import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

import {NavLink} from 'react-router-dom';
import s from './Header.module.scss'

const Header = ({isAuth, login, logoutUser, handleNavbar}) => {

	return (
		<Box color='primary' className={s.header} >
			<AppBar style={{background: '#2196f3', color: 'white'}} /* position="static" */>
				<Toolbar >
					<MenuIcon onClick={handleNavbar} className={s.header__icon} fontSize='large' sx={{mr: 1}} />
					<NavLink className={s.header__icon} to={'/'}>
						<HomeIcon className={s.header__icon} fontSize='large' sx={{mr: 1}} />
					</NavLink>
					<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
						Social network
					</Typography>

					{isAuth &&
						<>
							<Typography sx={{mr: 1}} variant="h6" component="div">{login}</Typography>
							<NavLink className={s.header__icon} to={'/profile'}>
								<AccountCircle sx={{mr: 1}} fontSize='large' />
							</NavLink>
							<LogoutIcon className={s.header__icon} onClick={logoutUser} fontSize='large' />
						</>
					}
				</Toolbar>
			</AppBar>
		</Box >
	);
}

export default Header;