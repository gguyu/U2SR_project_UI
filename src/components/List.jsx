import React from 'react'

export default function List({messages}) {

  return (
    <ul>
        {messages.map((item) => (
            <li>{item}</li>
        ))}
    </ul>
  );
}
