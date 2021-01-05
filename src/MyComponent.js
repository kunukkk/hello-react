import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다. <br />
      {/* childern: 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여 주는 props */}
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}입니다. <br />
//       children 값은 {props.children}입니다.
//       {/* childern: 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여 주는 props */}
//     </div>
//   );
// };

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
