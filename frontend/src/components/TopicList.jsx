import React, { useState } from 'react';

//Components
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';

//Styles
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const onTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    props.onTopicSelect(topicId);
  };

 

  const topics = props.topics.map((topic) => {
    const isSelect = topic.id === selectedTopic;

    return <TopicListItem key={topic.id} label={topic.title} isSelect={isSelect} id={topic.id} onTopicSelect={onTopicSelect}/>;
  });

  return (
    <ul className="top-nav-bar__topic-list">
      {topics}
      <FavBadge isFavPhotoExist={Object.keys(props.favPhotos).length === 0 ? false : true} />
    </ul>
  );
};

TopicList.defaultProps = {
  topics: [
    {
      id: '1',
      slug: 'topic-1',
      title: 'Nature',
    },
    {
      id: '2',
      slug: 'topic-2',
      title: 'Travel',
    },
    {
      id: '3',
      slug: 'topic-3',
      title: 'People',
    },
  ],
};
export default TopicList;
