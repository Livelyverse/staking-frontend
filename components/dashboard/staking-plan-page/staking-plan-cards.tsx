import Image from 'next/image';
import { TStakingPlanCards } from '../../../types/pages/dashboard/staking-plan-cards';
import styles from '../../../styles/dashboard/stakingPlanPage.module.scss';
import GradientSlider from '../staking-plan-page/gradient-slider';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const StakingPlanCards = (props: TStakingPlanCards) => {
  const spanElement: { current: HTMLSpanElement } = useRef(null) as any;
  useEffect(() => {
    const inputQuery = document.querySelectorAll('.custom-input')!;
    const inputs = [...inputQuery] as Array<HTMLInputElement>;
    for (const index of inputs.keys()) {
      inputs[index].addEventListener('focus', (item) => {
        const span = document.getElementById('span-element-' + index) as HTMLSpanElement;
        span.style.left = '16px';
        span.style.top = '10px';
        span.style.fontSize = '12px';
      });
      inputs[index].addEventListener('blur', (item) => {
        if (inputs[index].value.length > 0) return;
        const span = document.getElementById('span-element-' + index) as HTMLSpanElement;
        span.style.left = '20px';
        span.style.top = '20px';
        span.style.fontSize = '14px';
      });
    }
  });
  return (
    <div className={styles['staking-plan-page-cards-container']}>
      {props.cards.map((item, index) => {
        return (
          <div className={styles['staking-plan-page-card']} key={index}>
            <div className={styles['staking-plan-page-card-header']}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div>
                <Image src={item.badgeIcon} alt={item.title} style={{ scale: item.scaleImage.toString() }} />
              </div>
            </div>
            {/* */}
            <div className={styles['staking-plan-page-card-body']}>
              {/* start infos */}
              <div>
                <div>
                  <span>lock time:</span>
                  <span>{item.lockTime}</span>
                </div>
                <div>
                  <span>TVL:</span>
                  <span>{item.TVL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
                </div>
                <div>
                  <span>APY:</span>
                  <span>{item.APY}%</span>
                </div>
                <div>
                  <span>Expiration:</span>
                  <span>{item.Expiration}</span>
                </div>
              </div>
              {/* end infos */}
              {/* input container */}
              <div className={styles['input-container']}>
                <input
                  className="custom-input"
                  type="text"
                  id={`input-element-${index}`}
                  onKeyDown={(event) => {
                    if (event.key !== 'Backspace') event.preventDefault();
                    if (Number.isNaN(+event.key) && event.key !== 'Backspace') return;
                    setTimeout(() => {
                      const data = (event.target as HTMLInputElement).value.split(',').join('');
                      (event.target as HTMLInputElement).value = data
                        .concat(event.key !== 'Backspace' && data.length < 15 ? event.key : '')
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    }, 10);
                  }}
                />
                <span ref={spanElement} id={`span-element-${index}`} className="custom-input-span">
                  Amount
                </span>
                <p>After 6 months: 120,000</p>
              </div>
              {/* gradient slider */}
              <div className={styles['slider-container']}>
                <span>MIN</span>
                <GradientSlider min={0} max={10000000}></GradientSlider>
                <span>MAX</span>
              </div>
              <div style={{}} className={styles['bottom-controllers']}>
                {/*<div>*/}
                <Link href={'/'}>
                  <h5>Details</h5>
                </Link>
                {/*</div>*/}
                <button>stake</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StakingPlanCards;
