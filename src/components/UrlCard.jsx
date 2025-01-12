import React from "react";

const UrlCard = ({ redirectURL, shortID, clickCount }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">URL Details</h5>
                <p className="card-text">
                    <strong>Actual URL:</strong> <span>{redirectURL}</span>
                </p>
                <p className="card-text">
                    <strong>Shortened URL:</strong>{" "}
                    <a href={`http://localhost:6002/api/url/fetchURL/${shortID}`} target="_blank" rel="noopener noreferrer">
                        {shortID}
                    </a>
                </p>
                <p className="card-text">
                    <strong>Visit Count:</strong> <span>{clickCount}</span>
                </p>
            </div>
        </div>
    );
};

export default UrlCard;
