import React from 'react';

import { Container, Avatar, UserData, Profile, Icons, MicIcon, HeadphoneIcon, SettingsIcon} from './style';


const UserInfo: React.FC = () => {
    return(
        <Container>
          <Profile>
          <Avatar />
          <UserData>
            <strong>Luís Felipe</strong>
            <span>#5467</span>
          </UserData>
          </Profile>

          <Icons>
            <MicIcon/>
            <HeadphoneIcon/>
            <SettingsIcon/>
          </Icons>
        </Container>
    )
};

export default UserInfo;

