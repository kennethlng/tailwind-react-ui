import { render, screen } from '@testing-library/react';
import Link from '../components/Link';

describe('Link', () => {
  test('renders any given children elements', () => {
    render(<Link href="https://google.com">Hello</Link>);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  test('has an href', () => {
    render(<Link href="https://google.com">Hello</Link>);
    expect(screen.getByText(/hello/i)).toHaveAttribute(
      'href',
      'https://google.com',
    );
  });

  test('is styled correctly when given a variant', () => {
    render(
      <Link href="https://google.com" variant="body1">
        Hello
      </Link>,
    );
    expect(screen.getByText(/hello/i)).toHaveClass('text-font-size-body-1');
  });
});
