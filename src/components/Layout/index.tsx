import React from 'react';

import { Grid } from './style';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import  UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {
    return <Grid>
        <ServerList />
        <ServerName />
        <ChannelInfo />
        <ChannelList />
        <ChannelData/>
        <UserInfo />
        <UserList />
    </Grid>
};

export default Layout;