import styles from '../../styles/home/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import livelyIcon from '../../public/images/pictures/lively-icon.png';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update';
import profile from '../../public/images/icons/User-Profile.svg';
import arrowBottom from '../../public/images/icons/arrow-bottom.svg';
import profileSubmenu from '../../public/images/icons/profile-submenu.svg';
import logout from '../../public/images/icons/logout-profile.svg';
import livelyIconMobile from '../../public/images/pictures/lively-responsive-icon.png';
import menuIconMobile from '../../public/images/pictures/menu-icon.png';
import closeMenu from '../../public/images/pictures/close.png';

import dashboard from '../../public/images/icons/dashboard.svg';
import profileDashboard from '../../public/images/icons/profile.svg';
import airdrop from '../../public/images/icons/airdrop.svg';
import support from '../../public/images/icons/support.svg';
import rightArrow from '../../public/images/icons/right-arrow.png';

// import ecosystemIcon from "../../public/images/icons/ecosystem-menu-icon.png"
// import aboutUsIcon from "../../public/images/icons/aboutUs-menu-icon.png"
// import helpCenterIcon from "../../public/images/icons/helpCenter-menu-icon.png"
// import contactUsIcon from "../../public/images/icons/contactUs-menu-icon.png"

export default function Header(props) {
  const forceUpdate = useForceUpdate();

  const router = useRouter();

  // state for check user login or not
  const [isLogin, setIsLogIn] = useState(false);
  // flase
  // state show sub menu for profile
  const [showSubMenu, setShowSubMenu] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={styles['header-container']}
        style={{
          width: `${props.width}`,
          borderRadius: `${props.borderRadius}`,
          backgroundColor: `${props.colorBg}`,
          padding: `${props.padding}`,
          borderBottom: `${props.borderBottom}`,
        }}
      >
        <div onClick={() => router.push('/')} className={styles['livelyverse-logo']}>
          <Image src={livelyIcon} />
        </div>

        <div className={styles['pages-link']}>
          <Link href="/ecosystem">
            <p>Ecosystem</p>
          </Link>
          <Link href="/help-center">
            <p>Help Center</p>
          </Link>
          <Link href="/about-us">
            <p>About Us</p>
          </Link>
          <Link href="/contact-us">
            <p>Contact Us</p>
          </Link>
          <Link href="/nft">
            <p>NFT</p>
          </Link>
        </div>

        {isLogin ? (
          <>
            <div
              onMouseMove={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
              className={styles['auth-btns']}
              style={{ visibility: `${props.logBotton}` }}
            >
              <Image src={profile} />
              <p>Profile</p>
              <Image src={arrowBottom} />
            </div>

            <div
              onMouseMove={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
              style={
                showSubMenu
                  ? {
                      opacity: 1,
                      zIndex: 1000,
                    }
                  : {
                      opacity: 0,
                      zIndex: -1,
                    }
              }
              className={styles['submenu-container']}
            >
              <div onClick={() => router.push('/dashboard/profile')} className={styles['submenu-item']}>
                <Image src={profileSubmenu} />
                <p>My Account</p>
              </div>

              <hr className={styles['submenu-line']} />

              <div
                // onClick={() => logOutHandle()}
                className={styles['submenu-item']}
              >
                <Image src={logout} />
                <p>Log Out</p>
              </div>
            </div>
          </>
        ) : (
          <div className={styles['auth-btns']} style={{ visibility: `${props.logBotton}` }}>
            <Link href="/login">
              <button className={styles['auth-login']}>Log in</button>
            </Link>
            <Link href="/register">
              <button className={styles['auth-register']}>Register</button>
            </Link>
          </div>
        )}
      </div>
      <div className={styles['header-mobile-container']}>
        <Image
          src={menuIconMobile}
          onClick={(e) => {
            e.preventDefault();
            Menu();
          }}
        />
        {props.page == undefined ? (
          // {}
          <button className={styles['mobile-auth']}>
            <Link href={'/login'}>
              <p>Log In</p>
            </Link>{' '}
            /{' '}
            <Link href={'/register'}>
              <p>Register</p>
            </Link>
          </button>
        ) : (
          <h3>{props.page}</h3>
        )}
        {/* {
                    isLogin ?
                    <>
                        <div className={styles['auth-btns']} style={{ visibility: `${props.logBotton}` }}>
                            <Image src={profile} />
                            <p>Profile</p>
                            <span onClick={() => setShowSubMenu(true)}><Image src={arrowBottom} /></span>
                        </div>

                        <div onClick={() => setShowSubMenu(false)}
                            style={showSubMenu ? {
                                opacity: 1,
                                zIndex: 1000,
                            } : {
                                opacity: 0,
                                zIndex: -1,
                            }}
                            className={styles['submenu-container']}>

                            <div onClick={() => router.push('/dashboard/profile')} className={styles['submenu-item']}>
                                <Image src={profileSubmenu} />
                                <p>My Account</p>
                            </div>

                            <hr className={styles['submenu-line']} />

                            <div onClick={() => logOutHandle()} className={styles['submenu-item']}>
                                <Image src={logout} />
                                <p>Log Out</p>
                            </div>

                        </div>
                    </>
                    : <></>
                } */}
        {/* <<<<<<< HEAD */}
        {/* <span onClick={() => Router.push("/")}><Image src={livelyIconMobile}/></span>
                {
                    props.menu == "DashMenu" ? 
                        <div className={styles["hamburger-menu"]} style={ menuOpen ? { backgroundColor: "#181B22" } : { backgroundColor: "#181B22", left: "-100%" }}>
                            <div className={styles["icon-dashboard-menu"]}><Link href={"/"}><Image src={livelyIcon}/></Link><Image src={closeMenu} onClick={(e) => {e.preventDefault(); Menu()}}/></div>
                            <div className={styles["close"]}><Image src={closeMenu} onClick={(e) => {e.preventDefault(); Menu()}}/></div>
                            <div className={styles["hamburger-menu-dashboard"]}>
                                <div onClick={() => Router.push("/dashboard")}>
                                    <Image src={dashboard} />
                                    <h3>Dashboard</h3>
                                    <Image src={rightArrow} />
                                </div>
                                <div onClick={() => Router.push("/dashboard/profile")}>
                                    <Image src={profileDashboard} />
                                    <h3>Profile</h3>
                                    <Image src={rightArrow} />
                                </div>
                                <div onClick={() => Router.push("/dashboard/airdrop")}>
                                    <Image src={support} />
                                    <h3>Air Drop</h3>
                                    <Image src={rightArrow} />
                                </div>
                                <div onClick={() => Router.push("/dashboard/support")}>
                                    <Image src={airdrop} />
                                    <h3>Support</h3>
                                    <Image src={rightArrow} />
                                </div>
                            </div>
                        </div>
                    :
                        <div className={styles["hamburger-menu"]} style={ menuOpen ? {  } : { left: "-100%" }}>
                            <div className={styles["close"]}><Link href={"/"}><Image src={livelyIcon}/></Link><Image src={closeMenu} onClick={(e) => {e.preventDefault(); Menu()}}/></div>
                            <div className={styles["hamburger-item"]}><Image src={ecosystemIcon} /><Link href={"/ecosystem"}><h3>Ecosystem</h3></Link></div>
                            <div className={styles["hamburger-item"]}><Image src={aboutUsIcon} /><Link href={"/about-us"}><h3>About Us</h3></Link></div>
                            <div className={styles["hamburger-item"]}><Image src={helpCenterIcon} /><Link href={"/help-center"}><h3>Help Center</h3></Link></div>
                            <div className={styles["hamburger-item"]}><Image src={contactUsIcon} /><Link href={"/contact-us"}><h3>contact Us</h3></Link></div>
                        </div>
                } */}
        {/* ======= */}
        <span onClick={() => router.push('/')}>
          <Image src={livelyIconMobile} />
        </span>
        {props.menu == 'DashMenu' ? (
          <div
            className={styles['hamburger-menu']}
            style={menuOpen ? { backgroundColor: '#181B22' } : { backgroundColor: '#181B22', left: '-100%' }}
          >
            <div
              className={styles['close-div']}
              onClick={(e) => {
                e.preventDefault();
                Menu();
              }}
            ></div>
            <div className={styles['icon-dashboard-menu']}>
              <Link href={'/'}>
                <Image src={livelyIcon} />
              </Link>
              <Image
                src={closeMenu}
                onClick={(e) => {
                  e.preventDefault();
                  Menu();
                }}
              />
            </div>
            {/* <div
                            className={styles["icon-dashboard-menu"]}
                            onClick={() => router.push("/")}
                        >
                            <Image src={livelyIcon} />
                        </div>
                        <div className={styles["close"]}>
                            <Image
                                src={closeMenu}
                                onClick={(e) => {
                                    e.preventDefault();
                                    Menu();
                                }}
                            />
                        </div> */}
            <div className={styles['hamburger-menu-dashboard']}>
              <div onClick={() => router.push('/dashboard')}>
                <Image src={dashboard} />
                <h3>Dashboard</h3>
                <Image src={rightArrow} />
              </div>
              <div onClick={() => router.push('/dashboard/profile')}>
                <Image src={profileDashboard} />
                <h3>Profile</h3>
                <Image src={rightArrow} />
              </div>
              <div onClick={() => router.push('/dashboard/airdrop')}>
                <Image src={support} />
                <h3>Air Drop</h3>
                <Image src={rightArrow} />
              </div>
              <div onClick={() => router.push('/dashboard/support')}>
                <Image src={airdrop} />
                <h3>Support</h3>
                <Image src={rightArrow} />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles['hamburger-menu']} style={menuOpen ? {} : { left: '-100%' }}>
            <div
              className={styles['close-div']}
              onClick={(e) => {
                e.preventDefault();
                Menu();
              }}
            ></div>
            <div className={styles['close']}>
              <Link href={'/'}>
                <Image src={livelyIcon} />
              </Link>
              <Image
                src={closeMenu}
                onClick={(e) => {
                  e.preventDefault();
                  Menu();
                }}
              />
            </div>
            {/* <div className={styles["close"]}>
                            <Image
                                src={closeMenu}
                                onClick={(e) => {
                                    e.preventDefault();
                                    Menu();
                                }}
                            /> */}
            {/* >>>>>>> master */}
            {/* </div> */}
            <div className={styles['hamburger-item']}>
              <Link href={'/ecosystem'}>
                <h3>Ecosystem</h3>
              </Link>
              <Image src={rightArrow} />
            </div>
            <div className={styles['hamburger-item']}>
              <Link href={'/about-us'}>
                <h3>About Us</h3>
              </Link>
              <Image src={rightArrow} />
            </div>
            <div className={styles['hamburger-item']}>
              <Link href={'/help-center'}>
                <h3>Help Center</h3>
              </Link>
              <Image src={rightArrow} />
            </div>
            <div className={styles['hamburger-item']}>
              <Link href={'/contact-us'}>
                <h3>contact Us</h3>
              </Link>
              <Image src={rightArrow} />
            </div>

            {/* <Image src={ecosystemIcon} />
                            <Image src={aboutUsIcon} />
                            <Image src={helpCenterIcon} />
                            <Image src={contactUsIcon} /> */}
            {/* <Link href={"/ecosystem"}>
                            <h3>Ecosystem</h3>
                        </Link>
                        <hr style={{ backgroundColor: "#ffffff", width: "100%" }} />
                        <Link href={"/about-us"}>
                            <h3>About Us</h3>
                        </Link>
                        <hr style={{ backgroundColor: "#ffffff", width: "100%" }} />
                        <Link href={"/help-center"}>
                            <h3>Help Center</h3>
                        </Link>
                        <hr style={{ backgroundColor: "#ffffff", width: "100%" }} />
                        <Link href={"/contact-us"}>
                            <h3>contact Us</h3>
                        </Link>
                        <hr style={{ backgroundColor: "#ffffff", width: "100%" }} /> */}
          </div>
        )}
      </div>

      {/* header background image (in changes removed) */}
      {/* <div className={styles['header-bg']} style={{ visibility: `${props.headerBg}` }} /> */}
    </>
  );
}
