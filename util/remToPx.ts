const remToPx = (rem: number) =>
  rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

export default remToPx;
