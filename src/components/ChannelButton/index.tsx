import React from 'react';

import { Container, HashtagIcon, InviteIcon, SettingIcon } from './style';

export interface Props {
    channelName: String;
    selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
    channelName,
    selected
}) => {
    return (
    
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashtagIcon />
                <span>{channelName}</span>
            </div> 

            <div>
                <InviteIcon />
                <SettingIcon />
            </div>     
        </Container>
    )
};

export default ChannelButton;