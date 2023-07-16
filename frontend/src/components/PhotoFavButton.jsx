import React from 'react';

//Components
import { FavIcon } from './FavIcon';

//Styles
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon" onClick={props.onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={props.isFav ? '#F00' : '#EEE'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
