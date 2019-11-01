
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
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
    message: 'usa react native chatbot',
    trigger: '3'
  },
  {
    id: '3',
    user: true,
    trigger: '4'
  },
  {
    id: '4',
    message: 'gracias por usar',
    end: true
  }
];


export default class App extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.text}>coffee Chat</Text> */}
        <ChatBot steps={steps}/>
      </SafeAreaView>
    )
  }
}


