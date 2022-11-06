import { Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ link, description }) => {
  return <Img src={link} alt={description} />;
};
