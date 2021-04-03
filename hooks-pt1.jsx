import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext, LocalContext } from './context';

//themecontext etc was already made css from their file

export default function Greetings(props) {
	const [name, setName] = useState('Mar');
	const [surname, setSurname] = useState('Popping');
	const theme = useContext(ThemeContext);
	const locale = useContext(LocalContext);

//usestate is our hook function that we can use the ternary function call for CONST

	useEffect(() =>{
	  document.title = name + ' ' + surname;
	})
//UseEffect to change the title of the webpage automatically!!! 

	function handleNameChange(input) {
		setName(input.target.value);
	}

	function handleSurnameChange(input) {
		setSurname(input.target.value);
	}

	return (
		<section classname={theme}>
		  <Row label='Name'>
		  <input
		    value={name}
		    onChange={handleNameChange}
		    />
		  </Row>

		  <Row label='Surname'>
		  <input
		    value={Surname}
		    onChange={handleSurnameChange}
		    /> 
		  </Row>

		  <Row label='Language'>
		  <input
		    {locale}
		    /> 
		  </Row>
		</section>
	)
} 