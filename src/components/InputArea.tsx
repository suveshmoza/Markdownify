import { ChangeEvent, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { updateValue } from '../features/markdown/markdownSlice';

const InputArea = () => {
	const value = useSelector((state: RootState) => state.markdown.value);
	const dispatch = useDispatch();

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLTextAreaElement>) => {
			dispatch(updateValue(e.target.value));
		},
		[dispatch],
	);

	const handleDownload = useCallback(() => {
		const content = value;
		if (content.length === 0) {
			alert('Editor is empty!!');
			return;
		}
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
		<div className="flex flex-col h-full bg-gray-200">
			<div className="flex justify-between items-center p-2 ">
				<p className="text-gray-500">Editor</p>
				<button
					className="px-4 py-1 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors ease-out duration-200"
					onClick={handleDownload}
				>
					Download <i className="fa-brands fa-markdown fa-xl"></i>
				</button>
			</div>
			<textarea
				className="flex-1 p-2 border-2 rounded-md resize-none w-full overflow-wrap break-word shadow-md"
				placeholder="Hello There!"
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
};

export default InputArea;
