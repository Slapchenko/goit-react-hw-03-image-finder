import { Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ link, tags, onClick }) => {
  return <Img src={link} alt={tags} onClick={onClick} />;
};
