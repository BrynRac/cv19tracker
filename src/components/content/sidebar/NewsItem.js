import React from 'react';

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
    </li>
  );
}
