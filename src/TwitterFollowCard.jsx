export const TwitterFollowCard = ({name, userName}) => {
    return(

        <article className='card-container'>
            <img 
                src="https://unavatar.io/tlecuenis" 
                alt="avatar image" 
                />
            
            <div className='description'>
                <strong>{name}</strong>
                <div className='add'>
                <span className='twitter-at'>@{userName}</span>
                <span className='twitter-follow'>te sigue</span>
                </div>
            </div>
            <button className='follow'>Seguir</button>
        
        </article>
    )
}