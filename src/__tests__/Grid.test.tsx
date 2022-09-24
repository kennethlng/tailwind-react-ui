import { render } from '@testing-library/react';
import Grid from '../components/Grid';

describe('Grid', () => {
  const items = ['George', 'Bob', 'Spiderman'];

  test('renders any given children elements', () => {
    const { getAllByRole } = render(
      <Grid>
        {items.map((item) => (
          <button type="button" key={item}>
            {item}
          </button>
        ))}
      </Grid>,
    );

    const elements = getAllByRole('button');
    expect(elements.length).toEqual(items.length);
  });

  test('renders 6 columns when a cols prop of 6 is given', () => {
    const { getByText } = render(<Grid cols={6}>Hello</Grid>);
    expect(getByText(/hello/i)).toHaveClass('grid-cols-6');
  });

  test('renders 6 rows when a rows prop of 6 is given', () => {
    const { getByText } = render(<Grid rows={6}>Hello</Grid>);
    expect(getByText(/hello/i)).toHaveClass('grid-rows-6');
  });

  test('justifies text center when justifyItems is set to "center"', () => {
    const { getByText } = render(<Grid justifyItems="center">Hello</Grid>);
    expect(getByText(/hello/i)).toHaveClass('justify-items-center');
  });

  test('applied the grid-flow-col class when direction is set to "col"', () => {
    const { getByText } = render(<Grid direction="col">Hello</Grid>);
    expect(getByText(/hello/i)).toHaveClass('grid-flow-col');
  });

  test('applied the gap-x-1 class when gap-x is set to "1"', () => {
    const { getByText } = render(<Grid gapX={1}>Hello</Grid>);
    expect(getByText(/hello/i)).toHaveClass('gap-x-1');
  });

  test('applied the gap-y-1 class when gap-y-1 is set to "1"', () => {
    const { getByText } = render(<Grid gapY={1}>Hello</Grid>);
    expect(getByText(/hello/i)).toHaveClass('gap-y-1');
  });

  test('applies the size column classes when size arguments are defined', () => {
    const { getByText } = render(
      <Grid xs={1} sm={2} md={2} lg={2} xl={2} xxl={2}>
        Hello
      </Grid>,
    );
    expect(getByText(/hello/i)).toHaveClass(
      'xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2',
    );
  });

  test('has custom styling when the className prop is given a value', () => {
    const { getByText } = render(<Grid className="bg-red-500">Hello</Grid>);
    expect(getByText(/hello/i)).toHaveClass('bg-red-500');
  });
});

describe('GridItem', () => {
  test('spans 3 columns', () => {
    const { getByText } = render(<Grid.Item colSpan={3}>Hello</Grid.Item>);
    expect(getByText(/hello/i)).toHaveClass('col-span-3');
  });

  test('spans 3 rows', () => {
    const { getByText } = render(<Grid.Item rowSpan={3}>Hello</Grid.Item>);
    expect(getByText(/hello/i)).toHaveClass('row-span-3');
  });

  test('has custom styling applied', () => {
    const { getByText } = render(
      <Grid.Item className="bg-red-500">Hello</Grid.Item>,
    );
    expect(getByText(/hello/i)).toHaveClass('bg-red-500');
  });
});
