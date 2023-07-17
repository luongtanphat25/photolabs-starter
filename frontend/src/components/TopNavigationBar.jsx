import React from 'react';

//Components
import TopicList from './TopicList';

//Styles
import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} favPhotos={props.favPhotos} onTopicSelect={props.onTopicSelect} />
    </div>
  );
};

export default TopNavigation;
