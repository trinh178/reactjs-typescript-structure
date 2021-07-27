/**
 * Structure file requried
 */
import React from 'react';

// Used modules
import Message from 'modules/message/containers';

interface AboutProps {

}

const About: React.FC<AboutProps> = () => (
    <div
        className="container row m-0 p-0"
    >
        <div
            className="col-12 m-0 p-0"
        >
            Message
        </div>
        <div
            className="col-12 m-0 p-0"
        >
            <Message />
        </div>
    </div>
);

export default About;
