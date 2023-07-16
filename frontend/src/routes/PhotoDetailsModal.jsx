import React from 'react';

//Components
import PhotoList from '../components/PhotoList';

//Styles
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {
  const { photo } = props;
  const similar_photos = photo.similarPhotos;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.onCloseModal}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>

      <div className="photo-details-modal__images">
        <img className="photo-details-modal__image" src={photo.urls.full} alt="Photo" />

        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={photo.user.profile} alt="Profile" />

          <div className="photo-list__user-info">
            {photo.user.name}
            <div className="photo-list__user-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>

        <div className="photo-details-modal__header">Related Photos</div>

        <PhotoList photos={similar_photos} favPhotos={props.favPhotos} onFavPhoto={props.onFavPhoto} onPhotoClick={props.onPhotoClick} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
