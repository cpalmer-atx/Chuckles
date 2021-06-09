import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

export const Approval = ({ thumbsUp, thumbsDown }) => {
  return (
    <div className="approval-container">
      <div>
        <button className="like-btn"
                onClick={thumbsUp} >
          <GoThumbsup />
        </button>
      </div>
      <div>
        <button className="dislike-btn"
                onClick={thumbsDown} >
          <GoThumbsdown />
        </button>
      </div>
    </div>
  )
}
