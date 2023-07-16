import { useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotos: {
          ...state.favPhotos,
          [action.payload.id]: action.payload,
        },
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      const { [action.payload.id]: _, ...remainingFavPhotos } = state.favPhotos;
      return {
        ...state,
        favPhotos: remainingFavPhotos,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        onPhotoSelect: action.payload,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        displayPhotoDetails: action.payload,
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    onPhotoSelect: null,
    favPhotos: {},
    photoData: null,
    topicData: null,
    displayPhotoDetails: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onPhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: null });
  };

  const handleFavPhoto = (photo) => {
    dispatch({
      type: state.favPhotos[photo.id] ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED,
      payload: photo,
    });
  };

  return {
    onPhotoSelect: state.onPhotoSelect,
    favPhotos: state.favPhotos,
    onPhotoClick,
    onClosePhotoDetailsModal,
    handleFavPhoto,
  };
};

export default useApplicationData;
