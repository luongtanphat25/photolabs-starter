import React, { useState } from 'react';

//Components
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

//Hooks
import useApplicationData from './hooks/useApplicationData';

//Styles
import './App.scss';

//Mocks
import photos from './mocks/photos';
import topics from './mocks/topics';

//App component
const App = () => {
  const { onPhotoSelect, favPhotos, onPhotoClick, onClosePhotoDetailsModal, handleFavPhoto } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} favPhotos={favPhotos} onFavPhoto={handleFavPhoto} onPhotoClick={onPhotoClick} />

      {onPhotoSelect && <PhotoDetailsModal photo={onPhotoSelect} favPhotos={favPhotos} onFavPhoto={handleFavPhoto} onPhotoClick={onPhotoClick} onCloseModal={onClosePhotoDetailsModal} />}
    </div>
  );
};

export default App;
