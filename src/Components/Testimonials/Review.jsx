import { BiStar } from 'react-icons/bi'
import './review.css'
export const Review = ({
  name,
  date,
  rating,
  text,
  avatarUrl,
}) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="avatar-container">
          {avatarUrl ? (
            <img src={avatarUrl} alt={`${name}'s avatar`} className="avatar" />
          ) : (
            <div className="avatar-placeholder">{name.charAt(0)}</div>
          )}
        </div>
        <div className="reviewer-info">
          <h3 className="reviewer-name">{name}</h3>
          <p className="review-date">{date}</p>
        </div>
      </div>
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <BiStar
            key={i}
            size={16}
            className={i < rating ? 'star' : 'star empty'}
          />
        ))}
      </div>
      <p className="review-text">{text}</p>
    </div>
  )
}
