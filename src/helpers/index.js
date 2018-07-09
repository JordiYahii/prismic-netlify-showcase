import React from 'react'
import Loadable from 'react-loadable'

function loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  } else {
    return null
  }
}

export const asyncImport = importFn => Loadable({
  loader: () => importFn,
  delay: 200,
  timeout: 10000,
  loading
})
