export default function Entry(props){

    return(
    
            <article className="card">
            <p className="title">{props.title}</p>


            <div className="price-container">
                <p className="price">
                {typeof props.price === "number" ? `$${props.price}` : props.price}
            </p>
            <p className="user">{props.user}</p>
            </div>
            
            <p className="desc">{props.desc}</p>


            <div className="specs-container">
            <p className="projects"><span>Project</span><span>{props.projects}</span></p>
            <p className="postgresDatabases"><span>Postgres databases</span><span>{props.postgresDatabases}</span></p>
            <p className="bandwidth"><span>Bandwidth</span><span>{props.bandwidth}</span></p>
            <p className="buildMinutes"><span>Build minutes</span><span>{props.buildMinutes}</span></p>

            </div>
        
            <button className="buttonText">{props.buttonText}</button>
            
        </article>
        
        
    )
}