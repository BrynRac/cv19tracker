import React from 'react';

export default function NewsItem({ story, clickHandler }) {
  return (
    <li className="news-item" onClick={() => clickHandler(story)}>
      <div>
        <div>
          <p className="news-item-date">
            {story.publishedDateTime.split('T')[0]}
          </p>
          <h3 className="news-item-provider">{story.provider.name}</h3>
        </div>
        <p className="news-item-title">{story.title}</p>
      </div>
      {story.images && <p>Images available</p>}
    </li>
  );
}
