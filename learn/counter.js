import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>press to count</Text>
      <Text style={styles.text}>{count}</Text>
      <View>
        <Button
          style={styles.button}
          title="add 1"
          onPress={() => setCount(count + 1)}
        />
        <Button
          style={styles.button}
          title="remove 1"
          onPress={() => setCount(count - 1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    width: 30,
    marginBottom: 20,
  },
  text: {
    fontSize: 80,
    marginBottom: 20,
  },
});
