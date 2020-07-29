# A simple React inline editing component.

## Reasoning

This npm package is originally adapted from https://github.com/bfischer/react-inline-editing. I found the package a few days ago and is super useful but un-maintained? Mainly needed it to work with TypeScript + ReactJS. The below README desc is adapted from the originator's README.

This is an inline, editable text/label component built in React + TypeScript.

The `<InlineInputEdit />` allows the user to simply click and edit text inline. It consists of a `<label>` element to display the unedited text and an `<input />` element to allow editing.

![example](https://i.imgur.com/pvvQWU3.gif)

## Installation

- `npm install --save react-inline-input-edit`
- `yarn add react-inline-input-edit`

## Component `props`
_* Required_

| Prop             | Type     | Description                                                                          |
| ---------------- | -------- | ------------------------------------------------------------------------------------ |
| text (*)         | string   | Text to be displayed on both the label and initially in the editor                   |
| isEditing        | boolean  | Flags whether the label should be in editor mode                                     |
| emptyEdit        | boolean  | Flags whether the label should be in editor mode when text is empty('' or undefined) |
| labelPlaceHolder | string   | Label value to display when text is not present                                      |
| labelClassName   | string   | Class name for the text styling                                                      |
| labelFontSize    | string   | Font size for the text                                                               |
| labelFontWeight  | string   | Font weight for the text                                                             |
| inputMaxLength   | number   | Max length for the input in editing mode                                             |
| inputPlaceHolder | string   | Placeholder for the input in editing mode                                            |
| inputWidth       | string   | Width of the input in editing mode                                                   |
| inputHeight      | string   | Height of the input in editing mode                                                  |
| inputFontSize    | string   | Font size for the input in editing mode                                              |
| inputFontWeight  | string   | Font weight for the input in editing mode                                            |
| inputClassName   | string   | Class name for the input editor's styling                                            |
| inputBorderWidth | string   | Border width for the input in editing mode                                           |
| onFocus          | function | Callback for text focusing. Parameter(s): `text`                                     |
| onFocusOut       | function | Callback for focus leaving editor. Parameter(s): `text`                              |


## An example
```javascript
import React, { FC } from 'react';
import { InlineInputEdit } from 'react-inline-input-edit';

interface Props {}

export const SomeAwesomeComponent: FC<Props> = () => {

  const _handleFocus = (text: any) => {
    console.log('Focused with text: ' + text);
  };

  const _handleFocusOut = (text: any) => {
    console.log('Left editor with text: ' + text);
  };

  return (
    <>
      <InlineInputEdit
          text={`Chuck Norris’ tears cure cancer. Too bad he has never cried.`}
          inputWidth="200px"
          inputHeight="25px"
          inputMaxLength={50}
          labelFontWeight="bold"
          inputFontWeight="bold"
          onFocus={_handleFocus}
          onFocusOut={_handleFocusOut}
      />
    </>
  )
};
```
