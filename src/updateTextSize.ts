import { getTextWidth } from '@/src/getTextWidth';

export function updateTextSize(
  el: HTMLElement,
  options: { errorMargin: number; innerHorizontalSpacing: number },
) {
  const { errorMargin, innerHorizontalSpacing } = options;
  const selfHeight = Math.floor(el.clientHeight);
  const selfWidth = Math.floor(el.clientWidth);
  let txtWidth = Math.ceil(getTextWidth(el));

  const selfStyle = window.getComputedStyle(el);
  let newFontSize = parseInt(selfStyle.fontSize.slice(0, -2));
  if (txtWidth === selfWidth)
    return {
      fontSize: newFontSize,
      textWidth: txtWidth,
    };
  function updateFontSize(value: 1 | -1) {
    newFontSize += value;
    newFontSize = Math.max(newFontSize, 1);
    el.style.fontSize = `${newFontSize}px`;
    txtWidth = getTextWidth(el);
  }
  const incrementFontSize = () => updateFontSize(+1);
  const decrementFontSize = () => updateFontSize(-1);
  while (
    txtWidth + errorMargin + innerHorizontalSpacing < selfWidth &&
    newFontSize < selfHeight
  ) {
    incrementFontSize();
  }
  while (
    txtWidth + errorMargin + innerHorizontalSpacing > selfWidth &&
    newFontSize > 1
  ) {
    decrementFontSize();
  }
  return {
    fontSize: newFontSize,
    textWidth: txtWidth,
  };
}
