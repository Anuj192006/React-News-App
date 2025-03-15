import Image from "../assets/news.png";
const Newsitem = ({title, description,src,url}) => {
  return (
<div className="bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:Image} style={{height:"200px" ,width:"330px"}} className="card-img-top" alt="Image not Available"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,51)}</h5>
    <p className="card-text">{description? description.slice(0,91): "This is a latest news go on read more to get to know more about it!"}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default Newsitem
