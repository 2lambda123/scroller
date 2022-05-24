export const setWidth = (el, value) => (el.style.width = `${value}px`);
export const setPosition = (el, value) => el.style.setProperty("--position", `${value}px`);

export const classIf = (element, condition, ...classNames) =>
  condition ? element.classList.add(...classNames) : element.classList.remove(...classNames);
