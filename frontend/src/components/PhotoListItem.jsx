import React from 'react';

//Components
import PhotoFavButton from './PhotoFavButton';

//Styles
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { photo, isFav, onFavClick } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton isFav={isFav} onClick={() => onFavClick(photo)} />

      <img
        className="photo-list__image"
        src={photo.urls.regular}
        alt="Photo"
        onClick={() => props.onPhotoClick(photo)}
      />

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt="Profile"
        />

        <div className="photo-list__user-info">
          {photo.user.name}
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

PhotoListItem.defaultProps = {
  id: '1',
  location: {
    city: 'Montreal',
    country: 'Canada',
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: 'Joe Example',
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

export default PhotoListItem;
