import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="homeContainer">
				<div className="homeBoxes">
					<div className="homeBox">
						<Link className="homeBoxLink" to="/forsale">Buy a Home</Link>
					</div>
					<div className="homeBox">
						<Link className="homeBoxLink" to="/forrent">Rent a Home</Link>
					</div>
					<div className="homeBox">
						<Link className="homeBoxLink" to="/findagent">Find an Agent</Link>
					</div>
				</div>
			</div>
			);
	}
});