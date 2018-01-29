import React from 'react';
import PropTypes from 'prop-types';
import mergeClassNames from 'classnames';
import Icon from './../Icon';

const StackedIcon = props => {
    const {icon, stackedIcon, label, iconMap, _makeGetClassName, theme} = props;
    const getClassName = _makeGetClassName(iconMap);

    const addittionalClassNames = mergeClassNames({
        [getClassName('stack-2x')]: true,
        [theme['icon--stacked']]: true
    });

    const addittionalStackedClassNames = mergeClassNames({
        [getClassName('stack-1x')]: true,
        [getClassName('inverse')]: props.inverseStackedIcon,
        [theme['icon--stacked']]: true
    });

    const classNames = mergeClassNames({
        [getClassName('stack')]: true
    });

    return (
        <span className={classNames}>
            <Icon icon={icon} className={addittionalClassNames} size="medium" label={label}/>
            <Icon icon={stackedIcon} className={addittionalStackedClassNames} size="small" label={label}/>
        </span>
    );
};

StackedIcon.propTypes = {
    /**
     * The ID of the icon to render.
     */
    icon: PropTypes.string.isRequired,

    /**
     * The ID of the icon to stack.
     */
    stackedIcon: PropTypes.string.isRequired,

    inverseStackedIcon: PropTypes.bool,

    /**
     * The (accessibility) label for this icon
     */
    label: PropTypes.string,

    /**
     * An optional `className` to attach to the wrapper.
     */
    className: PropTypes.string,

    /**
     * When truthy, the icon will spin continously.
     */
    spin: PropTypes.bool,

    /**
    * An optional css theme to be injected.
    */
    theme: PropTypes.shape({
        'icon--stacked': PropTypes.string
    }).isRequired,

    /**
     * The css modules map of the Font-Awesome stylesheet.
     */
    iconMap: PropTypes.object.isRequired,

    /**
     * A function which gets called once a deprecation warning should be displayed.
     */
    _makeValidateId: PropTypes.func.isRequired,
    _makeGetClassName: PropTypes.func.isRequired
};

StackedIcon.defaultProps = {
    inverseStackedIcon: true
};

export default StackedIcon;
