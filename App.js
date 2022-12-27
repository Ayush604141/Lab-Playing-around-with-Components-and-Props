import "./App.css";
import lake from "./image/lake.JPG";
import GallaryFooter from "./components/GallaryFooter";
import HeaderComponent from "./components/GalleryHeader";
import GetImage from "./components/imageData";

export const imageData = [
  {
    id: 1,
    img: lake,
  },
  {
    id: 2,
    img: lake,
  },
  {
    id: 3,
    img: lake,
  },
  {
    id: 4,
    img: lake,
  },
];

function App() {
  return (
    <div>
      {/* adding header component */}
      <HeaderComponent />
      {/* Adding image element */}
      <GetImage />
      {/* adding footer component */}
      <GallaryFooter />
    </div>
  );
}

export default App;
