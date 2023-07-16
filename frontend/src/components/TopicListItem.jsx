import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const [isSelect, setIsSelect] = React.useState(props.isSelect);
  const onClick = () => {
    setIsSelect(true);
    props.onSelect(props.id);
  };

  if (isSelect !== props.isSelect) {
    setIsSelect(props.isSelect);
  }

  const style = { textDecoration: isSelect ?  'overline' : 'none'};
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
