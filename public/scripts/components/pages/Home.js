import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="homeContainer">
				<div className="homeBoxes">
					<div className="homeBox">
						<Link className="homeBoxLink" to="/listings">Find a Home</Link>
					</div>
					<div className="homeBox">
						<Link className="homeBoxLink" to="/agents">Find an Agent</Link>
					</div>
				</div>
			</div>
			);
	}
});