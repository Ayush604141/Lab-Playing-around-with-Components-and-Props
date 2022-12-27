import { imageData } from "../App";

const GetImage = () => {
  return imageData.map((image) => {
    return (
      <div key={image.id} className="column">
        <img src={image.img} alt="Image" />
      </div>
    );
  });
};

export default GetImage;
