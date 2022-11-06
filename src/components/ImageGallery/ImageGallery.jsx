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
    // <Gallery>
    //   {images &&
    //     images.map(image => (
    //       <GalleryItem key={image.id}>
    //         <ImageGalleryItem
    //           link={image.webformatURL}
    //           description={image.tags}
    //         />
    //       </GalleryItem>
    //     ))}
    // </Gallery>
  );
};

//  return (
//    <ContactListGroup>
//      {contacts.map(({ id, name, number }) => (
//        <СontactСard key={id}>
//          <Contact
//            name={name}
//            number={number}
//            onDeleteContact={() => onDeleteContact(id)}
//          />
//        </СontactСard>
//      ))}
//    </ContactListGroup>
//  );
