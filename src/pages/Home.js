import headerBg from "../assets/header_bg.png";
import DiscreteSliderValues from "../components/Slider";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getMarsRoverPhotos, getAPOD } from "../services/generalService";
import { useState } from "react";
import MarsRoverCards from "../components/MarsRoverCards";
import AstronomyPOD from "../components/AstronomyPOD";
import { data } from "autoprefixer";

const Home = () => {
  const id = useSelector((state) => state.item.id);
  const [roversList, setRoversList] = useState([]);
  const [astronomyPOD, setAstronomyPOD] = useState();
  const [photoLoading, setPhotoLoading] = useState(0);

  useEffect(() => {
    if (id === 66 && photoLoading === 0) {
      getMarsRoverPhotos().then((res) => {
        setRoversList(res.data.photos);
        setPhotoLoading(1);
      });
    }
  }, [id]);

  useEffect(() => {
    getAPOD().then((res) => {
      setAstronomyPOD(res.data);
    });
  }, []);

  return (
    <div>
      <div className="w-screen h-screen">
        <div className="relative">
          <img
            src={headerBg}
            alt="Nasapi background header showing up space"
            className="object-cover max-h-screen w-full"
          />
          <div className="bg-dark-blue object-cover max-h-screen w-full absolute top-0 opacity-40 h-full"></div>
          <p className="absolute top-2/4 text-white text-center text-3xl w-full">
            Get Nasa Astronomy Informations
          </p>
          <div className="absolute top-2/4 w-full">
            <div className="text-white text-center text-3xl w-10 mx-45  mx-auto h-48">
              <div className="arrow arrow-first"></div>
              <div className="arrow arrow-second"></div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white pt-8">
          <div className="relative flex bg-white w-1/2 mx-auto justify-between items-center">
            {astronomyPOD ? (
              <AstronomyPOD
                url={astronomyPOD.url}
                title={astronomyPOD.title}
                description={astronomyPOD.explanation}
                author={astronomyPOD.copyright}
              />
            ) : null}
          </div>
        </div>
        <div className="mt-12 w-full w-full h-24 flex items-center justify-center bg-gray-dark">
          <DiscreteSliderValues />
        </div>

        {roversList
          ? roversList.map((data, i) => {
              console.log(data);
              return (
                <MarsRoverCards
                  name={data.rover.name}
                  launching={data.rover.launch_date}
                  landing={data.rover.landing_date}
                  url={data.img_src}
                  key={i}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Home;
