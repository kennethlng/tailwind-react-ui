import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Avatar from '../components/Avatar';
import AvatarGroup from '../components/AvatarGroup';

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

describe('AvatarGroup', () => {
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
      <AvatarGroup>
        {users.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroup>,
    );
    const usopp = getByAltText(/usopp/i);
    const luffy = getByAltText(/luffy/i);

    expect(usopp).toBeInTheDocument();
    expect(luffy).toBeInTheDocument();
  });

  test('displays an info bubble instead of headshot when there are more than 5 users', () => {
    const { getByText } = render(
      <AvatarGroup max={5}>
        {plethoraUsers.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroup>,
    );
    const infoBubble = getByText('+2');

    expect(infoBubble).toBeInTheDocument();
  });

  test('displays an info bubble with a pixel size of 40 when the "size" prop is set to "px40" in the extraProps', () => {
    const { getByText } = render(
      <AvatarGroup max={5} avatarProps={{ size: 'px40' }}>
        {plethoraUsers.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroup>,
    );
    const extraEl = getByText('+2');
    expect(extraEl).toHaveClass('h-spacing-base-40 w-spacing-base-40');
  });

  test('displays an info bubble with a border when the "border" prop is set to true in the extraProps', () => {
    const { getByText } = render(
      <AvatarGroup max={5} avatarProps={{ border: true }}>
        {plethoraUsers.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroup>,
    );
    const extraEl = getByText('+2');
    expect(extraEl).toHaveClass(
      'border-border-width-base-0.7 border-colors-border-light-default',
    );
  });

  test('displays 2 avatars if there are 2 avatars but the max is set to less than 2', () => {
    const { getByAltText } = render(
      <AvatarGroup max={1}>
        <Avatar imageSrc={users[0].imageSrc} alt={users[0].displayName} />
        <Avatar imageSrc={users[1].imageSrc} alt={users[1].displayName} />
      </AvatarGroup>,
    );
    const luffy = getByAltText(/luffy/i);
    expect(luffy).toBeInTheDocument();
  });

  test('displays a tooltip when a value is provided for the extraTooltip prop', async () => {
    const { getByText, findByText } = render(
      <AvatarGroup max={5} extraTooltip="Hello">
        {plethoraUsers.map((user) => (
          <Avatar
            key={user.id}
            alt={user.displayName}
            imageSrc={user.imageSrc}
          />
        ))}
      </AvatarGroup>,
    );
    const infoBubble = getByText('+2');
    userEvent.hover(infoBubble);
    expect(await findByText(/hello/i)).toBeInTheDocument();
  });
});
