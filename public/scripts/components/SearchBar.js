import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Enter search terms"/>
					<input type="submit" value="Search"/>
					<input type="button" value="Clear"/>
				</form>
			</div>
			);
	}
});