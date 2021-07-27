/**
 * Structure file requried
 */
import React from 'react';
import { useListQuery } from 'services/api/imageApi';
import { Image } from '../components';

interface ImageListProps {
    // ..
}

const ImageList: React.FC<ImageListProps> = () => {
    const { data } = useListQuery({}, {
        refetchOnFocus: false,
        refetchOnMountOrArgChange: false,
        refetchOnReconnect: false,
    });

    return (
        <div
            className="container row"
        >
            {data && data.slice(0, 12).map((image) => (
                <div
                    className="col-3"
                    key={image.id}
                >
                    <Image
                        alt={image.title}
                        src={image.url}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageList;
