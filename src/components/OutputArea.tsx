import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const OutputArea = () => {
	const value = useSelector((state: RootState) => state.markdown.value);
	return <ReactMarkdown className="output-area" children={value} />;
};

export default OutputArea;
