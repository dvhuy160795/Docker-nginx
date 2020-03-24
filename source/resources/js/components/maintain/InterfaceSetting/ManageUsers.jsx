import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

import FormUser from './FormUser';
import ListUsers from './ListUsers';

class ManageUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	date: new Date()
    };

  }

  componentDidMount() {
  }

  componentWillUnmount() {  }

  render() {
  	const mystyle = {
      margin: 1,
    };

    return (
    	<div>
    		<Grid container spacing={2}>
	            <Grid item xs={5}>
                    <Grid container id={"huydv"} justify="center" spacing={2}>
                        <div>
                            <FormUser/>
                            <div id={"error"}></div>
                        </div>
                    </Grid>
                </Grid>
	            <Grid item xs={5}>
	                <Grid container id={"huydv"} justify="center" spacing={2}>
						<ListUsers/>
	                </Grid>
	            </Grid>
        	</Grid>
    	</div>
    );
  }
}

export default ManageUsers;