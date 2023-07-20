import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { updateValue } from '../features/markdown/markdownSlice';
import { ChangeEvent } from 'react';

const InputArea = () => {
	const value = useSelector((state: RootState) => state.markdown.value);
	const dispatch = useDispatch();
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(updateValue(e.target.value));
	};

	return (
		<textarea
			className="input-text-area"
			placeholder="Hello There!"
			value={value}
			onChange={handleChange}
		/>
	);
};

export default InputArea;
