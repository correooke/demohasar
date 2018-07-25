import React from 'react';
import PropTypes from 'prop-types';

const PersonalAvatar = ({ source }) => {
    return (
        <div>
            <img src={source} alt="Imagen personal" className="personalAvatarStyle" />
        </div>
    );
};

PersonalAvatar.propTypes = {
    source: PropTypes.string.isRequired,
};

export default PersonalAvatar;