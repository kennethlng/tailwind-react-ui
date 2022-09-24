import { render, screen } from '@testing-library/react';
import MicrosoftSignInButton from '../components/MicrosoftSignInButton';

describe('GoogleSignInButton', () => {
  test('renders the dark signin image by default', () => {
    render(<MicrosoftSignInButton />);

    expect(screen.getByAltText('microsoft_signin_dark')).toBeInTheDocument();
  });

  test('renders the light signin image when color is set to "light"', () => {
    render(<MicrosoftSignInButton color="light" />);

    expect(screen.getByAltText('microsoft_signin_light')).toBeInTheDocument();
  });
});
