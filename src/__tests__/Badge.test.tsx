import { render } from '@testing-library/react';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';

describe('Badge', () => {
  test('defaults to top right position when not given a position prop', () => {
    const { getByText } = render(
      <Badge content="Hello">
        <Avatar />
      </Badge>,
    );
    expect(getByText(/hello/i)).toHaveClass('top-0 right-0');
  });

  test('content cannot be seen when the invisible prop is set to true', () => {
    const { getByText } = render(
      <Badge content="Hello" invisible>
        <Avatar />
      </Badge>,
    );
    expect(getByText(/hello/i)).toHaveClass('invisible');
  });

  describe('when the position prop is set', () => {
    test('is correctly positioned on the top left side', () => {
      const { getByText } = render(
        <Badge
          content="Hello"
          position={{ vertical: 'top', horizontal: 'left' }}
        >
          <Avatar />
        </Badge>,
      );
      expect(getByText(/hello/i)).toHaveClass('top-0 left-0');
    });

    test('is correctly positioned on the bottom left side', () => {
      const { getByText } = render(
        <Badge
          content="Hello"
          position={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Avatar />
        </Badge>,
      );
      expect(getByText(/hello/i)).toHaveClass('bottom-0 left-0');
    });

    test('is correctly positioned on the bottom right side', () => {
      const { getByText } = render(
        <Badge
          content="Hello"
          position={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Avatar />
        </Badge>,
      );
      expect(getByText(/hello/i)).toHaveClass('bottom-0 right-0');
    });

    test('has extra margin when given a custom className for the badge', () => {
      const { getByText } = render(
        <Badge
          content="Hello"
          position={{ vertical: 'bottom', horizontal: 'right' }}
          badgeClassName="mr-2"
        >
          <Avatar />
        </Badge>,
      );
      expect(getByText(/hello/i)).toHaveClass('mr-2');
    });
  });
});
