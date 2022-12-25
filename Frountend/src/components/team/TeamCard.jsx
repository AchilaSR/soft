import React from "react"
import { team } from "../../dummydata"
import { useHistory} from "react-router-dom"

const TeamCard = () => {

  let history = useHistory();

  const Tochat =  (event) => {
    sessionStorage.setItem("Teacherid",event)
    history.push(`/studentchat/${event}`)
    window.location.reload();
    console.log(event);
  }

  return (
    <>
      {team.map((val) => (
        <div className='items shadow' onClick={() => Tochat(val.Id)} >
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
      
          <a href='https://web.facebook.com/profile.php?id=100088591761373'>
            <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href='https://instagram.com'>
            <i className='fab fa-instagram icon'></i></a>
            <a href='https://twitter.com'>
            <i className='fab fa-twitter icon'></i></a>
            <a href='https://youtube.com'>
            <i className='fab fa-youtube icon'></i>
            </a>
            <a href='https://tiktok.com'>
            <i className='fab fa-tiktok icon'></i>
            </a>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
