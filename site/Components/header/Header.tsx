import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import { useStyles } from './header.style';
import { useTypedSelector } from '../../Components/Hooks/useTypedSelector';
import { useActions } from '../Hooks/useAction';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import Image from 'next/image';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useMediaQuery } from '@material-ui/core';

const navigation = [
  {
    title: 'Поиск',
    href: '/FindVacancies',
    img: <SearchIcon />,
  },
  {
    title: 'Избранное',
    href: '/Favorite',
    img: <StarIcon />,
  },
  { title: 'Cоздать вакансию', href: '/CreateVacancy', img: <WorkIcon /> },
  { title: 'Cоздать резюме', href: '/CreateResume', img: <LibraryBooksIcon /> },
];

const Header: React.FC = () => {
  const mediaBurger = useMediaQuery('(max-width: 900px)');
  const mediaDisplay = useMediaQuery('(min-width: 900px)');
  React.useEffect(() => {
    if (localStorage.getItem('Token')) {
      checkAuth();
    }
  }, []);
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const { setLogout, checkAuth } = useActions();
  const classes = useStyles();

  const { isAuth, mainInfo } = useTypedSelector(({ userReducer }) => {
    return {
      isAuth: userReducer.isAuth,
      mainInfo: userReducer.mainInfo,
    };
  });
  //menu
  const handleClose = () => {
    setMenu(null);
  };
  const handleOpen = (event: any) => {
    setMenu(event.currentTarget);
  };

  const makeLogout = (): void => {
    setLogout();
  };
  const changeMenu = () => {
    if (openMenu) {
      document.body.style.overflow = 'scroll';
      setOpenMenu(false);
      return;
    }
    document.body.style.overflow = 'hidden';
    setOpenMenu(true);
  };

  return (
    <>
      <div className={clsx({ [classes.displayMenu]: true, [classes.displayMenuActive]: openMenu })}>
        <div className={classes.burgerMenu}>
          <Link href="/">
            <a className={classes.display}>
              <Typography className={classes.white} variant="h5" onClick={changeMenu}>
                TW.ru
              </Typography>
            </a>
          </Link>

          {navigation.map((element) => (
            <Link href={element.href} key={element.title}>
              <Button
                variant="text"
                className={classes.white}
                startIcon={element.img}
                onClick={changeMenu}>
                <a className={classes.navigationMenu}>{element.title}</a>
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <AppBar position="relative">
        <Toolbar className={classes.flex}>
          {mediaDisplay ? (
            <>
              <Link href="/">
                <a className={classes.display}>
                  <Typography className={classes.white} variant="h5">
                    TW.ru
                  </Typography>
                </a>
              </Link>
              <div className={classes.display}>
                {isAuth &&
                  navigation.map((element) => (
                    <Link href={element.href} key={element.title}>
                      <Button variant="text" className={classes.white} startIcon={element.img}>
                        <a className={classes.white}>{element.title}</a>
                      </Button>
                    </Link>
                  ))}
              </div>
            </>
          ) : (
            ''
          )}
          {isAuth && mediaBurger ? (
            <div onClick={changeMenu}>
              <MenuItem className={classes.padding}>
                <MenuIcon />
              </MenuItem>
            </div>
          ) : (
            ''
          )}
          {isAuth ? (
            <>
              <div className={classes.flex}>
                <Typography>{`${mainInfo.name} ${mainInfo.secondName}`}</Typography>
                <IconButton onClick={handleOpen}>
                  {mainInfo.avatar ? (
                    <Image
                      className={classes.avatar}
                      src={`https://next-tailwind-project.herokuapp.com/${mainInfo.avatar}`}
                      layout="intrinsic"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Avatar />
                  )}
                </IconButton>
              </div>
              <Menu id="menu" open={Boolean(menu)} onClose={handleClose} anchorEl={menu}>
                <MenuItem>
                  <Link href="/Account">
                    <a className={classes.textDecortation}>Мой аккаунт</a>
                  </Link>
                </MenuItem>
                <MenuItem className={classes.textDecortation} onClick={makeLogout}>
                  Выйти
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div>
              {!isAuth && (
                <Link href="/FindVacancies">
                  <Button
                    className={classes.btn}
                    variant="contained"
                    startIcon={<SearchIcon />}
                    color="secondary">
                    <a className={classes.navigation}>Поиск</a>
                  </Button>
                </Link>
              )}
              <Link href="/Authorization">
                <a className={classes.textDecortation}>
                  <Button className={classes.btn} variant="contained" color="success">
                    Войти
                  </Button>
                </a>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
