import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onLoadMore, isImages }) => {
  return (
    isImages && (
      <ButtonLoadMore onClick={onLoadMore} type="button">
        Load more
      </ButtonLoadMore>
    )
  );
};

// export const Button = ({ onLoadMore }) => {
//    (
//     <ButtonLoadMore onClick={onLoadMore} type="button">
//       Load more
//     </ButtonLoadMore>
//   );
// };
