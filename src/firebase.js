import firebase from 'firebase/app';
import '@firebase/database';
const firebaseConfig = {
	apiKey: 'AIzaSyC9O-Cnnm5sBDGlcfGPc0oWQjA2-pMOrwg',
	authDomain: 'revolution-1x1.firebaseapp.com',
	databaseURL: 'https://revolution-1x1.firebaseio.com',
	projectId: 'revolution-1x1',
	storageBucket: 'revolution-1x1.appspot.com',
	messagingSenderId: '779744556471',
	appId: '1:779744556471:web:28e6cd98d83fc44aabe432',
	measurementId: 'G-X2X53JN2LF'
};
try {
	firebase.initializeApp(firebaseConfig);
} catch (e) {
	console.log(e);
}
// Get a reference to the database service
const database = firebase.database();
console.log('database', database);

const writeData = (data) => {
	console.log('writing', data);
	firebase.database().ref('buttons').push(data);
};
const getButtons = () => {
	const fields = 'name,line1,line2,city,state,zip,email,date'.split(',');

	const buttonRef = database.ref('buttons').limitToLast(10);
	buttonRef.once('value', (snapshot) => {
		snapshot.forEach((childSnapshot) => {
			const key = childSnapshot.key;
			const data = childSnapshot.val();
			// console.log("key",key)
			// console.log("data",data)
			const line = fields.map((field) => data[field]).join('|');
			console.log('line', line);

			// ...
		});
	});
};
// writeData({ id: 2,
// 	 name: 'name',
// 	  email: 'mikewolf@mike-wolf.com' });
export { getButtons, writeData };
