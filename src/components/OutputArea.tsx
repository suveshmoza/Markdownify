import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

const OutputArea = () => {
	const value = useSelector((state: RootState) => state.markdown.value);

	return (
		<div className="flex flex-col h-full bg-gray-200">
			<div className="flex justify-between items-center px-2 py-3 mb-[1px]">
				<p className="text-gray-500">Editor</p>
			</div>
			<ReactMarkdown
				className="flex-1 bg-white p-2 border-2 rounded-md w-full overflow-wrap break-all shadow-md overflow-y-scroll"
				children={value}
				remarkPlugins={[remarkGfm]}
			/>
		</div>
	);
};

export default OutputArea;
