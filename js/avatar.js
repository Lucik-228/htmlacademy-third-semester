const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('.img-upload__start input[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');

const loadUserImage = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const url = URL.createObjectURL(file);
    preview.src = url;
    effectsPreviews.forEach((effect) => {
      effect.style.backgroundImage = `url(${url})`;
    });
  }
};

const resetUserImage = () => {
  preview.src = 'img/upload-default-image.jpg';
  effectsPreviews.forEach((effect) => {
    effect.style.backgroundImage = '';
  });
};

export { loadUserImage, resetUserImage };
