import React, {PureComponent, ChangeEvent} from 'react';
import mergeClassNames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';
import enhanceWithClickOutside from 'react-click-outside';

import { PickDefaultProps } from '../../types';

export interface TextAreaProps {
        /**
         * An optional className to render on the textarea node.
         */
        readonly className?: string;

        /**
         * An optional HTML5 placeholder.
         */
        readonly placeholder?: string;

        /**
         * The handler which will be called once the user changes the value of the input.
         */
        readonly onChange?: (value: any) => void;

        /**
         * This prop controls if the CheckBox is disabled or not.
         */
        readonly disabled?: boolean;

        /**
         * An optional css theme to be injected.
         */
        readonly theme?: TextAreaTheme;

        /**
         * Optional number to set the minRows of the TextArea if not expanded
         */
        readonly minRows?: number;

        /**
         * Optional number to set the expandedRows of the TextArea if expanded
         */
        readonly expandedRows?: number;
}

interface TextAreaTheme {
    readonly textArea: string;
    readonly 'textArea--disabled': string;
}

export const defaultProps: PickDefaultProps<TextAreaProps, 'minRows' | 'expandedRows'> = {
    minRows: 2,
    expandedRows: 6
};

interface TextAreaState {
    readonly isFocused: boolean;
}

const intitialState: TextAreaState = {
    isFocused: false,
};

export class TextArea extends PureComponent<TextAreaProps> {
    public static defaultProps = defaultProps;
    public state = intitialState;

    public render(): JSX.Element {
        const {
            placeholder,
            className,
            theme,
            disabled,
            minRows,
            expandedRows,
        } = this.props;
        const classNames = mergeClassNames(
            className,
            theme!.textArea,
            {
                [theme!['textArea--disabled']]: disabled
            }
        );

        return (
            <TextareaAutosize
                className={classNames}
                role="textbox"
                aria-multiline="true"
                aria-disabled={disabled ? 'true' : 'false'}
                placeholder={placeholder}
                disabled={disabled}
                onChange={this.handleValueChange}
                onClick={this.handleOnClick}
                minRows={this.state.isFocused ? expandedRows : minRows}
            />
        );
    }

    private readonly handleValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const {onChange} = this.props;

        if (onChange) {
            onChange(e.target.value);
        }
    }

    private readonly handleOnClick = () => {
        this.setState({
            isFocused: true
        });
    }

    public readonly handleClickOutside = () => {
        this.setState({
            isFocused: false
        });
    }
}

//
// Add the click-outside functionality to the TextArea component.
//
export default enhanceWithClickOutside(TextArea);
