import React, { useState, useRef, useEffect } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;
var DEFAULT_LABEL_PLACEHOLDER = 'Click to edit';
var InlineInputEdit = function (props) {
    var _a, _b;
    var _c = useState(props.isEditing || false), isEditing = _c[0], setIsEditing = _c[1];
    var _d = useState(props.text || ''), text = _d[0], setText = _d[1];
    var textInput = useRef(null);
    useEffect(function () {
        if (text) {
            setText(text);
        }
    }, [text]);
    useEffect(function () {
        setIsEditing(isEditing);
    }, [isEditing]);
    var isTextValueValid = function () {
        return typeof text != 'undefined' && text.trim().length > 0;
    };
    var handleFocus = function () {
        if (isEditing) {
            if (typeof props.onFocusOut === 'function') {
                props.onFocusOut(text);
            }
        }
        else {
            if (typeof props.onFocus === 'function') {
                props.onFocus(text);
            }
        }
        if (isTextValueValid()) {
            setIsEditing(!isEditing);
        }
        else {
            if (isEditing) {
                setIsEditing(props.emptyEdit || false);
            }
            else {
                setIsEditing(true);
            }
        }
    };
    var handleChange = function () {
        var _a;
        if (textInput.current !== null) {
            setText((_a = textInput === null || textInput === void 0 ? void 0 : textInput.current) === null || _a === void 0 ? void 0 : _a.value);
        }
    };
    var handleKeyDown = function (e) {
        if (e.keyCode === ENTER_KEY_CODE || e.keyCode === ESC_KEY_CODE) {
            handleEnterKey();
        }
    };
    var handleEnterKey = function () {
        handleFocus();
    };
    var inputProps = (_a = {},
        _a['data-testid'] = 'input-component',
        _a.value = text,
        _a.ref = textInput,
        _a.onBlur = handleFocus,
        _a.onChange = handleChange,
        _a.onKeyDown = handleKeyDown,
        _a.tabIndex = props.inputTabIndex,
        _a.maxLength = props.inputMaxLength,
        _a.className = props.inputClassName,
        _a.placeholder = props.inputPlaceHolder,
        _a.style = {
            width: props.inputWidth,
            height: props.inputHeight,
            fontSize: props.inputFontSize,
            fontWeight: props.inputFontWeight,
            borderWidth: props.inputBorderWidth,
        },
        _a);
    if (isEditing) {
        return (React.createElement(React.Fragment, null,
            React.createElement("input", __assign({ type: "text", autoFocus: true }, inputProps))));
    }
    var labelText = isTextValueValid()
        ? text
        : props.labelPlaceHolder || DEFAULT_LABEL_PLACEHOLDER;
    var labelProps = (_b = {},
        _b['data-testid'] = 'label-component',
        _b.className = props.labelClassName,
        _b.onClick = handleFocus,
        _b.style = {
            cursor: props.labelCursor || 'auto',
            fontSize: props.labelFontSize,
            fontWeight: props.labelFontWeight,
        },
        _b);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", __assign({}, labelProps), labelText)));
};

export { InlineInputEdit };
//# sourceMappingURL=index.es.js.map
