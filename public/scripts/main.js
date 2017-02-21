// Shameless code plug:
// Don't forget to call me if you need to buy or sell a home!
// I'm great at doing both!!!
import filepicker from 'filepicker-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import ListingsPage from './components/pages/ListingsPage';
import ListingDetails from './components/pages/ListingDetails';
import ListingPhotos from './components/pages/ListingPhotos';
import Dashboard from './components/pages/Dashboard';
import NewListing from './components/pages/NewListing';
import EditListing from './components/pages/EditListing';
import AgentsPage from './components/pages/Agents';
import AgentDetails from './components/pages/AgentDetails';

filepicker.setKey('AWEM8RWC9TUScrspS0Rdiz');

function onEnter () {
	window.scroll(0, 0);
};

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route onEnter={onEnter} path="/listings" component={ListingsPage} />
			<Route onEnter={onEnter} path="/listings/:listingId/details" component={ListingDetails} />
			<Route onEnter={onEnter} path="/listings/:listingId/details/photos" component={ListingPhotos} />
			<Route onEnter={onEnter} path="/dashboard" component={Dashboard} />
			<Route onEnter={onEnter} path="/dashboard/newlisting" component={NewListing} />
			<Route onEnter={onEnter} path="/dashboard/editlisting" component={EditListing} />
			<Route onEnter={onEnter} path="/agents" component={AgentsPage} />
			<Route onEnter={onEnter} path="/agents/:agentId/details" component={AgentDetails} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));