import React, { useState, useEffect, useMemo } from "react";
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

  const content = useMemo(() => {
    if (loading) {
      return (
        <div className="spinner">
          <Spinner />
        </div>
      );
    }
    if (error) {
      return <div>Error loading image</div>;
    }
    if (imageSrc) {
      return <img src={imageSrc} alt={alt} />;
    }
  }, [alt, error, imageSrc, loading]);

  return <>{content}</>;
};

export default LazyImage;
