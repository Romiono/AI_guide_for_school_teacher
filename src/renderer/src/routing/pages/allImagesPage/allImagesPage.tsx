import { ReactElement } from 'react'
import images from '../../../helpers/imagesImports'
const AllImagesPage = (): ReactElement => {
  return (
    <div>
      <div className="image-gallery">
        {Object.entries(images).map(([category, categoryImages]) => (
          <div key={category} className="category">
            <h2>{category.toUpperCase()}</h2>
            <div className="images-grid">
              {Object.entries(categoryImages).map(([name, imgSrc]) => (
                <div key={`${category}-${name}`} className="image-item">
                  <img
                    src={imgSrc}
                    alt={`${category} - ${name}`}
                    className="gallery-image"
                  />
                  <p className="image-name">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllImagesPage
