import IconDown from '../assets/icon-down.svg';
import IconFacebook from '../assets/icon-facebook.svg';
import IconInstagram from '../assets/icon-instagram.svg';
import IconTwitter from '../assets/icon-twitter.svg';
import IconUp from '../assets/icon-up.svg';
import IconYoutube from '../assets/icon-youtube.svg';


const data = [
  {
    social: 'facebook',
    user: '@nathanf',
    followers: '1987',
    today: '12',
    icon: IconFacebook,
    down: false,
    headerColor: 'bg-facebook'
  },
  {
    social: 'twitter',
    followers: '1044',
    user: '@nathanf',
    today: '99',
    icon: IconTwitter,
    down: false,
    headerColor: 'bg-twitter'
  },
  {
    social: 'instagram',
    user: '@realnathanf',
    followers: '11K',
    today: '1099',
    icon: IconInstagram,
    down: false,
    headerColor: 'bg-gradient-to-r from-instagram-start to-instagram-end'
  },
  {
    social: 'youtube',
    user: 'Nathan F.',
    followers: '1987',
    today: '144',
    icon: IconYoutube,
    down: true,
    headerColor: 'bg-youtube'
  },
];

const overviews = [
  {
    title: 'page views',
    value: '87',
    icon: IconFacebook,
    percentage: 3,
    down: false
  },
  {
    title: 'likes',
    value: '52',
    icon: IconFacebook,
    percentage: 2,
    down: true
  },
  {
    title: 'likes',
    value: '5462',
    icon: IconInstagram,
    percentage: 2257,
    down: false
  },
  {
    title: 'profile views',
    value: '52k',
    icon: IconInstagram,
    percentage: 1375,
    down: false
  },
  {
    title: 'retweets',
    value: '117',
    icon: IconTwitter,
    percentage: 303,
    down: false
  },
  {
    title: 'likes',
    value: '507',
    icon: IconTwitter,
    percentage: 553,
    down: false
  },
  {
    title: 'likes',
    value: '107',
    icon: IconYoutube,
    percentage: 19,
    down: true
  },
  {
    title: 'total views',
    value: '1407',
    icon: IconYoutube,
    percentage: 12,
    down: true
  },
]

export {
  data,
  overviews,
  IconUp,
  IconDown
}
