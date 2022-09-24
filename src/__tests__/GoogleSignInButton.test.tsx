import { render, screen, waitFor } from '@testing-library/react';
import GoogleSignInButton from '../components/GoogleSignInButton';
import userEvent from '@testing-library/user-event';

describe('GoogleSignInButton', () => {
  test('renders the normal signin image by default', () => {
    render(<GoogleSignInButton />);

    expect(screen.getByAltText('google_signin_normal')).toBeInTheDocument();
  });

  test('renders the disabled signin image when disabled', () => {
    render(<GoogleSignInButton disabled />);

    expect(screen.getByAltText('google_signin_disabled')).toBeInTheDocument();
  });

  test('renders the pressed signin image when clicked', async () => {
    render(<GoogleSignInButton />);

    const btn = screen.getByAltText('google_signin_normal');
    userEvent.click(btn);

    waitFor(() => {
      expect(screen.getByAltText('google_signin_pressed')).toBeInTheDocument();
    });
  });

  test('renders the focus signin image when focused', async () => {
    render(<GoogleSignInButton />);

    const btn = screen.getByAltText('google_signin_normal');
    btn.focus();

    waitFor(() => {
      expect(screen.getByAltText('google_signin_focus')).toBeInTheDocument();
    });
  });

  test('renders the normal signin image when blurred', async () => {
    render(<GoogleSignInButton />);

    const btn = screen.getByAltText('google_signin_normal');

    userEvent.click(btn);

    userEvent.click(document.body);

    waitFor(() => {
      expect(screen.getByAltText('google_signin_normal')).toBeInTheDocument();
    });
  });
});
