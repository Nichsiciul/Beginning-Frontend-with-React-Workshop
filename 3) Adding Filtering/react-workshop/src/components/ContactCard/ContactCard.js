import React from 'react';
import PropTypes from 'prop-types';
import "./ContactCard.css";

const ContactCard = (props) => {
    const { firstName, lastName, gender, eMail, age, imageUrl } = props;
    const femaleBase64Img = "url('data:image/png;base64,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')";
    const maleBase64Img = "url('data:image/png;base64,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')";
    const genderStyle = {
        backgroundImage: gender === "male" ? maleBase64Img : femaleBase64Img
    }

    const contactDetails = `${age} - ${firstName} ${lastName}`;

    return (
        <div className="contact-card">
            <div className="image-container">
                <img src={imageUrl} alt={`${firstName} - ${lastName}`} />
            </div>
            <div className="contact-card-inner">
                <div className="information-container ellipsis">
                    <i className="contact-details-icon" style={genderStyle}></i>
                    <span title={contactDetails}>{contactDetails}</span>
                </div>
                <div className="ellipsis">
                    <i className="contact-details-icon email-icon"></i>
                    <span><a className="contact-email" href={`mailto:${eMail}`}>{eMail}</a></span>
                </div>
            </div>
        </div>)
}

ContactCard.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(["male", "female"]).isRequired,
    eMail: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired
}

export default ContactCard;