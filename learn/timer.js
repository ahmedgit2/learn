import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  // const colors={red:'red',green:"green"}
  // const style=(colors)=>{
  //     return{
  //         container:{
  //             backgroundColor:colors.red
  //         }
  //     }
  // }
  // const styles=useMemo(()=>style(colors),[colors])
  // useEffect(()=>{

  // },[colors])
  // useEffect(()=>{
  // setCount(20)
  // setStart(count)

  // },[])
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [count, start]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Press to start Timer</Text>
      <Text style={styles.text}>{count}</Text>

      <View>
        <Button
          style={styles.button}
          title="Start"
          onPress={() => setStart(true)}
        />
        <Button
          style={styles.button}
          title="Stop"
          onPress={() => setStart(false)}
        />
        <Button
          style={styles.button}
          title="reset"
          onPress={() => {
            setStart(false);
            setCount(0);
          }}
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
