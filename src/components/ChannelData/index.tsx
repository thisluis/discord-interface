import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './style';
import ChannelMessage, { Mention } from '../ChannelMessage';
const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]); 
    return(
        <Container>
           <Messages>
           <ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                />
                <ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                /><ChannelMessage 
                author="Luís Felipe"
                date="25/04/2020"
                content="Pão com mortadela" 
                />

                <ChannelMessage 
                author="Guilherme Rodz"
                date="21/04/2020"
                content={
                    <>
                        <Mention>@Luís</Mention>, se floodar dnv eu vou te banir.
                    </>
                }
    
                hasMention
                isMod
                />
                <ChannelMessage 
                author="Diego Fernandes"
                date="21/04/2020"
                content={
                    <>
                        <Mention>@Luís</Mention>, vou te dar um estágio na Rocket blz?
                    </>
                }
    
                hasMention
                isBot
                />

            </Messages>

           <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre" />
            <InputIcon />
           </InputWrapper>
        </Container>
    )
};

export default ChannelData;