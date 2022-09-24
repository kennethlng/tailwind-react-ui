import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Avatar from '../components/Avatar';
import AvatarGroupGrid from '../components/AvatarGroupGrid';

const plethoraUsers = [
  {
    id: '1',
    imageSrc: 'path/to/otherSrc',
    displayName: 'Luffy',
  },
  {
    id: '2',
    imageSrc: 'path/to/otherSrc',
    displayName: 'Zolo',
  },
  {
    id: '3',
    imageSrc: 'path/to/otherSrc',
    displayName: 'Nami',
  },
  {
    id: '4',
    imageSrc: 'path/to/src',
    displayName: 'Usopp',
  },
  {
    id: '5',
    imageSrc: 'path/to/src',
    displayName: 'Sanji',
  },
  {
    id: '6',
    imageSrc: 'path/to/src',
    displayName: 'Chopper',
  },
];

describe('AvatarGroupGrid', () => {
  const users = [
    {
      id: '1',
      imageSrc: 'path/to/otherSrc',
      displayName: 'Luffy',
    },
    {
      id: '2',
      imageSrc: 'path/to/src',
      displayName: 'Usopp',
    },
  ];

  test('displays a headshot for each current user in channel', () => {
    const { getByAltText } = render(
      <AvatarGroupGrid>
        {users.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const usopp = getByAltText(/usopp/i);
    const luffy = getByAltText(/luffy/i);

    expect(usopp).toBeInTheDocument();
    expect(luffy).toBeInTheDocument();
  });

  test('displays an info bubble instead of headshot when there are more than 5 users', () => {
    const { getByText } = render(
      <AvatarGroupGrid max={5}>
        {plethoraUsers.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const infoBubble = getByText('+2');

    expect(infoBubble).toBeInTheDocument();
  });

  test('displays 2 avatars if there are 2 avatars but the max is set to less than 2', () => {
    const { getByAltText } = render(
      <AvatarGroupGrid max={1}>
        <Avatar imageSrc={users[0].imageSrc} alt={users[0].displayName} />
        <Avatar imageSrc={users[1].imageSrc} alt={users[1].displayName} />
      </AvatarGroupGrid>,
    );
    const luffy = getByAltText(/luffy/i);
    expect(luffy).toBeInTheDocument();
  });

  test('displays a tooltip when a value is provided for the extraTooltip prop', async () => {
    const { getByText, findByText } = render(
      <AvatarGroupGrid max={5} extraTooltip="Hello">
        {plethoraUsers.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const infoBubble = getByText('+2');
    userEvent.hover(infoBubble);
    expect(await findByText(/hello/i)).toBeInTheDocument();
  });

  test('displays the children in 3 columns when the cols prop is given a value of 3', () => {
    const { getByRole } = render(
      <AvatarGroupGrid cols={3}>
        {users.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const gridEl = getByRole('list');
    expect(gridEl).toHaveClass('grid-cols-3');
  });

  test('displays the children on a row-by-row basis when the direction prop is set to "row"', () => {
    const { getByRole } = render(
      <AvatarGroupGrid direction="row">
        {users.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const gridEl = getByRole('list');
    expect(gridEl).toHaveClass('grid-flow-row');
  });

  test('is spaced when a gap is provided', () => {
    const { getByRole } = render(
      <AvatarGroupGrid gap={4}>
        {users.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const gridEl = getByRole('list');
    expect(gridEl).toHaveClass('gap-4');
  });

  test('items are stretched to fit the columsn when the justifyItems prop is set to "stretch"', () => {
    const { getByRole } = render(
      <AvatarGroupGrid justifyItems="stretch">
        {users.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const gridEl = getByRole('list');
    expect(gridEl).toHaveClass('justify-items-stretch');
  });

  test('has custom styling when the className prop is given a value', () => {
    const { getByRole } = render(
      <AvatarGroupGrid className="bg-red-500">
        {users.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const gridEl = getByRole('list');
    expect(gridEl).toHaveClass('bg-red-500');
  });

  test('displays an info bubble with a pixel size of 40 when the "size" prop is set to "px40" in the extraProps', () => {
    const { getByText } = render(
      <AvatarGroupGrid max={5} avatarProps={{ size: 'px40' }}>
        {plethoraUsers.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const extraEl = getByText('+2');
    expect(extraEl).toHaveClass('h-spacing-base-40 w-spacing-base-40');
  });

  test('displays an info bubble with a border when the "border" prop is set to true in the extraProps', () => {
    const { getByText } = render(
      <AvatarGroupGrid max={5} avatarProps={{ border: true }}>
        {plethoraUsers.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroupGrid>,
    );
    const extraEl = getByText('+2');
    expect(extraEl).toHaveClass(
      'border-border-width-base-0.7 border-colors-border-light-default',
    );
  });
});
