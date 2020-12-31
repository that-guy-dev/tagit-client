// base-styles.js
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => createGlobalStyle`
  ${reset}
  * {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 14px;
  }
  .ReactModal__Body--open{
    overflow: hidden;
  }
`;

export default baseStyles;
