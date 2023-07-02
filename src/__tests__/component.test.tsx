import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { InlineInputEdit } from '..';

describe('Inline input edit component', () => {
	test('should render a text label given a text prop.', () => {
		const text = `Chuck Norris's tears cure cancer. Too bad he has never cried.`;
		const component = renderer.create(<InlineInputEdit text={text} />);
		const testInstance = component.root;

		const actual = testInstance.findByType(InlineInputEdit).props.text;
		const expected =
			`Chuck Norris's tears cure cancer. Too bad he has never cried.`;

		expect(actual).toBe(expected);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('should render a default "Click to edit" label when no text prop or labelPlaceHolder prop is provided.', () => {
		const text = '';
		const component = renderer.create(<InlineInputEdit text={text} />);
		const testInstance = component.root;

		const actual = testInstance.findByType(InlineInputEdit).props.text;
		const expected = '';

		expect(actual).toBe(expected);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('should render a label when a labelPlaceHolder prop is provided.', () => {
		const text = '';
		const labelPlaceHolder = 'hey there';
		const component = renderer.create(
			<InlineInputEdit text={text} labelPlaceHolder={labelPlaceHolder} />
		);
		const testInstance = component.root;

		const actualText = testInstance.findByType(InlineInputEdit).props.text;
		const expectedText = '';

		const actualPlaceholder = testInstance.findByType(InlineInputEdit).props
			.labelPlaceHolder;
		const expectedPlaceholder = 'hey there';

		expect(actualText).toBe(expectedText);
		expect(actualPlaceholder).toBe(expectedPlaceholder);

		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('should render an input when label is clicked, and should update label with new input text.', () => {
		const text = '';
		const { container, asFragment } = render(<InlineInputEdit text={text} />);
		let labelComp = getByTestId(container, 'label-component');
		fireEvent.click(labelComp);
		expect(asFragment()).toMatchSnapshot();

		const inputComp = getByTestId(container, 'input-component');
		fireEvent.change(inputComp, { target: { value: 'check me out' } });
		fireEvent.blur(inputComp);

		labelComp = getByTestId(container, 'label-component');
		expect(labelComp.textContent).toBe('check me out');
		expect(asFragment()).toMatchSnapshot();
	});

	test('should render optional props provided by user.', () => {
		const optionalProps = {
			text: 'Chuck Norris',
			labelCursor: 'pointer',
			labelClassName: 'red',
			labelFontSize: '20px',
			labelFontWeight: '500',

			inputMaxLength: 20,
			inputPlaceHolder: 'the Chuck Norris',
			inputTabIndex: 1,
			inputWidth: 500,
			inputHeight: 20,
			inputFontSize: 30,
			inputFontWeight: 500,
			inputClassName: 'the-one',
			inputBorderWidth: 20,

			onFocus: (text: any) => text,
			onFocusOut: (text: any) => text,
		};
		const { container, asFragment } = render(
			<InlineInputEdit {...optionalProps} />
		);
		expect(asFragment()).toMatchSnapshot();

		let labelComp = getByTestId(container, 'label-component');
		fireEvent.click(labelComp);
		expect(asFragment()).toMatchSnapshot();
	});
});
