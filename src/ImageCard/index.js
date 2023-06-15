import './index.css'

const ImageCard = props => {
  const {imageDetails, onClickImage} = props

  const {id, thumbnailUrl} = imageDetails

  const onImageClick = () => {
    onClickImage(id)
  }

  return (
    <li className="image-card">
      <button onClick={onImageClick} className="image-btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ImageCard
