type ImageProps = {
  src: string;
  alt: string;
};

export default function Image({ src, alt, ...otherProps }: ImageProps) {
  return <img {...otherProps} src={src} alt={alt} />;
}
