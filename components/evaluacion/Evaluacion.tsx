import React from 'react';
import { StyleSheet, View } from 'react-native';
import StarEmpty from './StarEmpty';
import StarFilled from './StarFilled';
import StarHalf from './StarHalf';

export type EvalProps = {
  calification: number;
  onCalificationChange: any;
};

export type StarProp = {
  posicion: number;
  onClick: any;
};

const Evaluacion = (props: EvalProps) => {
  const handleOnClick = (posicion: number) => {
    const currentCalification = props.calification;

    let newCalification = 0;

    if (currentCalification === posicion + 1) {
      newCalification = currentCalification - 0.5;
    } else if (currentCalification === posicion + 0.5) {
      newCalification = 0;
    } else {
      newCalification = posicion + 1;
    }

    newCalification = Math.min(newCalification, 5);

    props.onCalificationChange(newCalification);
  };

  return (
    <View style={styles.contenedor}>
      {Array.from({ length: 5 }).map((_, index) => (
        <React.Fragment key={index}>
          {props.calification >= index + 1 && (
            <StarFilled onClick={() => handleOnClick(index)} posicion={index} />
          )}
          {props.calification > index && props.calification < index + 1 && (
            <StarHalf onClick={() => handleOnClick(index)} posicion={index} />
          )}
          {props.calification <= index && (
            <StarEmpty onClick={() => handleOnClick(index)} posicion={index} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Evaluacion;
