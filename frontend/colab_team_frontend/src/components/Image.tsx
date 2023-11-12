import { CSSProperties } from "react";

type ImageProps = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
};

export default function Image({
  src,
  alt,
  style,
  width,
  height,
  className,
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      width={width}
      height={height}
      className={className}
    />
  );
}
