export const dataURLtoFile = (
  dataurl: string,
  filename: string
): File | null => {
  const array = dataurl.split(",");
  const mime = array[0].match(/:(.*?);/);
  if (mime) {
    const type = mime[1];
    const bstr = atob(array[1]);

    // Create a TextEncoder to handle UTF-8 encoding
    const textEncoder = new TextEncoder();

    // Encode the string into bytes
    const bytes = textEncoder.encode(bstr);

    // Create a Uint8Array for the File constructor
    const u8array = new Uint8Array(bytes);

    return new File([u8array], filename, { type });
  }

  return null;
};
