import { ReactElement } from 'react'
import images from '@renderer/helpers/imagesImports'

const CustomImage = ({ src = '', alt = '' }: { src?: string; alt?: string }): ReactElement => {
  const srcEntry = src.split('/')
  console.log(srcEntry)
  let resolvedSrc = ''
  if(images[srcEntry[0]][srcEntry[1]]) {
    resolvedSrc = images[srcEntry[0]][srcEntry[1]]
  }

  return <img src={resolvedSrc || ''} alt={alt} className="gallery-image" />
}

export default CustomImage
