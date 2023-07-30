import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

const OutputArea = () => {
	const value = useSelector((state: RootState) => state.markdown.value);

	return (
		<div className="output-area-container">
			<div className="navbar">
				<p className="navbar-text">Preview</p>
			</div>
			<ReactMarkdown
				className="output-area"
				children={value}
				remarkPlugins={[remarkGfm]}
			/>
		</div>
	);
};

export default OutputArea;
