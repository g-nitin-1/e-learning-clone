import React from 'react'
import Button from '../../Button';

export default function ErrorBoundaries({hasError=false, handleError, message="something went wrong", children}) {

  if(hasError) {
    return (
      <div className="alert alert-danger">
        <p className="mr-1">{message}</p>
        <Button text={"Try again"} onClick={handleError}/>
      </div>
    )
  }
  return children;
}
