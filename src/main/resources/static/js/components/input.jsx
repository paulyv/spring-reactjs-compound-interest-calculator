import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Input extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
			<div>
				<TextField floatingLabelText={this.props.label} onBlur={this.props.onChange} defaultValue={this.props.value} />
			</div>
			</MuiThemeProvider>
			);
			
	}
}

export default Input;