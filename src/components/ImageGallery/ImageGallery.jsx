import { ImageGalleryItem } from '../ImageGalleryItem';
import { Gallery, GalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images &&
        images.map(image => (
          <GalleryItem key={image.id}>
            <ImageGalleryItem
              link={image.webformatURL}
              description={image.tags}
            />
          </GalleryItem>
        ))}
    </Gallery>
  );
};
