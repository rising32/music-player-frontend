import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';
import ListItem from 'material-ui/List/ListItem';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline';
import PauseIcon from 'material-ui/svg-icons/av/pause-circle-outline';

const iconStyle = { width: '32px', height: '32px' };

const Song = props => {
  const leftAvatar = <Avatar style={{ left: '72px' }} src={props.data.art} />;
  const playControl = (
    <Checkbox
      checkedIcon={<PauseIcon style={iconStyle} />}
      uncheckedIcon={<PlayIcon style={iconStyle} />}
      checked={props.isPlaying}
      onClick={props.onClick}
    />
  );
  const listenerCountEl = <Avatar>{props.listenerCount}</Avatar>;
  return (
    <ListItem
      primaryText={props.data.title}
      leftAvatar={leftAvatar}
      secondaryText={props.data.singer}
      leftCheckbox={playControl}
      rightAvatar={listenerCountEl}
      style={{ paddingLeft: '148px' }}
    />
  );
};

Song.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    singer: PropTypes.string.isRequired,
    art: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  listenerCount: PropTypes.number.isRequired,
};

export default Song;
