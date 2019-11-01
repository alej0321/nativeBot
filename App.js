
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import ChatBot from 'react-native-chatbot';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* alignItems: 'center',
    justifyContent: 'center' */
  },
  text:{
    fontSize:25
  }
})

const steps = [
  {
    id: '1',
    message: 'Hola, cómo estás',
    trigger: '2',
  },
  {
    id: '2',
    message: 'bien, gracias',
    end: true,
  },
];


export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        {/* <Text style={styles.text}>coffee Chat</Text> */}
        <ChatBot steps={steps}/>
      </View>
    )
  }
}


