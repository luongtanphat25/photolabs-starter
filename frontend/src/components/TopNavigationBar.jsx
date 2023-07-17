import React from 'react';

//Components
import TopicList from './TopicList';

//Styles
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  const { topics, favPhotos, onTopicSelect } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        favPhotos={favPhotos}
        onTopicSelect={onTopicSelect}
      />
    </div>
  );
};

export default TopNavigation;
