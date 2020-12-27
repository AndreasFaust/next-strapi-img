import React, {
  useContext,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import getSrcSets from "./getSrcSets";
import Context from "./context";

import Image from "./Image";
import StyledImage from "./StyledImage";
import Placeholder from "./Placeholder";
import Wrapper from "./Wrapper";
import * as Types from "./types";
import ImageProvider from "./ImageProvider";

const ReactStrapiImg: React.FC<Types.ImageProps> = ({
  url,
  formats,
  objectFit = "cover",
  objectPosition = "center",
  width,
  height,
  proportionalHeight,
  rootMargin = "50px",
  threshold = 0,
  alternativeText = "Alternative-Text",
  sizes,
  className = "",
  style = "",
  stylePlaceholder = "",
  styleImg = "",
  prefix = "",
  onLoad,
  onError,
}) => {
  const context = useContext(Context);

  const isDecoded = useRef<boolean>(false);
  const srcSet = useMemo(
    () => getSrcSets(formats, prefix || context.prefix),
    []
  );
  const filename = url ? url.replace(/^.*[\\/]/, "").split(".")[0] : "";

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible] = useIntersectionObserver({
    elementRef: ref,
    freezeOnceVisible: true,
    rootMargin,
    threshold,
  });

  const [imageLoaded, setImageLoaded] = useState(false);
  const handleDecode = useCallback(() => {
    isDecoded.current = true;
  }, []);
  const handleLoad = useCallback((event) => {
    if (isDecoded.current) {
      setImageLoaded(true);
      if (onLoad) onLoad(event);
      else if (context.onLoad) context.onLoad(event);
    }
  }, []);
  const handleError = useCallback((event) => {
    if (onError) onError(event);
    else if (context.onError) context.onError(event);
  }, []);

  const [loadImage, setLoadImage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setLoadImage(true);
    }
  }, [isVisible]);

  return (
    <Wrapper
      ref={ref}
      className={`${context.className} ${className}`}
      style={context.style + style}
      width={width}
      height={height}
      proportionalHeight={proportionalHeight || context.proportionalHeight}
    >
      {formats && formats.base64 && (
        <Placeholder
          url={url}
          base64={formats.base64.url}
          objectFit={objectFit || context.objectFit}
          objectPosition={objectPosition || context.objectPosition}
          imageLoaded={imageLoaded}
          stylePlaceholder={context.stylePlaceholder + stylePlaceholder}
        />
      )}
      <Image
        onLoad={handleLoad}
        onError={handleError}
        onDecode={handleDecode}
        load={loadImage}
        src={(prefix || context.prefix) + url}
        srcSet={srcSet.regular}
        srcSetWebp={srcSet.webp}
        sizes={sizes || context.sizes}
        objectFit={objectFit || context.objectFit}
        objectPosition={objectPosition || context.objectPosition}
        alternativeText={alternativeText}
        styleImg={context.styleImg + styleImg}
        className={`no-js-${filename}`}
      />
      <noscript>
        <style>{`.no-js-${filename} { display: none !important; }`}</style>
        <StyledImage
          srcSet={srcSet && (srcSet.webp || srcSet.regular)}
          src={(prefix || context.prefix) + url}
          alt={alternativeText}
          sizes={sizes || context.sizes}
          objectFit={objectFit || context.objectFit}
          objectPosition={objectPosition || context.objectPosition}
          styleImg={context.styleImg + styleImg}
        />
      </noscript>
    </Wrapper>
  );
};

export default ReactStrapiImg;
export { Types, ImageProvider };
