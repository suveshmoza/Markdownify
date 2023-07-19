import { useState } from 'react';

const InputArea = () => {
	const [inputText, setInputText] = useState('');
	return (
		<textarea
			className="input-text-area"
			placeholder="# Hello There!"
			value={inputText}
			onChange={(e) => {
				setInputText(e.target.value);
			}}
		/>
	);
};

export default InputArea;
