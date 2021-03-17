import  './ProfilePicture.css'
import profile from './profile.png'

const ProfilePicture = (props) =>{
    return (
        <section>
            <img src={profile} id="profilePic"/>
        </section>
    )
}

export default ProfilePicture