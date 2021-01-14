import React from 'react'

function DateTime() {
  const date = new Date()
  return (
    
    <div className="date-time">
      {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
    </div>
  )
}

export default DateTime
