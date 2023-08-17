import { useEffect, useRef, useState } from "react";
export function useControlateInput (task) {
  const [error, setError] = useState(null);

	const isFirstInput = useRef(true);

	useEffect(() => {
		if (isFirstInput.current === true) {
			isFirstInput.current = false
			return
		};

		if (task === '') {
			setError('You need to complete this field')
			return
		}; 

		if (task.length < 3) {
			setError('The field need to have mora than 3 characters')
			return
		}; 

		if (task.match(/^\d+$/)) {
			setError('There are just numbers')
			return
		}; 

		setError(null);
	}, [task]);

	return { error };
}