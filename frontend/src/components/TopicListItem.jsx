import React, { useState, useEffect } from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const onClick = () => {
    props.onTopicSelect(props.id);
  };

  const style = { textDecoration: props.isSelect ? 'overline' : 'none' };
  return (
    <div onClick={onClick} style={style} className="topic-list__item">
      <span>{props.label}</span>
    </div>
  );
};

TopicListItem.defaultProps = {
  id: '1',
  slug: 'topic-1',
  label: 'Nature',
};
export default TopicListItem;
