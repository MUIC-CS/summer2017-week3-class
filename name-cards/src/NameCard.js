import React, { Component } from 'react';

export default function NameCard({name, gender}) {
  return (
    <div>
      <img
        alt={name}
        src={`https://avatars.dicebear.com/v1/${gender}/${name}/200.png`}
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
