import React from 'react';
import './App.css'

export default function NameCard({name, gender}) {
  return (
    <div className="inline-flex name-card">
      <img
        alt={name}
        src={`https://avatars.dicebear.com/v1/${gender}/${name}/100.png`}
      />
      <div>
        <div>
          Name: {name}
        </div>
        <div>
          Age: 23
        </div>
        <div>
          Favorite Food: KFC
        </div>
      </div>
    </div>
  )
}
