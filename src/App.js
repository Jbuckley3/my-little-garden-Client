// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react';
import { v4 as uuid } from 'uuid';

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert';
import Header from './components/shared/Header';
import Main from './components/Main/Main';


const App = () => {

	const [user, setUser] = useState(null);
	const [msgAlerts, setMsgAlerts] = useState([]);

	console.log('user in app', user);
	console.log('message alerts', msgAlerts);
	const clearUser = () => {
		console.log('clear user ran');
		setUser(null);
	};

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id));
		});
	};

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid();
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			);
		});
	};

	return (
		<Fragment>
			<Header user={user} />
			<Main msgAlert={msgAlert} user={user} setUser={setUser} clearUse={clearUser} />
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	);
};

export default App;
