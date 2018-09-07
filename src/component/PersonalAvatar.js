// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {|
    source: string,
    code: string, 
|};

const PersonalAvatar = ({ code, source }: Props) => {
    return (
        <div>
            <Link to={`/customers/${code}/image`}>
                <img src={source} alt="Imagen personal" className="personalAvatarStyle" />
            </Link>
        </div>
    );
};


export default PersonalAvatar;