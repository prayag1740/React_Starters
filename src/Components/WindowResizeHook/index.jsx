import React from 'react'
import useWIndowResize from './useWIndowResize'

export default function WindowResizeHook() {

    const windowSize = useWIndowResize();
    const {width, height} = windowSize ;

  return (
    <div>
        <h1>Using Window Resize hook</h1>
        <p>Width is {width}</p>
        <p>Height is {height}</p>
    </div>
  )
}
