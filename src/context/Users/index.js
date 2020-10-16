import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [users, setUsers] = useState([
		{
			id: 1,
			firstname: 'John',
			gender: 'Male',
			location: 'London, UK',
			email: 'johndoe@gmail.com',
			password: '123',
		},
		{
			id: 2,
			firstname: 'Jane',
			gender: 'Female',
			location: 'London, UK',
			email: 'janedoe@gmail.com',
			password: '123',
		},
		{
			id: 3,
			firstname: 'Lisa',
			gender: 'Femail',
			location: 'San Francisco, CA, USA',
			email: 'lisa@gmail.com',
			password: '123',
		},
		{
			id: 3,
			firstname: 'Lisa',
			gender: 'Femail',
			location: 'San Francisco, CA, USA',
			email: 'lisa@gmail.com',
			password: '123',
		},
		{
			id: 3,
			firstname: 'Lisa',
			gender: 'Femail',
			location: 'San Francisco, CA, USA',
			email: 'lisa@gmail.com',
			password: '123',
		},
		{
			id: 3,
			firstname: 'Lisa',
			gender: 'Femail',
			location: 'San Francisco, CA, USA',
			email: 'lisa@gmail.com',
			password: '123',
		},
	]);

	return (
		<UserContext.Provider value={[users, setUsers]}>
			{props.children}
		</UserContext.Provider>
	);
};
