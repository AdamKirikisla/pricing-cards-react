export default function Entry(props){

    return(
        <article className="card">
            <p className="title">{props.title}</p>
            <p className="price">{props.price}</p>
            <p className="user">{props.user}</p>
            <p className="desc">{props.desc}</p>
            <p className="projects">{props.projects}</p>
            <p className="postgresDatabases">{props.postgresDatabases}</p>
            <p className="bandwidth">{props.bandwidth}</p>
            <p className="buildMinutes">{props.buildMinutes}</p>
            <button className="buttonText">{props.buttonText}</button>
            
        </article>
    )
}