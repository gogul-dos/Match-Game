import '../App.css'

const ThumbnailItem = ({image, imageSelected}) => {
  const handleImageClick = () => {
    imageSelected(image)
  }

  return (
    <li key={image.id}>
      <button
        onClick={handleImageClick}
        type="button"
        className="thumbnail-image-button"
      >
        <img
          src={image.thumbnailUrl}
          className="thumbnail-image"
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
