import React from 'react';
import { Link } from 'react-router';

class Years extends React.Component {
	constructor() {
		super();
   	}

   render() {
      return (
         <div>
         	<ul>
				 {this.props.years.map(function(value) {
	                return <li key={value}>{value}</li>
	            })}
			</ul>
         </div>
      );
   }
}

export default Years;