import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

const OutputArea = () => {
	const value = useSelector((state: RootState) => state.markdown.value);

	return (
		<div className="output-area-container">
			<div className="navbar">
				<button className="navbar-button">
					Download <i className="fa-solid fa-file-pdf fa-xl"></i>
				</button>
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
