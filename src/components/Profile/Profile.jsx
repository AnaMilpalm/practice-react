import s from './Profile.module.css'
const Profile = ({ user }) => {
    return (
        <div className={s.wrapper}>
            <img src={user.image}/>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>{user.email}</p>
            <p>{user.age}</p>
        </div>
    )
}

export default Profile;