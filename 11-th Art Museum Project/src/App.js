import { Routes, Route, Outlet} from 'react-router-dom';
import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation/index.js';
import GalleryView from './components/GalleryView/index.js'

function App() {

  return (
    <div className="active-page">
       <h1>Hardvard Art museum</h1>
       <GalleryNavigation galleries={harvardArt.records} />
     
       <Routes>
           <Route path="/gallery/:galleryId/*" element={<GalleryView galleries={harvardArt.records} />} /> 

           <Route path="/" element={  <div>
                                        <p> Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
                                       </div>
                                    }                           
           />
           <Route path="*" element={<div> <p> Page not found</p></div>} />
        </Routes>     
         
    </div>
  );
}

export default App;
