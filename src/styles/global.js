import { injectGlobal } from 'emotion'

import kanitThinTTF from '../assets/fonts/kanit/Thin.ttf'
import kanitThinEOT from '../assets/fonts/kanit/Thin.eot'
import kanitThinWoff from '../assets/fonts/kanit/Thin.woff'
import kanitThinWoff2 from '../assets/fonts/kanit/Thin.woff2'

import kanitLightTTF from '../assets/fonts/kanit/Light.ttf'
import kanitLightEOT from '../assets/fonts/kanit/Light.eot'
import kanitLightWoff from '../assets/fonts/kanit/Light.woff'
import kanitLightWoff2 from '../assets/fonts/kanit/Light.woff2'

import kanitRegularTTF from '../assets/fonts/kanit/Regular.ttf'
import kanitRegularEOT from '../assets/fonts/kanit/Regular.eot'
import kanitRegularWoff from '../assets/fonts/kanit/Regular.woff'
import kanitRegularWoff2 from '../assets/fonts/kanit/Regular.woff2'

import kanitBoldTTF from '../assets/fonts/kanit/Bold.ttf'
import kanitBoldEOT from '../assets/fonts/kanit/Bold.eot'
import kanitBoldWoff from '../assets/fonts/kanit/Bold.woff'
import kanitBoldWoff2 from '../assets/fonts/kanit/Bold.woff2'

import maitreeExtraLightTTF from '../assets/fonts/maitree/ExtraLight.ttf'
import maitreeExtraLightEOT from '../assets/fonts/maitree/ExtraLight.eot'
import maitreeExtraLightWoff from '../assets/fonts/maitree/ExtraLight.woff'
import maitreeExtraLightWoff2 from '../assets/fonts/maitree/ExtraLight.woff2'

import maitreeLightTTF from '../assets/fonts/maitree/Light.ttf'
import maitreeLightEOT from '../assets/fonts/maitree/Light.eot'
import maitreeLightWoff from '../assets/fonts/maitree/Light.woff'
import maitreeLightWoff2 from '../assets/fonts/maitree/Light.woff2'

import maitreeRegularTTF from '../assets/fonts/maitree/Regular.ttf'
import maitreeRegularEOT from '../assets/fonts/maitree/Regular.eot'
import maitreeRegularWoff from '../assets/fonts/maitree/Regular.woff'
import maitreeRegularWoff2 from '../assets/fonts/maitree/Regular.woff2'

import maitreeBoldTTF from '../assets/fonts/maitree/Bold.ttf'
import maitreeBoldEOT from '../assets/fonts/maitree/Bold.eot'
import maitreeBoldWoff from '../assets/fonts/maitree/Bold.woff'
import maitreeBoldWoff2 from '../assets/fonts/maitree/Bold.woff2'

import 'antd/dist/antd.css'

injectGlobal`

  @font-face {
    font-family: 'kanit';
    src: url(${kanitThinEOT});
    src: url(${kanitThinEOT}) format('embedded-opentype'),
        url(${kanitThinWoff}) format('woff'),
        url(${kanitThinWoff2}) format('woff2'),
        url(${kanitThinTTF}) format('truetype');
    font-weight: 100;
  }

  @font-face {
    font-family: 'kanit';
    src: url(${kanitLightEOT});
    src: url(${kanitLightEOT}) format('embedded-opentype'),
        url(${kanitLightWoff}) format('woff'),
        url(${kanitLightWoff2}) format('woff2'),
        url(${kanitLightTTF}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'kanit';
    src: url(${kanitRegularTTF});
    src: url(${kanitRegularEOT}) format('embedded-opentype'),
        url(${kanitRegularWoff}) format('woff'),
        url(${kanitRegularWoff2}) format('woff2'),
        url(${kanitRegularTTF}) format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'kanit';
    src: url(${kanitBoldEOT});
    src: url(${kanitBoldEOT}) format('embedded-opentype'),
        url(${kanitBoldWoff}) format('woff'),
        url(${kanitBoldWoff2}) format('woff'),
        url(${kanitBoldTTF}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'maitree';
    src: url(${maitreeExtraLightEOT});
    src: url(${maitreeExtraLightEOT}) format('embedded-opentype'),
        url(${maitreeExtraLightWoff}) format('woff'),
        url(${maitreeExtraLightWoff2}) format('woff2'),
        url(${maitreeExtraLightTTF}) format('truetype');
    font-weight: 100;
  }

  @font-face {
    font-family: 'maitree';
    src: url(${maitreeLightEOT});
    src: url(${maitreeLightEOT}) format('embedded-opentype'),
        url(${maitreeLightWoff}) format('woff'),
        url(${maitreeLightWoff2}) format('woff2'),
        url(${maitreeLightTTF}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'maitree';
    src: url(${maitreeRegularTTF});
    src: url(${maitreeRegularEOT}) format('embedded-opentype'),
        url(${maitreeRegularWoff}) format('woff'),
        url(${maitreeRegularWoff2}) format('woff2'),
        url(${maitreeRegularTTF}) format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: 'maitree';
    src: url(${maitreeBoldEOT});
    src: url(${maitreeBoldEOT}) format('embedded-opentype'),
        url(${maitreeBoldWoff}) format('woff'),
        url(${maitreeBoldWoff2}) format('woff'),
        url(${maitreeBoldTTF}) format('truetype');
    font-weight: 500;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'kanit';
    font-size: 14px;
    font-weight: 300;
    color: #000 !important;
    background-color: #DDE1E3;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
  }

  form {
    width: 100%;
  }

  h1,h2,h3,h4,h5,h6,p {
      margin: 0;
      padding: 0;
      color: #000;
  }
  
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 24px;
  }
  h3 {
    font-size: 18px;
  }

  .ReactModal__Body--open {
    overflow: hidden;
  }

  [class^=ant-] {
    font-family: 'kanit' !important;
    font-weight: 300 !important;
  }
  
  .ant-calendar {
    border-radius: 0;
  }
  .ant-calendar-picker-container {
    z-index: 99999;
  }
  .ant-tabs {
    overflow: unset;
  }
  .ant-dropdown {
    z-index: 99999;
  }
`
