import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <ButtonLoadMore onClick={onLoadMore} type="button">
      Load more
    </ButtonLoadMore>
  );
};

// export const Button = ({ onLoadMore }) => {
//    (
//     <ButtonLoadMore onClick={onLoadMore} type="button">
//       Load more
//     </ButtonLoadMore>
//   );
// };
