import { useSelector } from 'react-redux';
import { RootState } from '../store';

const OutputArea = () => {
	const value = useSelector((state: RootState) => state.markdown.value);
	return (
		<div className="output-area">
			{value.length === 0 ? 'Hello There' : value}
		</div>
	);
};

export default OutputArea;
