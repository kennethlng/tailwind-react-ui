import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button';
import { classNames } from '../utils/tailwind';

describe('Button', () => {
  test('defaults variant to square and color to primary when no variant or color prop is given', () => {
    const { getByText } = render(<Button>Hello</Button>);
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass(
      classNames(
        'bg-colors-button-primary-default-background',
        'text-colors-button-primary-default-text',
      ),
    );
  });

  test('is disabled when the disabled prop is set to true', () => {
    const { getByText } = render(<Button disabled>Hello</Button>);
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toBeDisabled();
  });

  test('calls given onClick when pressed', async () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Hello</Button>);
    const buttonElement = getByRole('button');

    userEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });

  test('has class w-full when width is "full"', async () => {
    const { getByRole } = render(<Button width="full">Hello</Button>);
    const buttonElement = getByRole('button');

    userEvent.click(buttonElement);

    expect(buttonElement).toHaveClass('w-full');
  });

  describe('is correctly sized', () => {
    test('when size is set to "small"', () => {
      const { getByText } = render(<Button size="small">Hello</Button>);
      const buttonEl = getByText(/Hello/);
      expect(buttonEl).toHaveClass(
        'text-font-size-button-mini',
        'font-font-weight-button-mini',
        'leading-line-height-button-mini',
        'tracking-letter-spacing-button-mini',
      );
    });

    test('when size is set to "medium"', () => {
      const { getByText } = render(<Button size="medium">Hello</Button>);
      const buttonEl = getByText(/Hello/);
      expect(buttonEl).toHaveClass(
        'text-font-size-button',
        'font-font-weight-button',
        'leading-line-height-button',
        'tracking-letter-spacing-button',
      );
    });

    test('when size is set to "large"', () => {
      const { getByText } = render(<Button size="large">Hello</Button>);
      const buttonEl = getByText(/Hello/);
      expect(buttonEl).toHaveClass(
        'text-font-size-button-large',
        'font-font-weight-button-large',
        'leading-line-height-button-large',
        'tracking-letter-spacing-button-large',
      );
    });
  });

  test('is styled correctly when given a "text" variant and "secondary" color', () => {
    const { getByText } = render(
      <Button variant="text" color="secondary">
        Hello
      </Button>,
    );
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass('text-colors-text-secondary-default');
  });

  test('is styled correctly when given a "text" variant and "secondary" color', () => {
    const { getByText } = render(
      <Button variant="text" color="tertiary">
        Hello
      </Button>,
    );
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass('text-colors-text-tertiary-default');
  });

  test('is styled correctly when given a "text" variant and "error" color', () => {
    const { getByText } = render(
      <Button variant="text" color="error">
        Hello
      </Button>,
    );
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass('text-colors-semantic-error-dark');
  });

  test('is styled correctly when given a "outlined" variant and "primary" color', () => {
    const { getByText } = render(
      <Button variant="outlined" color="primary">
        Hello
      </Button>,
    );
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass(
      'text-colors-button-text-rounded-primary-default',
      'hover:text-colors-button-text-rounded-primary-hover',
      'active:text-colors-button-text-rounded-primary-active',
      'bg-colors-button-background-rounded-primary-default',
      'hover:bg-colors-button-background-rounded-primary-hover',
      'active:bg-colors-button-background-rounded-primary-active',
      'border-colors-button-border-rounded-primary-default',
      'hover:border-colors-button-border-rounded-primary-hover',
      'active:border-colors-button-border-rounded-primary-active',
    );
  });

  test('is styled correctly when given a "bubble" variant and "primary" color', () => {
    const { getByText } = render(
      <Button variant="bubble" color="primary">
        Hello
      </Button>,
    );
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass(
      'bg-clip-text text-transparent bg-gradient-to-r from-[#FF8763] to-[#9AA2CE]',
    );
  });

  test('is styled correctly when given a "bubble" variant and "secondary" color', () => {
    const { getByText } = render(
      <Button variant="bubble" color="secondary">
        Hello
      </Button>,
    );
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass('text-colors-text-tertiary-default');
  });

  test('displays a gradient text when the color is "tertiary" and size is "small" or "medium"', () => {
    const { getByText } = render(
      <Button variant="filled" color="tertiary" size="small">
        Hello
      </Button>,
    );
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass(
      'bg-clip-text text-transparent bg-gradient-to-r from-[#FF8763] to-[#9AA2CE]',
    );
  });

  test('displays a regular black text when the color is "tertiary" and size is "large"', () => {
    const { getByText } = render(
      <Button variant="filled" color="tertiary" size="large">
        Hello
      </Button>,
    );
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass('text-colors-button-tertiary-default-text');
  });

  test('is styled correctly when given a "text" variant and "primary" color', () => {
    const { getByText } = render(
      <Button variant="text" color="primary">
        Hello
      </Button>,
    );
    const buttonEl = getByText(/Hello/);
    expect(buttonEl).toHaveClass('text-colors-text-primary-default');
  });
});
