import { save, getItemKey } from './storage';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveVideo, 1000));

function saveVideo({ seconds }) {
  save(VIDEOPLAYER_CURRENT_TIME, seconds);
}
if (getItemKey(VIDEOPLAYER_CURRENT_TIME)) {
  player.setCurrentTime(getItemKey(VIDEOPLAYER_CURRENT_TIME));
}