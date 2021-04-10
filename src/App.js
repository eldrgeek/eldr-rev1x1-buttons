import './styles.css';
import * as React from 'react';
import emailjs from 'emailjs-com';
import buttons from './buttons';
import { Button, Flex, Center, Square, Text, Box } from '@chakra-ui/react';
import { getButtons } from './firebase';
export default function App() {
	const sendMail = (values) => {
		emailjs
			.send(
				'service_xxcai49',
				'template_h678mmq',
				values,
				'user_wR2kAffqBvmMh8Mp2Mzoj'
			)
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
				},
				function (error) {
					console.log('FAILED...', error);
				}
			);
	};
	return (
		<div className="App">
			<h1>Send Email</h1>
			<Button onClick={getButtons}>Test</Button>
			<div>
				{buttons.map((button, i) => {
					return i < 8 || i > 16 ? null : (
						<Flex key={i} m="1.5" border="1px solid black" color="gray.800">
							<Center w="40px">
								<Text>{i}</Text>
							</Center>
							|
							<Box flex="1">
								<Text pl="4" align="left">
									{button.name}
								</Text>
							</Box>
						</Flex>
					);
				})}
			</div>
		</div>
	);
}
