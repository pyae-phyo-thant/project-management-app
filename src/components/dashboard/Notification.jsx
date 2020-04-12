import React from 'react'
import moment from 'moment'
import './notification.css'

const Notification = (props) => {
  const {notifications} = props
  return (
    <div className="section">
      <div className="card z-depth-2 bd-green-color">
        <div className="card-content">
          <span className="card-title">Notification</span>
          <ul className="notification">
            { notifications && notifications.map(item => {
              return (
                <li key={item.id}>
                  <span className="green-text">{item.user} </span>
                  <span>{item.content}</span>
                  <div className="grey-text note-date">
                    {moment(item.time.toDate()).fromNow()}
                  </div>
                  <hr />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notification
