// @flow
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { User } from './../types/User';

const FullCover = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(60,60,60,0.7);
    z-index: 4000;
`;

const Dialog = styled.div`
    width: 400px;
    height: 300px;
    position: absolute;
    left: calc(50% - 200px);
    top: calc(50% - 150px);
    background-color: ${({ dark }) => ( dark ? 'black' : 'white') };
    color: ${({ dark }) => ( !dark ? 'black' : 'white') };
    box-shadow: 17px 17px 30px 0px rgba(0,0,0,0.75);
    border-radius: 4px;
`;

const H1Special = styled.h1`
    text-transform: uppercase;
`;

type Props = {
    history: any, 
    user: User, 
}

const ShowImage = ({ history, user }: Props) => {
    
    const onClickGoBack = () => {
        history.goBack();
    };
    return (
        <FullCover onClick={onClickGoBack} >
            <Dialog>
                 {
                    user ? (
                        [<H1Special key={1}>Cliente: {user.title}</H1Special>,
                        <img key={2} src={user.extra.picture.large} alt="Imagen del usuario"/>]
                    ) : (
                        <span>No existe el usuario</span>
                    )
                }
            </Dialog>
        </FullCover>
    );
};

export default withRouter(ShowImage);