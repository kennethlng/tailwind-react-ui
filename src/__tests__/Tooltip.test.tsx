import { BasePlacement } from '@popperjs/core';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tooltip, { getArrowOffsetClass } from '../components/Tooltip';

describe('Tooltip', () => {
  test('tooltip is shown when hovered', () => {
    render(
      <Tooltip text="Hello">
        <button type="button">Click</button>
      </Tooltip>,
    );

    const childEl = screen.getByText(/click/i);
    userEvent.hover(childEl);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  test('tooltip is hidden when unhovered', async () => {
    render(
      <Tooltip text="Hello">
        <button type="button">Click</button>
      </Tooltip>,
    );

    const childEl = screen.getByText(/click/i);
    userEvent.hover(childEl);
    userEvent.unhover(childEl);
    expect(await screen.queryByText(/hello/i)).not.toBeInTheDocument();
  });

  test('renders a tooltip when given a text string', () => {
    render(
      <Tooltip text="Hello">
        <button type="button">Click</button>
      </Tooltip>,
    );

    const childEl = screen.getByText(/click/i);
    userEvent.hover(childEl);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  test('renders nothing when given a empty text string', async () => {
    render(
      <Tooltip text="">
        <button type="button">Click</button>
      </Tooltip>,
    );

    const childEl = screen.getByText(/click/i);
    userEvent.hover(childEl);
    expect(await screen.queryByText(/hello/i)).not.toBeInTheDocument();
  });

  test('renders nothing when no value is provided to the "text" prop', async () => {
    render(
      <Tooltip>
        <button type="button">Click</button>
      </Tooltip>,
    );

    const childEl = screen.getByText(/click/i);
    userEvent.hover(childEl);
    expect(await screen.queryByText(/hello/i)).not.toBeInTheDocument();
  });

  test('is correctly positioned to the right when placement prop is set to "right"', () => {
    render(
      <Tooltip text="Hello" placement="right">
        <button type="button">Click</button>
      </Tooltip>,
    );

    const childEl = screen.getByText(/click/i);
    userEvent.hover(childEl);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  test('the arrow is offset when placement prop is "top"', () => {
    expect(getArrowOffsetClass('top')).toBe('-bottom-spacing-base-4');
  });

  test('the arrow is offset when placement prop is "bottom"', () => {
    expect(getArrowOffsetClass('bottom')).toBe('-top-spacing-base-4');
  });

  test('the arrow is offset when placement prop is "left"', () => {
    expect(getArrowOffsetClass('left')).toBe('-right-spacing-base-4');
  });

  test('the arrow is offset when placement prop is "right"', () => {
    expect(getArrowOffsetClass('right')).toBe('-left-spacing-base-4');
  });

  test('the arrow has no offset when placement prop is "auto"', () => {
    expect(getArrowOffsetClass('auto' as BasePlacement)).toBe('');
  });

  test('has class "z-10" by default', () => {
    render(
      <Tooltip text="Hello" placement="right">
        <button type="button">Click</button>
      </Tooltip>,
    );

    const childEl = screen.getByText(/click/i);
    userEvent.hover(childEl);
    expect(screen.getByRole('tooltip')).toHaveClass('z-10');
  });
});
