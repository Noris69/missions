import skrollr from 'skrollr';

export const initSkrollr = () => {
  if (typeof window !== 'undefined') {
    const s = skrollr.init();
    s.refresh();
  }
};
