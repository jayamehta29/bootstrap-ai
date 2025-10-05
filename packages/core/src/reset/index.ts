import { css } from 'lit';

/**
 * Modern CSS reset based on modern-normalize and custom additions
 */
export const resetCSS = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  * {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Improve media defaults */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /* Remove built-in form typography quirks */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Avoid text overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /* Create a root stacking context */
  #root,
  #__next {
    isolation: isolate;
  }

  /* Remove list styles on ul, ol elements with a list role */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set shorter line heights on headings and interactive elements */
  h1,
  h2,
  h3,
  h4,
  button,
  input,
  label {
    line-height: 1.1;
  }

  /* Balance text wrapping on headings */
  h1,
  h2,
  h3,
  h4 {
    text-wrap: balance;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
  }

  /* Make sure textareas without a rows attribute are not tiny */
  textarea:not([rows]) {
    min-height: 10em;
  }

  /* Anything that has been anchored to should have extra scroll margin */
  :target {
    scroll-margin-block: 5ex;
  }
`;

export default resetCSS;
