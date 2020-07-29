import React, { FC, useState, useEffect, useRef } from 'react';
import { EditableProps } from './interfaces/Input';

interface Props extends EditableProps {}

const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

const DEFAULT_LABEL_PLACEHOLDER = 'Click to edit';

const InlineInputEdit: FC<Props> = (props) => {
	const [isEditing, setIsEditing] = useState(props.isEditing || false);
	const [text, setText] = useState(props.text || '');
	const textInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (text) {
			setText(text);
		}
	}, [text]);

	useEffect(() => {
		setIsEditing(isEditing);
	}, [isEditing]);

	const isTextValueValid = () =>
		typeof text != 'undefined' && text.trim().length > 0;

	const handleFocus = () => {
		if (isEditing) {
			if (typeof props.onFocusOut === 'function') {
				props.onFocusOut(text);
			}
		} else {
			if (typeof props.onFocus === 'function') {
				props.onFocus(text);
			}
		}

		if (isTextValueValid()) {
			setIsEditing(!isEditing);
		} else {
			if (isEditing) {
				setIsEditing(props.emptyEdit || false);
			} else {
				setIsEditing(true);
			}
		}
	};

	const handleChange = () => {
		if (textInput.current !== null) {
			setText(textInput?.current?.value);
		}
	};

	const handleKeyDown = (e: any) => {
		if (e.keyCode === ENTER_KEY_CODE || e.keyCode === ESC_KEY_CODE) {
			handleEnterKey();
		}
	};

	const handleEnterKey = () => {
		handleFocus();
	};

	const inputProps = {
		['data-testid']: 'input-component',
		value: text,
		ref: textInput,
		onBlur: handleFocus,
		onChange: handleChange,
		onKeyDown: handleKeyDown,
		tabIndex: props.inputTabIndex,
		maxLength: props.inputMaxLength,
		className: props.inputClassName,
		placeholder: props.inputPlaceHolder,
		style: {
			width: props.inputWidth,
			height: props.inputHeight,
			fontSize: props.inputFontSize,
			fontWeight: props.inputFontWeight,
			borderWidth: props.inputBorderWidth,
		},
	};

	if (isEditing) {
		return (
			<>
				<input type="text" autoFocus {...inputProps} />
			</>
		);
	}

	const labelText = isTextValueValid()
		? text
		: props.labelPlaceHolder || DEFAULT_LABEL_PLACEHOLDER;

	const labelProps = {
		['data-testid']: 'label-component',
		className: props.labelClassName,
		onClick: handleFocus,
		style: {
			cursor: props.labelCursor || 'auto',
			fontSize: props.labelFontSize,
			fontWeight: props.labelFontWeight,
		},
	};

	return (
		<>
			<label {...labelProps}>{labelText}</label>
		</>
	);
};

export { InlineInputEdit };
