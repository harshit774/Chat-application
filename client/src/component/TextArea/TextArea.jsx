import React from 'react';
import MaterialIcon from 'material-icons-react';
import './textArea.css';

const TextArea = ({ users })=> (
 <div className="textArea">
    <div>
      <h1>Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      {/* <h2>Created with <span role="img" aria-label="emoji"> ❤️ </span> By Ritik</h2> */}
      {/* <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2> */}
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <MaterialIcon icon="fiber_manual_record" color="#32CD32" />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
)

export default TextArea;