import React, { useState, useEffect } from "react";
import { ReactComponent as Spinner } from "../../assets/spinner.svg";

const LazyImage = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    const handleLoad = () => {
      setLoading(false);
      setImageSrc(src);
    };

    const handleError = () => {
      setLoading(false);
      setError(true);
    };

    image.addEventListener("load", handleLoad);
    image.addEventListener("error", handleError);

    return () => {
      image.removeEventListener("load", handleLoad);
      image.removeEventListener("error", handleError);
    };
  }, [src]);

  return (
    <div>
      {loading && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      {error && <div>Error loading image</div>}
      {imageSrc && <img src={imageSrc} alt={alt} />}
    </div>
  );
};

export default LazyImage;
