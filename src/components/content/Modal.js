import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/actions/modalActions';

// ampWebUrl: "https://www.washingtonpost.com/nation/2020/07/19/coronavirus-update-us/?outputType=amp"
// categories: ["news"]
// cdnAmpWebUrl: "https://www-washingtonpost-com.cdn.ampproject.org/c/s/www.washingtonpost.com/nation/2020/07/19/coronavirus-update-us/?outputType=amp"
// excerpt: "Coronavirus infections rose in states from every region of the country over the past week, with more than a dozen states on Saturday reaching record highs in their seven-day averages for new daily cases."
// heat: 102
// images: [{…}]
// locale: "en-us"
// path: "_news/2020-07-19-coronavirus-updates-trump-dismisses-rising-coronavirus-cases-as-deaths-mount.md"
// provider: {name: "Washington Post", domain: "washingtonpost.com", images: null, publishers: null, authors: null}
// publishedDateTime: "2020-07-19T06:38:00-07:00"
// tags: ["US"]
// title: "Coronavirus updates: Trump dismisses rising coronavirus cases as deaths mount"
// topics: (2) ["Coronavirus in US", "Coronavirus"]
// type: "article"
// updatedDateTime: null

export default function Modal({ story }) {
  const dispatch = useDispatch();
  return (
    <div className="Modal">
      {story.images && (
        <a target="_blank" rel="noopener noreferrer" href={story.webUrl}>
          <img
            className="modal-image"
            alt={story.title}
            src={story.images[0].url}
          />
        </a>
      )}
      <div className="modal-text">
        <h4>{story.provider.name}</h4>
        <h3>{story.title}</h3>
        {story.provider.authors && <p>By {story.provider.authors}</p>}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '150px',
          }}
        >
          <p>{story.publishedDateTime.split('T')[0]}</p>
          <a target="_blank" rel="noopener noreferrer" href={story.webUrl}>
            Source
          </a>
        </div>
        <p> — {story.excerpt}</p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => {
            dispatch(toggleModal());
          }}
          className="modal-button"
        >
          Close
        </button>
        <div style={{display:"flex"}}>
          <h4>{story.heat}</h4>
          <span
            style={{
              marginLeft: '10px',
            }}
            role="img"
            aria-label="heat"
          >
            🔥
          </span>
        </div>
      </div>
    </div>
  );
}
