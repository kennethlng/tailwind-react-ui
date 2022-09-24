import React, { useEffect, useState } from 'react';
import darkDisabledBtn from './btn_google_signin_dark_disabled_web@2x.png';
import darkFocusBtn from './btn_google_signin_dark_focus_web@2x.png';
import darkNormalBtn from './btn_google_signin_dark_normal_web@2x.png';
import darkPressedBtn from './btn_google_signin_dark_pressed_web@2x.png';

export type IGoogleSignInButtonProps = {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const GoogleSignInButton = React.forwardRef<
  HTMLButtonElement,
  IGoogleSignInButtonProps
>((props: IGoogleSignInButtonProps, ref) => {
  const { disabled, onClick } = props;
  const [buttonState, setButtonState] =
    useState<'normal' | 'focus' | 'disabled' | 'pressed'>('normal');
  const [src, setSrc] = useState(darkNormalBtn);
  const [alt, setAlt] = useState<
    | 'google_signin_normal'
    | 'google_signin_pressed'
    | 'google_signin_disabled'
    | 'google_signin_focus'
  >('google_signin_normal');

  useEffect(() => {
    if (disabled) {
      setButtonState('disabled');
    } else {
      setButtonState('normal');
    }
  }, [disabled]);

  useEffect(() => {
    if (buttonState === 'disabled') {
      setSrc(darkDisabledBtn);
      setAlt('google_signin_disabled');
    } else if (buttonState === 'focus') {
      setSrc(darkFocusBtn);
      setAlt('google_signin_focus');
    } else if (buttonState === 'pressed') {
      setSrc(darkPressedBtn);
      setAlt('google_signin_pressed');
    } else {
      setSrc(darkNormalBtn);
      setAlt('google_signin_normal');
    }
  }, [buttonState]);

  return (
    <button
      type="button"
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      onFocus={() => setButtonState('focus')}
      onBlur={() => setButtonState('normal')}
      onMouseDown={() => setButtonState('pressed')}
      onMouseUp={() => setButtonState('normal')}
    >
      <img src={src} alt={alt} />
    </button>
  );
});

export default GoogleSignInButton;
