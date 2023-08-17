import { useEffect, useState } from "react";

export function useUser () {
	const [user, setUser] = useState();
	
	useEffect(()=> {
		const userName = localStorage.getItem('user')
		if (userName) {
			setUser(userName);
			return;
		}

		const handleLoadStart = () => {
				const firtsName = prompt('Enter your name');
				localStorage.setItem('user', firtsName);
				setUser(firtsName);
		};
		
		window.addEventListener('load', handleLoadStart);
		return () => {
			window.removeEventListener('load', handleLoadStart);
		};
  },[]);
	return { user };
}