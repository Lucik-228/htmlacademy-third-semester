import { renderThumbnails } from './thumbnail.js';
import { initFilter } from './filter.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import './form.js';

getData(
  (loadedPictures) => {
    renderThumbnails(loadedPictures);
    initFilter(loadedPictures, renderThumbnails);
  },
  (err) => showAlert(err)
);
