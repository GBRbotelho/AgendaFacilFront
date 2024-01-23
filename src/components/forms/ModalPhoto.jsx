import React, { useEffect, useState } from "react";
import { useLoading } from "../../utils/LoadingContext";
import LoadingSpinner from "../../utils/LoadingSpinner";

import Photo1 from "../../assets/profiles/1.jpg";
import Photo2 from "../../assets/profiles/2.jpg";
import Photo3 from "../../assets/profiles/3.jpg";
import Photo4 from "../../assets/profiles/4.jpg";
import Photo5 from "../../assets/profiles/5.jpg";
import Photo6 from "../../assets/profiles/6.jpg";
import Photo7 from "../../assets/profiles/7.jpg";
import Photo8 from "../../assets/profiles/8.jpg";
import Photo9 from "../../assets/profiles/9.jpg";
import Photo10 from "../../assets/profiles/10.jpg";
import Photo11 from "../../assets/profiles/11.jpg";
import Photo12 from "../../assets/profiles/12.jpg";
import Photo13 from "../../assets/profiles/13.jpg";
import Photo14 from "../../assets/profiles/14.jpg";
import Photo15 from "../../assets/profiles/15.jpg";
import Photo16 from "../../assets/profiles/16.jpg";
import Photo17 from "../../assets/profiles/17.jpg";
import Photo18 from "../../assets/profiles/18.jpg";
import Photo19 from "../../assets/profiles/19.jpg";
import Photo20 from "../../assets/profiles/20.jpg";
import Photo21 from "../../assets/profiles/21.jpg";
import Photo22 from "../../assets/profiles/22.jpg";
import Photo23 from "../../assets/profiles/23.jpg";
import Photo24 from "../../assets/profiles/24.jpg";

const avatarImages = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  Photo13,
  Photo14,
  Photo15,
  Photo16,
  Photo17,
  Photo18,
  Photo19,
  Photo20,
  Photo21,
  Photo22,
  Photo23,
  Photo24,
  // Adicione outras fotos conforme necessário
];

export default function ModalPhoto({
  setModal,
  selectImage,
  setSelectImage,
  updatePhoto,
}) {
  const { showLoading, hideLoading } = useLoading();
  const [loadedImageIndexes, setLoadedImageIndexes] = useState(new Set());
  const totalImages = avatarImages.length;

  const handleImageLoad = (index) => {
    setLoadedImageIndexes((prevLoadedIndexes) => {
      const newIndexes = new Set(prevLoadedIndexes);
      newIndexes.add(index);
      return newIndexes;
    });
  };

  useEffect(() => {
    showLoading();
    console.log(loadedImageIndexes.size);

    if (loadedImageIndexes.size === totalImages) {
      hideLoading();
    }
  }, [loadedImageIndexes, totalImages]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center bg-black/50 justify-center"
      style={{ zIndex: 100 }}
    >
      <div className="absolute bg-white p-4 w-96 rounded shadow-md">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-2xl font-semibold">Avatares:</h2>
        </div>
        <div className="max-h-96 overflow-y-auto grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
          {avatarImages.map((photo, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-transform ${
                index === selectImage ? "scale-125" : "scale-90"
              } hover:scale-125`}
              onClick={() => setSelectImage(index)}
            >
              <img
                src={photo}
                alt={`Avatar ${index + 1}`}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              await updatePhoto();
              setModal(false);
            }}
          >
            Salvar
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              setModal(false);
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
