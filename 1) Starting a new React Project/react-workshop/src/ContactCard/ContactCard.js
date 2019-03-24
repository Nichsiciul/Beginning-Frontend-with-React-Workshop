import React from 'react';
import PropTypes from 'prop-types';

const ContactCard = (props) => {
    const {firstName, lastName, gender, eMail, age, imageUrl} = props;
    return <div className="content-card">
        <div className="image-container">
            <img src={imageUrl} alt={`${firstName} - ${lastName}`} />
        </div>
        <div className="content-card-inner">
            <div className="information-container">
                <span className="content-card-gender"> </span>
                <span className="content-card-name"></span>
                <span className="content-card-age"></span>
            </div>
            <div className="email-container"></div>
        </div>
    </div>
}

ContactCard.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.oneOf(["male", "female"]),
    eMail: PropTypes.string,
    age: PropTypes.number,
    imageUrl: PropTypes.string
}

export default ContactCard;