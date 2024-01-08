const STORAGE_KEY = 'globalSound';

export const setGlobalSound = (soundFile) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const base64String = event.target.result;
    localStorage.setItem(STORAGE_KEY, base64String);
  };

  reader.readAsDataURL(soundFile);
};

export const getGlobalSound = () => {
  return localStorage.getItem(STORAGE_KEY);
};