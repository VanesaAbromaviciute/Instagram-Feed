import React from "react";
import { useState } from "react";

export function InstagramFeedCard({ userName, children }) {
  const [isLiked, setIsLiked] = useState(false);
  const buttonClassName = isLiked
  ? "ig-feedCard-button isLiked"
  : "ig-feedCard-button"

  const handleClick = () => {
    setIsLiked(!isLiked)
  }
  return (
    <article className="ig-feedCard">
      <header className="ig-feedCard-header">
        <img className="ig-feedCard-avatar" src={`https://unavatar.io/${userName}`} alt="user avatar" />
        <div className="ig-feedCard-info">
          <strong className="ig-feedCard-UserName">{children}</strong>
          <span className="ig-feedCard-infoUserName">@{userName}</span>
        </div>
        <img className="ig-feedCard-img" src={`https://unavatar.io/${userName}`} alt="image published" />
      </header>
      <button className={buttonClassName} onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
    </article>
  );
}
