import { NavLink, Link, Route, Routes, useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/index.js';
import './GalleryView.css';


 const GalleryView = (museumGalleries) => {
   const { galleries } = museumGalleries;
   const { galleryId } = useParams();

   const gallerySelected = galleries.find(gallery => gallery.id == galleryId);
   
   let listArt = gallerySelected.objects.map(objectArt => {
      let artId = objectArt.id; 
      return <li key={artId} className="liSpaced"> 
               <NavLink to={`/gallery/${galleryId}/art/${artId}`}> {objectArt.title} </NavLink> 
               <br />
               <img src={`${objectArt.primaryimageurl}`} alt={objectArt.title} className="fit"/> 
               <br />
            </li>
                     
  });
  
  return(
    <div>
      <h3> Selected Gallery to view: {gallerySelected.name}</h3>

      <Routes>
        <Route path="/" element={<ul> {listArt} </ul>}  />
        <Route path="art/:artId" element={<ArtImageTile gallery={gallerySelected}/>} /> 
      </Routes>

      <Link to="/">Go to Galleries</Link>
           
    </div>
  );
       
};

export default GalleryView;