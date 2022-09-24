import React from 'react';
import darkBtn from './ms-symbollockup_signin_dark.png';
import lightBtn from './ms-symbollockup_signin_light.png';

export type IMicrosoftSignInButtonProps = {
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: 'dark' | 'light';
};

const MicrosoftSignInButton = React.forwardRef<
  HTMLButtonElement,
  IMicrosoftSignInButtonProps
>((props: IMicrosoftSignInButtonProps, ref) => {
  const { disabled, onClick, color = 'dark' } = props;

  return (
    <button type="button" ref={ref} onClick={onClick} disabled={disabled}>
      <img
        src={color === 'dark' ? darkBtn : lightBtn}
        alt={
          color === 'dark' ? 'microsoft_signin_dark' : 'microsoft_signin_light'
        }
      />
    </button>
  );
});

export default MicrosoftSignInButton;
