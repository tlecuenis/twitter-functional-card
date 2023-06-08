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
                        <span className='twitter-follow'>{isFollowing ? 'Te sigue' : null}</span>
                    </div>
                </div>
            </div>
            
            <button className={buttonClassName} onClick={handleClick}>{text}</button>
        
        </article>
    )
}