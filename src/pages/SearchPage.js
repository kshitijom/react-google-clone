import React from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import Search from '../components/Search';
import Response from '../response';
import { useStateValue } from '../StateProvider';
import SearchIcon from '@material-ui/icons/Search';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import API_KEY from '../keys';
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
	const [ { term }, dispatch ] = useStateValue();

	//LIVE API CALL
	const { data } = useGoogleSearch(term);

	//TEST or MOCK API CALL -- this way the quota for 100 reqs is reserved
	// const data = Response;

	console.log(data);

	return (
		<div className="SearchPage">
			<div className="SearchPage-header">
				<Link to="/">
					<img
						className="SearchPage-logo"
						src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
						alt=""
					/>
				</Link>

				<div className="SearchPage-headerBody">
					<Search hideButtons />
					<div className="SearchPage-options">
						<div className="SearchPage-optionsLeft">
							<div className="SearchPage-option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>
							<div className="SearchPage-option">
								<BookOutlinedIcon />
								<Link to="/books">Books</Link>
							</div>
							<div className="SearchPage-option">
								<ImageOutlinedIcon />
								<Link to="/images">Images</Link>
							</div>
							<div className="SearchPage-option">
								<DescriptionOutlinedIcon />
								<Link to="/news">News</Link>
							</div>
							<div className="SearchPage-option">
								<VideoLibraryOutlinedIcon />
								<Link to="/videos">Videos</Link>
							</div>
							<div className="SearchPage-option">
								<MoreVertIcon />
								<Link to="/more">More</Link>
							</div>
						</div>

						<div className="SearchPage-optionsRight">
							<div className="SearchPage-option">
								<Link to="/settings">Settings</Link>
							</div>
							<div className="SearchPage-option">
								<Link to="/tools">Tools</Link>
							</div>
						</div>
					</div>
				</div>
      </div>
      {term && (
        <div className="SearchPage-results">
          <p className='SearchPage-resultCount'>
            About {data?.searchInformation.formattedTotalResults} results (in 0.048 seconds) for {term}
          </p>

          {data?.items.map(item => (
            <div className='SearchPage-result'>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img
                    className='SearchPage-resultImg'
                    src={item.pagemap?.cse_image[0]?.src}
                    alt=''
                  />
                )}
                {item.displayLink}
              </a>
              <a className='SearchPage-resultTitle' href={item.title}>
                <h2>{item.title}</h2>
              </a>
              <p className='SearchPage-resultSnippet'>
                {item.snippet}
              </p>
            </div>
          ))}
        </div> 
      )}
		</div>
	);
}

export default SearchPage;
