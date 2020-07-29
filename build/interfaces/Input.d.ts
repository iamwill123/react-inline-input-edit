export interface EditableProps {
    text: string;
    isEditing?: boolean;
    emptyEdit?: boolean;
    labelCursor?: string | undefined;
    labelClassName?: string | undefined;
    labelFontSize?: string | number | undefined;
    labelFontWeight?: any | undefined;
    labelPlaceHolder?: string | number | undefined;
    inputMaxLength?: number | undefined;
    inputPlaceHolder?: string | undefined;
    inputTabIndex?: number | undefined;
    inputWidth?: string | number | undefined;
    inputHeight?: string | number | undefined;
    inputFontSize?: string | number | undefined;
    inputFontWeight?: any | undefined;
    inputClassName?: string | undefined;
    inputBorderWidth?: string | number | undefined;
    onFocus?: (text: string) => void;
    onFocusOut?: (text: string) => void;
}
