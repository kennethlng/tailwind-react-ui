import { render } from '@testing-library/react';
import Typography from '../components/Typography';
import { FontWeightVariant } from '../types/typography';

describe('Typography', () => {
  test('renders the children', () => {
    const { getByText } = render(<Typography>Hello</Typography>);
    expect(getByText(/hello/i)).toBeInTheDocument();
  });

  test('defaults to body1 when no variant is specified', () => {
    const { getByText } = render(<Typography>Hello</Typography>);
    expect(getByText(/hello/i)).toHaveClass(
      'text-font-size-body-1 font-font-weight-body-1 leading-line-height-body-1 tracking-letter-spacing-body-1',
    );
  });

  describe('when the bold prop is set to true for a given variant', () => {
    test('body1 variant is bolded', () => {
      const { getByText } = render(
        <Typography variant="body1" bold>
          Hello
        </Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass('font-font-weight-body-1-bold');
      expect(getByText(/hello/i)).not.toHaveClass('font-font-weight-body-1');
    });

    test('body2 variant is bolded', () => {
      const { getByText } = render(
        <Typography variant="body2" bold>
          Hello
        </Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass('font-font-weight-body-2-bold');
      expect(getByText(/hello/i)).not.toHaveClass('font-font-weight-body-2');
    });

    test('body3 variant is bolded', () => {
      const { getByText } = render(
        <Typography variant="body3" bold>
          Hello
        </Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass('font-font-weight-body-3-bold');
      expect(getByText(/hello/i)).not.toHaveClass('font-font-weight-body-3');
    });

    test('subtitle variant is bolded', () => {
      const { getByText } = render(
        <Typography variant="subtitle" bold>
          Hello
        </Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass('font-font-weight-subtitle-bold');
      expect(getByText(/hello/i)).not.toHaveClass('font-font-weight-subtitle');
    });

    test('h5 variant is not bolded', () => {
      const { getByText } = render(
        <Typography variant="h5" bold>
          Hello
        </Typography>,
      );
      expect(getByText(/hello/i)).not.toHaveClass(
        'font-font-weight-title-h-5-bold',
      );
    });
  });

  describe('when the color prop is set', () => {
    test('the color is primary', () => {
      const { getByText } = render(
        <Typography color="primary">Hello</Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass(
        'text-colors-text-primary-default',
      );
    });

    test('the color is secondary', () => {
      const { getByText } = render(
        <Typography color="secondary">Hello</Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass(
        'text-colors-text-secondary-default',
      );
    });

    test('the color is tertiary', () => {
      const { getByText } = render(
        <Typography color="tertiary">Hello</Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass(
        'text-colors-text-tertiary-default',
      );
    });

    test('the color is error', () => {
      const { getByText } = render(
        <Typography color="error">Hello</Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass(
        'text-colors-semantic-error-dark',
      );
    });

    test('the color is info', () => {
      const { getByText } = render(<Typography color="info">Hello</Typography>);
      expect(getByText(/hello/i)).toHaveClass('text-colors-semantic-info-dark');
    });

    test('the color is success', () => {
      const { getByText } = render(
        <Typography color="success">Hello</Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass(
        'text-colors-semantic-success-dark',
      );
    });

    test('the color is warning', () => {
      const { getByText } = render(
        <Typography color="warning">Hello</Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass(
        'text-colors-semantic-warning-dark',
      );
    });

    test('the opacity is disabled when disabled is true', () => {
      const { getByText } = render(<Typography disabled>Hello</Typography>);
      expect(getByText(/hello/i)).toHaveClass('opacity-opacity-disabled');
    });

    test('renders as a p element by default', () => {
      const { getByText } = render(<Typography>Hello</Typography>);

      expect(getByText(/hello/i).nodeName).toEqual('P');
    });

    test('renders as a h5 element when variant is "h5"', () => {
      const { getByText } = render(<Typography variant="h5">Hello</Typography>);

      expect(getByText(/hello/i).nodeName).toEqual('H5');
    });

    test('renders as a span element when variant is "caption"', () => {
      const { getByText } = render(
        <Typography variant="caption">Hello</Typography>,
      );

      expect(getByText(/hello/i).nodeName).toEqual('SPAN');
    });

    test('has the truncate class when truncate is true', () => {
      const { getByText } = render(<Typography truncate>Hello</Typography>);
      expect(getByText(/hello/i)).toHaveClass('truncate');
    });

    test('has the text-left class when align is left', () => {
      const { getByText } = render(<Typography align="left">Hello</Typography>);
      expect(getByText(/hello/i)).toHaveClass('text-left');
    });

    test('has the whitespace-normal class when whitespace is normal', () => {
      const { getByText } = render(
        <Typography whitespace="normal">Hello</Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass('whitespace-normal');
    });
  });

  describe('when given a custom class', () => {
    test('has upper margin when given mt-2', () => {
      const { getByText } = render(
        <Typography className="mt-2">Hello</Typography>,
      );
      expect(getByText(/hello/i)).toHaveClass('mt-2');
    });
  });
});

describe('FontWeightVariant', () => {
  test('returns regular class when not bold', () => {
    expect(FontWeightVariant('body1', false)).toBe('font-font-weight-body-1');
  });

  test('returns bold class when bold and bold override exists', () => {
    expect(FontWeightVariant('body1', true)).toBe(
      'font-font-weight-body-1-bold',
    );
  });

  test('returns regular class when bold and bold override does not exists', () => {
    expect(FontWeightVariant('caption', true)).toBe('font-font-weight-caption');
  });
});
