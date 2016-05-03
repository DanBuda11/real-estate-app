console.log('js working');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import ForSaleList from './components/pages/ForSaleList';
import ForRentList from './components/pages/ForRentList';
import ForSaleDetails from './components/pages/ForSaleDetails';
import ForRentDetails from './components/pages/ForRentDetails';
import ForSalePhotos from './components/pages/ForSalePhotos';
import ForRentPhotos from './components/pages/ForRentPhotos';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import NewListing from './components/pages/NewListing';
import EditListing from './components/pages/EditListing';
import NewRental from './components/pages/NewRental';
import EditRental from './components/pages/EditRental';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/forsale" component={ForSaleList} />
			<Route path="/forrent" component={ForRentList} />
			<Route path="/forsale/details" component={ForSaleDetails} />
			<Route path="/forrent/details" component={ForRentDetails} />
			<Route path="/forsale/details/photos" component={ForSalePhotos} />
			<Route path="/forrent/details/photos" component={ForRentPhotos} />
			<Route path="/register" component={Register} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/dashboard/newlisting" component={NewListing} />
			<Route path="/dashboard/editlisting" component={EditListing} />
			<Route path="/dashboard/newrental" component={NewRental} />
			<Route path="/dashboard/editrental" component={EditRental} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));
			// <Route path="/stories/:categoryId" component={CategoryPage} onEnter={requireAuth}/>
			// <Route path="/stories" component={Stories} onEnter={requireAuth}/>
			// <Route path="/stories/:storyId/details" component={Details} onEnter={requireAuth}/>
			// <Route path="/stories/:storyId/read" component={Read} onEnter={requireAuth}/>
			// <Route path="/login" component={Login}/>
			// <Route path="/add-user" component={Admin}/>
