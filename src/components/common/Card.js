import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#FFF', 
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#696969',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    padding: 1,
    borderRadius: 3,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
};

export { Card };
