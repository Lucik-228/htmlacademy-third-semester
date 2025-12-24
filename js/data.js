import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;

const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Прекрасный закат на пляже',
  'Мой кот спит в смешной позе',
  'Вкусный завтрак с кофе',
  'Прогулка по осеннему парку',
  'Вид из окна самолета',
  'Новая машина',
  'Вечеринка с друзьями',
  'Красивый цветок в саду',
  'Архитектура старого города',
  'Море и пальмы'
];

const NAMES = [
  'Иван',
  'Мария',
  'Алексей',
  'Ольга',
  'Дмитрий',
  'Елена',
  'Сергей',
  'Анна',
  'Николай',
  'Татьяна'
];

const generateCommentId = createIdGenerator();

const createMessage = () => {
  const messageLineCount = getRandomInteger(1, 2);
  const lines = new Set();
  while (lines.size < messageLineCount) {
    lines.add(getRandomArrayElement(COMMENT_LINES));
  }
  return Array.from(lines).join(' ');
};

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({ length: getRandomInteger(0, COMMENT_COUNT) }, createComment),
});

const getPhotos = () => Array.from({ length: PHOTO_COUNT }, (_, index) => createPhoto(index + 1));

export { getPhotos };
