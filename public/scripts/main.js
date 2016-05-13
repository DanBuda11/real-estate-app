import filepicker from 'filepicker-js';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import ListingsPage from './components/pages/ListingsPage';
import ListingDetails from './components/pages/ListingDetails';
import ListingPhotos from './components/pages/ListingPhotos';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import NewListing from './components/pages/NewListing';
import EditListing from './components/pages/EditListing';
import AgentsPage from './components/pages/Agents';
import AgentDetails from './components/pages/AgentDetails';

filepicker.setKey('AWEM8RWC9TUScrspS0Rdiz');

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/listings" component={ListingsPage} />
			<Route path="/listings/:listingId/details" component={ListingDetails} />
			<Route path="/listings/:listingId/details/photos" component={ListingPhotos} />
			<Route path="/auth/register" component={Register} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/dashboard/newlisting" component={NewListing} />
			<Route path="/dashboard/editlisting" component={EditListing} />
			<Route path="/agents" component={AgentsPage} />
			<Route path="/agents/:agentId/details" component={AgentDetails} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
