import styles from '../../../styles/dashboard/gradientSlider.module.scss';
import { useEffect, useRef, useState } from 'react';

const GradientSlider = (props: { min: number; max: number; defaultValue?: number }) => {
  const [value, setValue] = useState(props.defaultValue ?? 0);
  useEffect(() => {
    (output.current! as HTMLParagraphElement).style.left = `${(value / (props.max - props.min)) * 0.85 * 362 - 5}px`;
  });
  useEffect(() => {
    (output.current! as HTMLParagraphElement).style.left = `${(value / (props.max - props.min)) * 0.85 * 362 - 5}px`;
  }, [value]);
  const output = useRef(null);
  return (
    <div style={{ position: 'relative' }}>
      <input
        id="rangeInput"
        name="rangeInput"
        type="range"
        className={styles['gradient-slider']}
        min={props.min}
        max={props.max}
        step={1}
        value={value}
        onChange={(val) => {
          setValue(+val.target.value);
        }}
      />
      <p ref={output} className={styles['slider-tooltip']}>
        {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
    </div>
  );
};

export default GradientSlider;
