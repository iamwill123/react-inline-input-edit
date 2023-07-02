'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    var _c = React.useState(props.isEditing || false), isEditing = _c[0], setIsEditing = _c[1];
    var _d = React.useState(props.text || ''), text = _d[0], setText = _d[1];
    var textInput = React.useRef(null);
    React.useEffect(function () {
        if (text) {
            setText(text);
        }
    }, [text]);
    React.useEffect(function () {
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
        return (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement("input", __assign({ type: "text", autoFocus: true }, inputProps))));
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
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("label", __assign({}, labelProps), labelText)));
};

exports.InlineInputEdit = InlineInputEdit;
//# sourceMappingURL=index.js.map
