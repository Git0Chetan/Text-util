import React from 'react'

function Alert(props) {
  return (
    <div>
        <div>
            {/* we can use props.alert && infront of below command to escape from null commands */}
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong> {props.alert.type}</strong> {props.alert.msg}
            </div>
        </div>
    </div>
  )
}

export default Alert
