import style from '../../styles/home/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

import livelyIcon from '../../public/images/pictures/lively-icon.png';
import footerBg from '../../public/images/pictures/footer-bg-2.png';

import github from '../../public/images/icons/social-media/github.svg';
import Twitter from '../../public/images/icons/social-media/Twitter.svg';
import Linkedin from '../../public/images/icons/social-media/Linkedin.svg';
import Telegram from '../../public/images/icons/social-media/Telegram.svg';
import Instagram from '../../public/images/icons/social-media/Instagram.svg';

import githubActive from '../../public/images/icons/social-media/github-active.svg';
import TwitterActive from '../../public/images/icons/social-media/Twitter-active.svg';
import LinkedinActive from '../../public/images/icons/social-media/Linkedin-active.svg';
import TelegramActive from '../../public/images/icons/social-media/Telegram-active.svg';
import InstagramActive from '../../public/images/icons/social-media/Instagram-active.svg';

import { useState } from 'react';

export default function Footer(props) {
  const [gitHubHover, setGitHubHover] = useState(false);
  const [twitterHover, setTwitterHover] = useState(false);
  const [instagramHover, setInstagramHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [telegramHover, setTelegramHover] = useState(false);

  return (
    <div className={style['footer-container']} style={{ marginTop: `${props.marginTop}` }}>
      <div style={{ zIndex: '1' }} className={style['footerBg']}>
        <Image src={footerBg} />
      </div>
      <div style={{ zIndex: '2' }} className={style['main']}>
        <div className={style['livelyverse-logo']}>
          <Link href={'/'}>
            <Image src={livelyIcon} alt="Lively Icon" width={'256px'} height={'54px'} />
          </Link>
        </div>
        <div className={style['social-medias']}>
          {gitHubHover ? (
            <div className={style['shadow-hover']}>
              <span className={style['icon-shadow']}></span>
              <Link href={'https://github.com/Livelyverse'} passHref>
                <a target={'_blank'} rel={'noreferrer'}>
                  <Image
                    onMouseEnter={() => setGitHubHover(true)}
                    onMouseLeave={() => setGitHubHover(false)}
                    src={githubActive}
                    alt="github"
                  />
                </a>
              </Link>
            </div>
          ) : (
            <Link href={'https://github.com/Livelyverse'} passHref>
              <a target={'_blank'} rel={'noreferrer'}>
                <Image onMouseEnter={() => setGitHubHover(true)} onMouseLeave={() => setGitHubHover(false)} src={github} alt="github" />
              </a>
            </Link>
          )}
          {instagramHover ? (
            <div className={style['shadow-hover']}>
              <span className={style['icon-shadow']}></span>
              <Link href={'https://instagram.com/lively_verse'} passHref>
                <a target={'_blank'} rel={'noreferrer'}>
                  <Image
                    onMouseEnter={() => setInstagramHover(true)}
                    onMouseLeave={() => setInstagramHover(false)}
                    src={InstagramActive}
                    alt="Instagram"
                  />
                </a>
              </Link>
            </div>
          ) : (
            <Link href={'https://instagram.com/lively_verse'} passHref>
              <a target={'_blank'} rel={'noreferrer'}>
                <Image
                  onMouseEnter={() => setInstagramHover(true)}
                  onMouseLeave={() => setInstagramHover(false)}
                  src={Instagram}
                  alt="Instagram"
                />
              </a>
            </Link>
          )}
          {twitterHover ? (
            <div className={style['shadow-hover']}>
              <span className={style['icon-shadow']}></span>
              <Link href={'https://twitter.com/Lively_verse?t=y4bKAQ98WQTBfg-GL6zvWA&s=08'} passHref>
                <a target={'_blank'} rel={'noreferrer'}>
                  <Image
                    onMouseEnter={() => setTwitterHover(true)}
                    onMouseLeave={() => setTwitterHover(false)}
                    src={TwitterActive}
                    alt="twitter"
                  />
                </a>
              </Link>
            </div>
          ) : (
            <Link href={'https://twitter.com/Lively_verse?t=y4bKAQ98WQTBfg-GL6zvWA&s=08'} passHref>
              <a target={'_blank'} rel={'noreferrer'}>
                <Image onMouseEnter={() => setTwitterHover(true)} onMouseLeave={() => setTwitterHover(false)} src={Twitter} alt="twitter" />
              </a>
            </Link>
          )}
          {linkedinHover ? (
            <div className={style['shadow-hover']}>
              <span className={style['icon-shadow']}></span>
              <Link href={'https://www.linkedin.com/company/lively-verse/'} passHref>
                <a target={'_blank'} rel={'noreferrer'}>
                  <Image
                    onMouseEnter={() => setLinkedinHover(true)}
                    onMouseLeave={() => setLinkedinHover(false)}
                    src={LinkedinActive}
                    alt="linkedin"
                  />
                </a>
              </Link>
            </div>
          ) : (
            <Link href={'https://www.linkedin.com/company/lively-verse/'} passHref>
              <a target={'_blank'} rel={'noreferrer'}>
                <Image
                  onMouseEnter={() => setLinkedinHover(true)}
                  onMouseLeave={() => setLinkedinHover(false)}
                  src={Linkedin}
                  alt="linkedin"
                />
              </a>
            </Link>
          )}
          {telegramHover ? (
            <div className={style['shadow-hover']}>
              <span className={style['icon-shadow']}></span>
              <Link href={'https://t.me/livelyplanet'} passHref>
                <a target={'_blank'} rel={'noreferrer'}>
                  <Image
                    onMouseEnter={() => setTelegramHover(true)}
                    onMouseLeave={() => setTelegramHover(false)}
                    src={TelegramActive}
                    alt="Telegram"
                  />
                </a>
              </Link>
            </div>
          ) : (
            <Link href={'https://t.me/livelyplanet'} passHref>
              <a target={'_blank'} rel={'noreferrer'}>
                <Image
                  onMouseEnter={() => setTelegramHover(true)}
                  onMouseLeave={() => setTelegramHover(false)}
                  src={Telegram}
                  alt="Telegram"
                />
              </a>
            </Link>
          )}
        </div>
      </div>
      <div style={{ zIndex: '2' }} className={style['pages']}>
        <div className={style['webPages']}>
          <Link href={'about-us'}>
            <p>About us</p>
          </Link>
          <Link href={'contact-us'}>
            <p>Contact us</p>
          </Link>
          <Link href={'help-center'}>
            <p>Help Center</p>
          </Link>
          <Link href={'ecosystem'}>
            <p>Ecosystem</p>
          </Link>
          <Link href={'privacy-policy'}>
            <p>Privacy Policy</p>
          </Link>
          <Link href={'terms'}>
            <p>Terms Of Use</p>
          </Link>
        </div>
        <div className={style['ourTokens']}>
          <Link href={'staking-plans'}>
            <p style={{ minWidth: '180px' }}>Staking Plans</p>
          </Link>
          <Link href={'inovers-token'}>
            <p style={{ minWidth: '180px' }}>Innoverse Token (INV)</p>
          </Link>
          <Link href={'lively-token'}>
            <p style={{ minWidth: '180px' }}>Lively Token (LVL)</p>
          </Link>
          <Link href={'nft'}>
            <p style={{ minWidth: '180px' }}>Lively Club NFT Exhibition</p>
          </Link>
        </div>
      </div>
      <p style={{ zIndex: '2' }} className={style['copy-right']}>
        CopyRight © 2022 LIVELYVERSE.io. All Rights Reserved.
      </p>
    </div>
  );
}
