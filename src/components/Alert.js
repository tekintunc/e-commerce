import React from 'react'

const Alert = ({message}) => { // Burada props methodu kullanılmıştır. Alert componenti her çağırıldığında, message propety si ne 
  // ne yazıyorsa o render edilir.Yani alarm yazısı o olur.
  return (
    <div 
    className="alert alert-primary" 
    role="alert">
  {message}
  </div>
  )
}

export default Alert;