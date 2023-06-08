import { useState } from "react"

export const TwitterFollowCard = ({name, userName}) => {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'follow is-following'
    : 'follow'
    //para obtener imagen dinámica, se debe declarar
    const imageSrc = `https://unavatar.io/${userName}`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(

        <article className='card-container'>
            <div className="spacing">
                <img 
                    src={imageSrc} 
                    alt="avatar image" 
                    />
                <div className='description'>
                    <strong>{name}</strong>
                    <div className='add'>
                        <span className='twitter-at'>@{userName}</span>
                        {isFollowing ? <span className='twitter-follow'>Te sigue</span>: null}
                    </div>
                </div>
            </div>
            
            <button className={buttonClassName} onClick={handleClick}>
                <span className="follow-text">{text}</span>
                <span className="follow-unfollow">Dejar de seguir</span>
            </button>
        
        </article>
    )
}