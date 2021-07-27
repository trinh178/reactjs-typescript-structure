/**
 * Structure file requried
 */
import React from 'react';

// Used modules
import ImageList from 'modules/image-list/containers';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => (
    <div
        className="container row"
    >
        <ImageList />
    </div>
);

export default Home;
