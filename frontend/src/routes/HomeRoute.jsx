import React from 'react';

//Components
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

//Styles
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    onTopicSelect,
    onFavPhoto,
    onPhotoClick,
    favPhotos,
    branchOnClick,
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favPhotos={favPhotos}
        onTopicSelect={onTopicSelect}
        branchOnClick={branchOnClick}
      />
      <PhotoList
        photos={photos}
        favPhotos={favPhotos}
        onFavPhoto={onFavPhoto}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
