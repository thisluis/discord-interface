import React from 'react';

import { Container, Role, User, Avatar } from './style';

interface UserProps {
    nickname: String;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>

            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return(
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Luís Felipe" />
            <UserRow nickname="Guilherme Rodz" />



            <Role>Offline - 18</Role>
            <UserRow nickname="Diego Fernandes" isBot />
        </Container>
    )
};

export default UserList;