import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/actions/modalActions';

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
        <hr style={{ float: 'right', width: '10%' }} />
        <h4 style={{ fontFamily: "'Lato', san-serif" }}>
          {story.provider.name}
        </h4>
        <h3 style={{ float: 'left' }}>{story.title}</h3>
        {story.provider.authors && <p>By {story.provider.authors}</p>}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '150px',
            paddingTop: '0.5rem',
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
        <div style={{ display: 'flex' }}>
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
