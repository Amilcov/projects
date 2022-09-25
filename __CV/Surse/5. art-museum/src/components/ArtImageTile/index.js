import { Link, useParams } from 'react-router-dom';
import './ArtImageTile.css';


const ArtImageTile = (selectedGallery) => {

  const { gallery } = selectedGallery;
  const { artId, galleryId } = useParams();
  
  const selectedArt = gallery.objects.find(art => art.id == artId);
  const listImage = selectedArt.images.map(pic => <img key={pic.idsid} src={`${pic.baseimageurl}`} className="fit"/> )

  return (
    <div> 
        <h4> Selected art to view: {selectedArt.title}</h4>
        {listImage}
        <Link to={`/gallery/${galleryId}`}> Go to: {gallery.name} </Link>
    </div>
  )
  
};

export default ArtImageTile;