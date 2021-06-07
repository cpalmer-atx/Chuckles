import { GoThumbsup, GoThumbsdown } from 'react-icons/go';

export const Approval = () => {
  return (
    <div className="approval-container">
      <div>
        <button className="like-btn">
          <GoThumbsup />
        </button>
      </div>
      <div>
        <button className="dislike-btn">
          <GoThumbsdown />
        </button>
      </div>
    </div>
  )
}
