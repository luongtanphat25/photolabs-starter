import React from 'react';

//Components
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

//Hooks
import useApplicationData from './hooks/useApplicationData';

//Styles
import './App.scss';

//App component
const App = () => {
  const {
    photos,
    topics,
    favPhotos,
    onTopicSelect,
    onPhotoSelect,
    onPhotoClick,
    onClosePhotoDetailsModal,
    handleFavPhoto,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        favPhotos={favPhotos}
        onFavPhoto={handleFavPhoto}
        onPhotoClick={onPhotoClick}
        onTopicSelect={onTopicSelect}
      />

      {onPhotoSelect && (
        <PhotoDetailsModal
          photo={onPhotoSelect}
          favPhotos={favPhotos}
          onFavPhoto={handleFavPhoto}
          onPhotoClick={onPhotoClick}
          onCloseModal={onClosePhotoDetailsModal}
        />
      )}
    </div>
  );
};

export default App;
