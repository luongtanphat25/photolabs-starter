import React, { useState } from 'react';

//Components
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

//Styles
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { selectedTopic, topics, photos, onFavPhoto, onPhotoClick, favPhotos } = props;
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favPhotos={favPhotos} onTopicSelect={props.onTopicSelect} />
      <PhotoList photos={photos} favPhotos={favPhotos} onFavPhoto={onFavPhoto} onPhotoClick={onPhotoClick} />
    </div>
  );
};

export default HomeRoute;
