import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PersonalAvatar = ({ code, source }) => {
    return (
        <div>
            <Link to={`/customers/${code}/image`}>
                <img src={source} alt="Imagen personal" className="personalAvatarStyle" />
            </Link>
        </div>
    );
};

PersonalAvatar.propTypes = {
    source: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
};

export default PersonalAvatar;