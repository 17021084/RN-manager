import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
function Spinner({size}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Spinner};
