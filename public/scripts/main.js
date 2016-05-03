console.log('js working');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Buyers from './components/pages/Buyers';
import Sellers from './components/pages/Sellers';
import Investors from './components/pages/Investors';


const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/buyers" component={Buyers} />
			<Route path="/sellers" component={Sellers} />
			<Route path="/investors" component={Investors} />
			<Route path="/listings" component={Listings} />
			<Route path="/homesearch" component={HomeSearch} />
			<Route path="/rentals" component={Rentals} />
			<Route path="/stayinformed" component={StayInformed} />
			<Route path="/austininfo" component={AustinInfo} />
			<Route path=""
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
