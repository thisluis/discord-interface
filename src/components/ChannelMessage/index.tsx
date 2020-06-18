import React from 'react';

import { Container, Avatar, Message, Header, Content } from './style';
export { Mention } from './style';
export interface Props {
    author: String;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMention?: boolean;
    isBot?: boolean;
    isMod?: boolean;
}
const ServerName: React.FC<Props> = ({
    author,
    date,
    content,
    hasMention,
    isBot,
    isMod,
}) => {
    return(
        <Container className={hasMention?  'mention' : ''}>
            <Avatar className={isBot ? 'bot' :  'mod' } />
            <Message>
                <Header>
                    <strong>{author}</strong>

                    {isBot && <span>Bot</span>}
                    {isMod && <label>Mod</label>}

                    <time>{date}</time>
                </Header>
                <Content>{content}</Content>
            </Message>    
        </Container>
    )
};

export default ServerName;