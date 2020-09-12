import React from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import Search from '../components/Search';
import './Homepage.css';

function Homepage() {
	return (
		<div>
			<div className="Homepage-header">
				<div className="Homepage-headerLeft">
					<Link to="/about">About</Link>
					<Link to="/store">Store</Link>
				</div>
				<div className="Homepage-headerRight">
					<Link to="/gmail">Gmail</Link>
					<Link to="/images">Images</Link>
					<AppIcon />
					<Avatar />
				</div>
			</div>
			<div className="Homepage-body">
				<img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
        <div className='Homepage-inputContainer'>
          <Search />
        </div>
      </div>
		</div>
	);
}

export default Homepage;
