import React from 'react';

import { Container, HashTagIcon, Title, Separator, Description} from './style';



const ChannelInfo: React.FC = () => {
    return(
        <Container>
           <HashTagIcon />

           <Title>chat-livre</Title>

           <Separator></Separator>

           <Description>Canal aberto para conversas</Description>
        </Container>
    )
};

export default ChannelInfo;