import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { updateValue } from '../features/markdown/markdownSlice';
import { ChangeEvent, useCallback } from 'react';

const InputArea = () => {
	const value = useSelector((state: RootState) => state.markdown.value);
	const dispatch = useDispatch();

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(updateValue(e.target.value));
	};

	const handleDownload = useCallback(() => {
		const content = value;
		const blob = new Blob([content], { type: 'text/plain' });
		const downloadLink = document.createElement('a');
		downloadLink.href = URL.createObjectURL(blob);
		downloadLink.download = 'markdown_content.md';
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
		URL.revokeObjectURL(downloadLink.href);
	}, [value]);

	return (
		<div className="input-area-container">
			<div className="navbar">
				<p className="navbar-text">Editor</p>
				<button className="navbar-button-md" onClick={handleDownload}>
					Download <i className="fa-brands fa-markdown fa-xl"></i>
				</button>
			</div>
			<textarea
				className="input-text-area"
				placeholder="Hello There!"
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default InputArea;
