import React from 'react';

//Components
import PhotoListItem from './PhotoListItem';

//Styles
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const { photos, favPhotos, onFavPhoto, onPhotoClick } = props;

  const photoList = photos.map((photo) => {
    const isFav = Boolean(favPhotos[photo.id]);

    return (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        isFav={isFav}
        onFavClick={onFavPhoto}
        onPhotoClick={onPhotoClick}
      />
    );
  });
  return <ul className="photo-list">{photoList}</ul>;
};

//Default props
PhotoList.defaultProps = {
  photos: [
    {
      id: '1',
      location: {
        city: 'Montreal',
        country: 'Canada',
      },
      urls: {
        full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
        regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      },
      user: {
        id: '1',
        username: 'exampleuser',
        name: 'Joe Example',
        profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
      },
    },
    {
      id: '2',
      location: {
        city: 'Toronto',
        country: 'Canada',
      },
      urls: {
        full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
        regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
      },
      user: {
        id: '2',
        username: 'exampleuser',
        name: 'Joe Example',
        profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
      },
    },
    {
      id: '3',
      location: {
        city: 'Ottawa',
        country: 'Canada',
      },
      urls: {
        full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
        regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
      },
      user: {
        id: '3',
        username: 'exampleuser',
        name: 'Joe Example',
        profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
      },
    },
  ],
};

export default PhotoList;
