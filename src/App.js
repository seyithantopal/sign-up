import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './context/Users';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Dashboard from './components/Dashboard/Dashboard';
import HeaderSection from './components/HeaderSection/HeaderSection';
import NotFound from './components/NotFound/NotFound';

function App() {
	return (
		<UserProvider>
			<Router>
				<HeaderSection />
				<Switch>
					<Route path="/" exact component={SignUpForm} />
					<Route path="/dashboard" component={Dashboard} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</UserProvider>
	);
}

export default App;
