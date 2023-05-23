import React from "react";
import '/contentWrapper.scss';

const ContentWrapper = ({ children }) => {
    return <div className="ContentWrapper">{children}</div>;
};

export default ContentWrapper;