import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Layout from '../components/Layout';
import Typography from '../components/Typography';
import IconButton from '../components/IconButton';
import {
  ChatDefaultIcon,
  CodeActiveIcon,
  TextMessageDefaultIcon,
} from '@talkmore-inc/nomadic-icons';
import Button from '../components/Button';
import List from '../components/List';

export default {
  title: 'Components/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const menuItems = [
  { label: 'TextMessage', icon: TextMessageDefaultIcon },
  { label: 'Chat', icon: ChatDefaultIcon },
];

export const Responsive = () => (
  <Layout className="bg-slate-200">
    <Layout.Sidebar
      backdropClassName="bg-slate-100"
      header={({ toggleNav }) => {
        return (
          <div className="flex flex-row justify-between items-center">
            <IconButton onClick={toggleNav}>
              <CodeActiveIcon fontSize={25} />
            </IconButton>
            <Typography bold className="p-2">
              Responsive Logo
            </Typography>
            <div className="pr-4">
              <Button variant="text">Logout</Button>
            </div>
          </div>
        );
      }}
    >
      {({ toggleNav }) => (
        <>
          <Typography bold className="p-2">
            Company Logo
          </Typography>
          <List>
            {menuItems.map((item, index) => (
              <List.Item disablePadding disableGutters key={index}>
                <List.Item.Button onClick={toggleNav}>
                  <List.Item.Icon>
                    <item.icon className="w-5 h-5" />
                  </List.Item.Icon>
                  <Typography>{item.label}</Typography>
                </List.Item.Button>
              </List.Item>
            ))}
          </List>
        </>
      )}
    </Layout.Sidebar>
    <Layout.Content className="bg-slate-400 items-center justify-center">
      Content here
    </Layout.Content>
  </Layout>
);

export const NonResponsive = () => (
  <Layout responsive={false} className="bg-slate-200">
    <Layout.Sidebar>
      <Typography bold className="p-2">
        Company Logo
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <List.Item disablePadding disableGutters key={index}>
            <List.Item.Button>
              <List.Item.Icon>
                <item.icon className="w-5 h-5" />
              </List.Item.Icon>
              <Typography>{item.label}</Typography>
            </List.Item.Button>
          </List.Item>
        ))}
      </List>
    </Layout.Sidebar>
    <Layout.Content className="bg-slate-400 items-center justify-center">
      Content here
    </Layout.Content>
  </Layout>
);
