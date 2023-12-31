export const classNames = {
  namespace: "scroller",

  container: `scroller-container`,
  content: `scroller-content`,
  item: `scroller-item`,

  nav: `scroller-navigation`,
  button: `scroller-button`,

  scrollbar: `scroller-scrollbar`,
  handle: `scroller-handle`,
};

export const modifiers = {
  nonScrollable: "is-not-scrollable",
  hasAlignmentStart: "has-start-align",
  hasAlignmentEnd: "has-end-align",

  draggingContent: "is-dragging-content",
  draggingHandle: "is-dragging-handle",

  noScrollbar: "no-scrollbar",
  noNavigation: "no-navigation",

  borderLeft: "has-left-border",
  borderRight: "has-right-border",
};

export const select = {
  initiallyFocusedNode: `[data-focused]`,
  byNavigationId: (id) => `[data-anchor="${id}"]`,
};
