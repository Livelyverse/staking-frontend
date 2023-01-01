import styles from '../../styles/home/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import livelyIcon from '../../public/images/pictures/lively-icon.png';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useForceUpdate from 'use-force-update';
import profile from '../../public/images/icons/User-Profile.svg';
import wallet from '../../public/images/icons/Wallet.svg';

export default function Header(props) {
  const forceUpdate = useForceUpdate();

  const router = useRouter();

  // state for check user login or not
  const [isLogin, setIsLogIn] = useState(false);

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
    </>
  );
}
