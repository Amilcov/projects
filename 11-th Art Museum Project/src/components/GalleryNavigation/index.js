import { NavLink, Link } from 'react-router-dom'; 


const GalleryNavigation = (museumGalleries) => {
    const { galleries } = museumGalleries;
    console.log('____________NG galleries',galleries);
    const listGalleries = galleries.map( (gallery) => <li key={gallery.id}> <NavLink className="active" to={`/gallery/${gallery.id}`}> {gallery.name} </NavLink></li>);
    return (
      <nav> 
          <Link to="/">Home</Link>
          <h1> Galleries </h1>    
          <ul>{listGalleries}</ul>
      </nav>
    )
}; 

export default GalleryNavigation;