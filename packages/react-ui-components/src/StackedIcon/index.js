import {themr} from 'react-css-themr';
import identifiers from './../identifiers.js';
import {makeValidateId, makeGetClassName} from './../_lib/fontAwesome.js';
import injectProps from './../_lib/injectProps.js';
import style from './style.css';
import StackedIcon from './stackedIcon.js';
import icons from './../Icon/fontAwesome/icons.css';

const ThemedStackedIcon = themr(identifiers.stackedIcon, style)(StackedIcon);

export default injectProps({
    iconMap: icons,
    _makeValidateId: makeValidateId,
    _makeGetClassName: makeGetClassName
})(ThemedStackedIcon);
