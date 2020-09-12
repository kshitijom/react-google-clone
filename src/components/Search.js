import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import './Search.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButtons = false }) {
	const [ {}, dispatch ] = useStateValue();

	const [ input, setInput ] = useState('');
	const history = useHistory();

	const search = (e) => {
		e.preventDefault();

		console.log('You hit the search btn');

		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input
		});

		history.push('/search');
	};
	return (
		<form className="Search">
			<div className="Search-input">
				<SearchIcon className="Search-inputIcon" />
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<MicIcon />
			</div>
			{!hideButtons ? (
				<div className="Search-btns">
					<Button type="submit" onClick={search} variant="outlined">
						Google Search
					</Button>
					<Button variant="outlined">I'm Feeling Lucky</Button>
				</div>
			) : (
				<div className="Search-btns">
					<Button className="Search-hiddenBtns" type="submit" onClick={search} variant="outlined">
						Google Search
					</Button>
					<Button className="Search-hiddenBtns" variant="outlined">
						I'm Feeling Lucky
					</Button>
				</div>
			)}
		</form>
	);
}

export default Search;
