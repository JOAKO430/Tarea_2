import React from 'react';
import { SvgXml } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';
import { StarProp } from './Evaluacion';

const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="#CFB53B" width="800px" height="800px" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
`;

const StarFilled = (props: StarProp) => {
  const handleOnPress = () => {
    props.onClick(props.posicion);
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <SvgXml xml={xml} width={50} height={50} />
    </TouchableOpacity>
  );
};

export default StarFilled;
