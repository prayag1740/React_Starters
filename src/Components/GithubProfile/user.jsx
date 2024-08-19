import React from 'react'
import "./gitprofile.css"

export default function User({userData}) {

    const date = new Date(userData.joined)
    const dateformated = date.getDate() + "/" + date.getMonth() +"/" + date.getFullYear();

  return (
    <div className='user-container'>
        <div className='user-data'>
            <img src={userData.image}></img>
            <a href={userData.url}>{userData.username}</a>
            <span>User joined on : {dateformated}</span>
            <b>Public Repos : {userData.public_repos}</b>
            <b>Followers : {userData.followers}</b>
            <b>Following : {userData.following}</b>
        </div>
    </div>
  )
}
