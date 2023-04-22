// Write your code here.
import './index.css'

const Cards = props => {
  const {list} = props
  const {title, description, imgUrl, className} = list
  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="size" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Cards
