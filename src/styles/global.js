import styled, { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        box-sizing: border-box;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button {
        border: none;
        outline: none;
        padding: 0;
        cursor: pointer;
        background-color: transparent;
    }
    
    a {
        text-decoration: none;
    }


    :root {
      --color-primary: #2E245E;
     --color-secondary: #37268C;

      --color-gray-1: #292929;
      --color-gray-2: #828282;
      --color-gray-3: #F5F5F5;

      --sz-title-1: 26px;
      --sz-title-2: 22px; 
      --sz-title-3: 18px; 
      --sz-title-4: 16px; 

      --sz-text-1: 16px;
      --sz-text-2: 14px;
      --sz-text-3: 12px; 

      --font-weg-1: 700;
      --font-weg-2: 600;
      --font-weg-3: 500;
      --font-weg-4: 400;

    }
    
    &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    background-color: var(--color-gray-3);
    }

    &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    }

    body {
        font-family: 'Inter', sans-serif;
        color: var(--color-gray-1);

    }
`;

export const StyledContainer = styled.div`
  width: 90%;
  max-width: 1448px;
  margin: 0 auto;
  background-color: white;
`;

export const StyledMain = styled.main`
  margin-top: 44px;
`;
