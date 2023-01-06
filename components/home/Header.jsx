import styles from '../../styles/home/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import livelyIcon from '../../public/images/pictures/lively-icon.png';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update';
import profile from '../../public/images/icons/User-Profile.svg';
import wallet from '../../public/images/icons/Wallet.svg';
import livelyIconMobile from "../../public/images/pictures/lively-responsive-icon.png";
import menuIconMobile from "../../public/images/pictures/menu-icon.png";
import closeMenu from "../../public/images/pictures/close.png";

import dashboard from "../../public/images/icons/dashboard.svg";
import profileDashboard from "../../public/images/icons/profile.svg";
import airdrop from "../../public/images/icons/airdrop.svg";
import support from "../../public/images/icons/support.svg";
import rightArrow from "../../public/images/icons/right-arrow.png";

import profileIcon from "../../public/images/icons/icon-profile-staking.png"

export default function Header(props) {
  const forceUpdate = useForceUpdate();

  const router = useRouter();

  // state for check user login or not
  const [isLogin, setIsLogIn] = useState(false);

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
        <div onClick={() => window.open('https://livelyverse.io/', '_blank')} className={styles['livelyverse-logo']}>
          <Image src={livelyIcon} />
        </div>

        <div className={styles['pages-link']}>
          <Link href="https://livelyverse.io/ecosystem">
            <a target={'_blank'}>
              <p>Ecosystem</p>
            </a>
          </Link>

          <Link href="/">
            <p>Dapp</p>
          </Link>

          <Link href="https://livelyverse.io/help-center">
            <a target={'_blank'}>
              <p>Help Center</p>
            </a>
          </Link>

          <Link href="https://livelyverse.io/about-us">
            <a target={'_blank'}>
              <p>About Us</p>
            </a>
          </Link>

          <Link href="https://livelyverse.io/contact-us">
            <a target={'_blank'}>
              <p>Contact Us</p>
            </a>
          </Link>

          <Link href="https://livelyverse.io/nft">
            <a target={'_blank'}>
              <p>NFT</p>
            </a>
          </Link>
        </div>

        {isLogin ? (
          <>
            <div className={styles['auth-btns']}>
              <Image src={wallet} alt={'wallet'} />
              <span
                className={`flex-row-center w-8 h-8 rounded-full
               border-solid border-grayGold border mr-3 ml-6`}
              >
                <Image src={profile} />
              </span>
              <p className={`font-popins-l`}>user name</p>
            </div>
          </>
        ) : (
          <div className={styles['auth-btns']}>
            <Image src={wallet} alt={'wallet'} />
            <button
              onClick={() => window.open('https://livelyverse.io/login', '_blank')}
              className={`ml-8 font-popins-l ${styles['auth-register']}`}
            >
              Login/Register
            </button>
          </div>
        )}
      </div>
      <div className={styles["header-mobile-container"]}>
        <Image
          src={menuIconMobile}
          onClick={(e) => {
            e.preventDefault();
            Menu();
          }}
        />
        <div className={`${styles['login-Icon']} w-full ml-6 flex flex-row justify-start items-start `}>
          <Image src={profileIcon} />
          <Image src={wallet} className={'ml-3'}/>
        </div>
        <span onClick={() => router.push("/")}>
          <Image src={livelyIconMobile} />
        </span>
        {props.menu == "DashMenu" ? (
          <div
            className={styles["hamburger-menu"]}
            style={
              menuOpen
                ? { backgroundColor: "#181B22" }
                : { backgroundColor: "#181B22", left: "-100%" }
            }
          >
            <div className={styles["close-div"]} onClick={(e) => { e.preventDefault(); Menu() }}></div>
            <div className={styles["icon-dashboard-menu"]}><Link href={"/"}><Image src={livelyIcon} /></Link><Image src={closeMenu} onClick={(e) => { e.preventDefault(); Menu() }} /></div>
            <div className={styles["hamburger-menu-dashboard"]}>
              <div onClick={() => router.push("/dashboard")}>
                <Image src={dashboard} />
                <h3>Dashboard</h3>
                <Image src={rightArrow} />
              </div>
              <div onClick={() => router.push("/dashboard/profile")}>
                <Image src={profileDashboard} />
                <h3>Profile</h3>
                <Image src={rightArrow} />
              </div>
              <div onClick={() => router.push("/dashboard/airdrop")}>
                <Image src={support} />
                <h3>Air Drop</h3>
                <Image src={rightArrow} />
              </div>
              <div onClick={() => router.push("/dashboard/support")}>
                <Image src={airdrop} />
                <h3>Support</h3>
                <Image src={rightArrow} />
              </div>
            </div>
          </div>
        ) : (
          <div
            className={styles["hamburger-menu"]}
            style={menuOpen ? {} : { left: "-100%" }}
          >
            <div className={styles["close-div"]} onClick={(e) => { e.preventDefault(); Menu() }}></div>
            <div className={styles["close"]}><Link href={"/"}><Image src={livelyIcon} /></Link><Image src={closeMenu} onClick={(e) => { e.preventDefault(); Menu() }} /></div>
            <div className={styles["hamburger-item"]}><Link href={"/ecosystem"}><h3>Ecosystem</h3></Link><Image src={rightArrow} /></div>
            <div className={styles["hamburger-item"]}><Link href={"/about-us"}><h3>About Us</h3></Link><Image src={rightArrow} /></div>
            <div className={styles["hamburger-item"]}><Link href={"/help-center"}><h3>Help Center</h3></Link><Image src={rightArrow} /></div>
            <div className={styles["hamburger-item"]}><Link href={"/contact-us"}><h3>contact Us</h3></Link><Image src={rightArrow} /></div>
            <div className={styles["hamburger-item"]}><Link href={"/nft"}><h3>NFT</h3></Link><Image src={rightArrow} /></div>
          </div>
        )}
      </div>
    </>
  );
}
