import React, { useState } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { AppNewText } from '..';
import { styles } from './style';

export const ClickableText = props => {
  const { children, selected, onPress } = props;
  return (
    <View style={ [ styles.containerStyle, selected === children ? styles.pressed : null ] }>
      <Pressable onPress={ onPress } >
        <AppNewText style={ [ styles.textStyle, selected === children ? styles.pressedText : null ] }>
          { children }
        </AppNewText>
      </Pressable>
    </View >
  );
};
