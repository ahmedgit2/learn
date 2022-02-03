import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

export const AxiosLearning = () => {
  const width = useWindowDimensions().width;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // axios.interceptors.request.use(req => {
  //   console.log(`${req.method} ${req.url}`);
  //   // Important: request interceptors **must** return the request.
  //   return req;
  // });
  // axios.interceptors.response.use(res => {
  //   console.log(res.data.json);
  //   // Important: response interceptors **must** return the response.
  //   return res;
  // });

  const getData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v2/all');
      if (response.status === 200) {
        setData(response.data);
        // response.data.map(x => console.log(x.flags.png));

        setHasError(false);
        setLoading(false);
      } else {
        setHasError(true);
        setLoading(false);
        console.log(
          `something wrong // response.statusText ==> ${response.status} ${response.statusText}`,
        );
      }
    } catch {
      err => console.log(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={50} />
      </View>
    );
  } else if (hasError) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>some error XX</Text>
      </View>
    );
  } else if (loading == false) {
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 22, textAlign: 'center'}}>
        {`number of countries is :  ${Object.keys(data).length}`}
      </Text>
      <FlatList
        style={{margin: 10, marginTop: 30}}
        pagingEnabled
        horizontal
        data={data}
        keyExtractor={(item, index) => item.numericCode}
        renderItem={({item}) => (
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{width: width, textAlign: 'center'}}>{item.name}</Text>
            <Image
              style={{
                width: width - 20,
                height: 280,
                borderRadius: 15,
              }}
              source={{uri: item.flags.png}}
            />
          </View>
        )}
      />
    </View>
  );
};
