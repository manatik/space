/* eslint-disable */
import React, { useState } from 'react'

const ImageLoader = props => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
      <img
          onLoad={() => { setIsLoaded(true) }}
          src={props.src}
          className={props.classname}
          style={{ opacity: isLoaded ? 1 : .5 }}
      />
  )
}
export default ImageLoader
