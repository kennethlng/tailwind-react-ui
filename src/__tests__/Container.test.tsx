import { render, screen } from '@testing-library/react';
import Container from '../components/Container';

describe('Container', () => {
  test('renders any given children elements', () => {
    render(<Container>Hello</Container>);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  test('content has a max width of "lg" when the "maxWidth" prop is set to "lg"', () => {
    render(<Container maxWidth="lg">Hello</Container>);
    expect(screen.getByText(/hello/i)).toHaveClass('max-w-lg');
  });
});
