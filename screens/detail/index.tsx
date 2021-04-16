import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DetailScreenRouteProp} from '../../app-navigation-types';

type Props = {
  route: DetailScreenRouteProp;
};

function DetailScreen({route}: Props) {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        {route.params ? JSON.stringify(route.params) : 'undefined params'}
      </Text>
    </SafeAreaView>
  );
}

export default DetailScreen;
