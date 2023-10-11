import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment} />
        <View style={styles.buttonSpace} />
        <Button title="Decrement" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonSpace: {
    width: 20, // Adjust the width to control the space between buttons
  },
});
