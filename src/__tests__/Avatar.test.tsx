import { render, waitFor } from '@testing-library/react';
import Avatar from '../components/Avatar';
import { Colors } from '../types/avatar';
import { Sizes, Variants } from '../types/bubble';

describe('Avatar', () => {
  const imageSrc = '/foo/bar/baz';
  const alt = 'Usopp';

  test('defaults size to 40px when not given a size', () => {
    const { getByAltText } = render(<Avatar imageSrc={imageSrc} alt={alt} />);
    const headshot = getByAltText(/usopp/i);
    expect(headshot.parentElement).toHaveClass(Sizes.px40);
  });

  test('defaults variant to circle when no variant is given', () => {
    const { getByAltText } = render(<Avatar imageSrc={imageSrc} alt={alt} />);
    const headshot = getByAltText(/usopp/i);
    expect(headshot.parentElement).toHaveClass(Variants.circle);
  });

  test('displays avatar with rounded class when variant is provided as "rounded"', () => {
    const { getByAltText } = render(
      <Avatar imageSrc={imageSrc} alt={alt} variant="rounded" />,
    );
    const headshot = getByAltText(/usopp/i);
    expect(headshot.parentElement).toHaveClass(Variants.rounded);
  });

  test('has a border when the border prop is set to true', () => {
    const { getByText } = render(<Avatar border>NP</Avatar>);
    expect(getByText(/np/i)).toHaveClass(
      'border-border-width-base-0.7 border-colors-border-light-default',
    );
  });

  test('has a shadow when the shadow prop is set to true', () => {
    const { getByText } = render(<Avatar shadow>NP</Avatar>);
    expect(getByText(/np/i)).toHaveClass('shadow-box-shadow-medium-shadow');
  });

  test('has custom classes when the className prop is given a value', () => {
    const { getByText } = render(<Avatar className="bg-red-500">NP</Avatar>);
    expect(getByText(/np/i)).toHaveClass('bg-red-500');
  });

  describe('when given an imageSrc url and the image successfully loads', () => {
    test('displays the image', () => {
      const { getByAltText } = render(<Avatar imageSrc={imageSrc} alt={alt} />);
      const image = getByAltText(alt) as HTMLImageElement;
      expect(image.src).toContain(imageSrc);
    });

    test('the background color is white', () => {
      const { getByAltText } = render(<Avatar imageSrc={imageSrc} alt={alt} />);
      const headshot = getByAltText(/usopp/i);
      expect(headshot.parentElement).toHaveClass('bg-white');
    });

    test('the background color cannot be changed', () => {
      const { getByAltText } = render(
        <Avatar imageSrc={imageSrc} alt={alt} color={4} />,
      );
      const headshot = getByAltText(/usopp/i);
      expect(headshot.parentElement).not.toHaveClass(
        'text-colors-avatar-4-text bg-colors-avatar-4-background',
      );
      expect(headshot.parentElement).toHaveClass('bg-white');
    });
  });

  describe('if an image src is not given or if an image is given but fails to load', () => {
    describe('if no child is given', () => {
      describe('if a value is given to the "alt" prop', () => {
        test('displays the first letter of the "alt"', () => {
          const { getByText } = render(
            <Avatar imageSrc="/broken-image.jpg" alt={alt} />,
          );
          waitFor(() => {
            expect(getByText(alt[0])).toBeInTheDocument();
          });
        });

        test('has a predetermined color based on the "alt" value', () => {
          const { getByText } = render(<Avatar alt={alt} />);
          waitFor(() => {
            expect(getByText(alt[0])).toHaveClass(Colors[8]);
          });
        });
      });

      describe('if a value is given to the "displayName" prop', () => {
        test('displays the first letter of the displayName', () => {
          const { getByText } = render(<Avatar displayName="displayName" />);
          expect(getByText('d')).toBeInTheDocument();
        });
      });
    });

    test('is colored when the color prop is set to 1', () => {
      const { getByText } = render(<Avatar color={1}>NP</Avatar>);
      waitFor(() => {
        expect(getByText(/np/i)).toHaveClass(Colors[1]);
      });
    });

    test('renders nothing if children, imageSrc, and alt are not set', () => {
      const { container } = render(<Avatar />);
      expect(container.firstChild).toBeEmptyDOMElement();
    });
  });
});
