import React, {useState } from 'react'
import "./gitprofile.css"
import User from './user';

export default function GitHubProfile() {

    const [userData, setUserData] = useState({});
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getUserGithubData = async (userName) => {
        setLoading(true) ;
        try {
            const url = `https://api.github.com/users/${userName}`;
            const response = await fetch(url) ;
            const data = await response.json()

            setUserData({id: data.id, image: data.avatar_url, url:data.url, followers:data.followers, following: data.following, joined: data.created_at, username: userName, public_repos:data.public_repos })
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error);
            console.log(error)
        }
    }

    const handleUserName = (event) => {
        setUserName(event.target.value)
    }

  return (
    <div className='git-container'>
        <div className='search-data'>
            <input type='text' value={userName} onChange={handleUserName} placeholder='Search Github Username' />
            <button onClick={() => getUserGithubData(userName)}>Search</button>
        </div>

        {
            userName !== '' ? <User userData={userData} /> : null
        }
    </div>
  )
}
