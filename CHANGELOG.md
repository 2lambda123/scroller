# CHANGELOG

## v3.0.2

Add a license file. Specify the MIT license in the `package.json`. Don't bump the major version since ISC and MIT are basically the same.

## v3.0.1

Fix possible double initialization when the `DOMContentLoaded` event happens after the manual initialization with `useExternalLayout`. Prevent instantiation in constructor on initialized elements.

## v3.0.0

Weight, dependency, and performance improvements; pure ESM; more consistent public API.

### Breaking Changes

- Dropped support for IE and older browsers.
- Dropped support for APIs deprecated in previous releases: `noAnchors`, `noScrollbar`.
- Stopped exposing `Scroller` on the `window` object. (Use direct `import` instead.)
- Public API updates:
  - Config `el` setting is now called `element`.
  - Config `useOuterHtml` setting is now `useExternalLayout`.
  - Config `onClick` setting is now `onItemClick`.
  - Config `anchors` setting is now `navigation`.
  - The `data-anchors` attribute is now `data-navigation`.
  - The `data-central` attribute is now `data-focused`.
  - The `data-start` attribute is now `data-start-position`.
  - The `data-startAnimation` attribute is now `data-start-duration`. For turning the animation off, use `data-start-duration="0"`.
- CSS class name prefix renamed from `.ab_scroller` to `.scroller`.
- CSS is now unprefixed since most of the features are supported by most of the browsers.
- CSS custom properties are now used for animations. Be careful if your bundler inlines custom property values into styles.

### New Features

- New `end` content alignment point. Can be used with `startPosition` and `slideTo`.
- The package is now a ES Module, you can access it through import.
- Improved semantics, ability to use lists as component roots.

### Plans for Future

- Make the scrollbar accessible via keyboard. (Make it possible to control its position via arrow keys.)
- Consider non-LTR languages when specifying the alignment and destination.
