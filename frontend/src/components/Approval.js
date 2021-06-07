import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

export const Approval = ({ thumbsPlaceholder }) => {
  return (
    <div className="approval-container">
      <div>
        <button className="like-btn"
                onClick={thumbsPlaceholder} >
          <GoThumbsup />
        </button>
      </div>
      <div>
        <button className="dislike-btn"
                onClick={thumbsPlaceholder} >
          <GoThumbsdown />
        </button>
      </div>
    </div>
  )
}
