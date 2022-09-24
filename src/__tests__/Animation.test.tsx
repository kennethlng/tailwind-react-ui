import { render } from '@testing-library/react';
import Animation from '../components/Animation';
import {
  sizes as PulsingCircleSizes,
  colors as PulsingCircleColors,
} from '../components/Animation/types/pulsingCircle';
import {
  circleSizes as progressCircleSizes,
  animationVariantMap,
} from '../components/Animation/subComponents/ProgressCircle';
import * as placeholderTypes from '../components/Animation/types/placeholder';

describe('Animation.Placeholder', () => {
  test('defaults color to primary when not specified', () => {
    const { getByTestId } = render(<Animation.Placeholder />);
    const placeholder = getByTestId('animation-placeholder');

    expect(placeholder).toHaveClass(placeholderTypes.colors.primary);
  });

  test('has secondary color class when color is "secondary"', () => {
    const { getByTestId } = render(<Animation.Placeholder color="secondary" />);
    const placeholder = getByTestId('animation-placeholder');

    expect(placeholder).toHaveClass(placeholderTypes.colors.secondary);
  });

  test('has the appropriate height class when height is "12"', () => {
    const { getByTestId } = render(<Animation.Placeholder height="12" />);
    const placeholder = getByTestId('animation-placeholder');

    expect(placeholder).toHaveClass(placeholderTypes.heightSizes[12]);
  });

  test('has the appropriate width class when width is "12"', () => {
    const { getByTestId } = render(<Animation.Placeholder width="12" />);
    const placeholder = getByTestId('animation-placeholder');

    expect(placeholder).toHaveClass(placeholderTypes.widthSizes[12]);
  });

  test('has the circle class when variant is "circle"', () => {
    const { getByTestId } = render(<Animation.Placeholder variant="circle" />);
    const placeholder = getByTestId('animation-placeholder');

    expect(placeholder).toHaveClass(placeholderTypes.variants.circle);
  });
});

describe('Animation.ProgressCircle', () => {
  test('defaults size to medium when not given a size', () => {
    const { getByTestId } = render(<Animation.ProgressCircle />);
    const progressCircle = getByTestId('animation-progress-circle');

    expect(progressCircle).toHaveClass(progressCircleSizes.md);
  });

  test('has small size class when size is "sm"', () => {
    const { getByTestId } = render(<Animation.ProgressCircle size="sm" />);
    const progressCircle = getByTestId('animation-progress-circle');

    expect(progressCircle).toHaveClass(progressCircleSizes.sm);
  });

  test('has the indeterminate class when variant is "indeterminate', () => {
    const { getByTestId } = render(
      <Animation.ProgressCircle variant="indeterminate" />,
    );
    const progressCircle = getByTestId('animation-progress-circle');

    expect(progressCircle.firstChild?.firstChild).toHaveClass(
      animationVariantMap.base.indeterminate,
    );
  });
});

describe('Animation.PulsingCircle', () => {
  test('defaults size to medium when not given a size', () => {
    const { getByTestId } = render(<Animation.PulsingCircle />);
    const loadingAnimation = getByTestId('animation-pulsing-circle');

    expect(loadingAnimation).toHaveClass(PulsingCircleSizes.md);
  });

  test('has small size class when size is "sm"', () => {
    const { getByTestId } = render(<Animation.PulsingCircle size="sm" />);
    const loadingAnimation = getByTestId('animation-pulsing-circle');

    expect(loadingAnimation).toHaveClass(PulsingCircleSizes.sm);
  });

  test('defaults color to primary when not given a color', () => {
    const { getByTestId } = render(<Animation.PulsingCircle />);

    const startCircle = getByTestId('animation-pulsing-circle-start');
    const midCircle = getByTestId('animation-pulsing-circle-mid');
    const endCircle = getByTestId('animation-pulsing-circle-end');

    expect(startCircle).toHaveClass(PulsingCircleColors.primary.start);
    expect(midCircle).toHaveClass(PulsingCircleColors.primary.mid);
    expect(endCircle).toHaveClass(PulsingCircleColors.primary.end);
  });

  test('has secondary colors when color is "secondary"', () => {
    const { getByTestId } = render(
      <Animation.PulsingCircle color="secondary" />,
    );

    const startCircle = getByTestId('animation-pulsing-circle-start');
    const midCircle = getByTestId('animation-pulsing-circle-mid');
    const endCircle = getByTestId('animation-pulsing-circle-end');

    expect(startCircle).toHaveClass(PulsingCircleColors.secondary.start);
    expect(midCircle).toHaveClass(PulsingCircleColors.secondary.mid);
    expect(endCircle).toHaveClass(PulsingCircleColors.secondary.end);
  });
});
