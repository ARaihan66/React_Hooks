import React from 'react';
import { DataFetch } from './Custom_Hook'

const Main = () => {
  const { isLoading, data, error } = DataFetch("https://jsonplaceholder.typicode.com/photos");
  return (
    < div >
      {isLoading && <h4>Data is loading.....</h4>}
      {data && data.map((item) => {
        return <h5>{item.title}</h5>
      })}
      {error && <h4>{error}</h4>}
    </div >
  )
}

export default Main
