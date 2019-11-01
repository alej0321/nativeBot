
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
      id: "Greet",
      message: "Hola, soy CoffeeBot,Bienvenido a Agenda Cafetera",
      trigger: "pregunta nombre"
  },
  {
      id: "pregunta nombre",
      message: "Por favor escribe tu nombre",
      trigger: "Esperando el nombre del usuario"
  },
  {
      id: "Esperando el nombre del usuario",
      user: true,
      trigger: "pregunta opciones ayuda"
  },
  {
      id: "pregunta opciones ayuda",
      message: "Hola {previousValue}, en qué te puedo ayudar?",
      trigger: "Displaying options to eat"
  },
  {
    id: "Displaying options to eat",
           options: [
                    /*   {
                        value: "pizza",
                        label: "Pizza",
                        trigger: "Asking for Tomatoes in Pizza"
                      }, */
                      { 
                        value: "Agregar Finca",
                        label: "Cómo agrego una finca?",
                        trigger: "Agregar Finca id"
                      },
                      { 
                        value: "Agregar Lote",
                        label: "Cómo agrego un lote?",
                        trigger: "Agregar lote id"
                      }  
                    ]
  },
  {
          id: "Agregar Finca id",
          message: "Para agregar una finca dirigete a la sección con el icono del grano de café, presiona el botón de  '+ Añadir', completa los campos y presiona el botón de guardar. ",
          end: true
  },
  {
          id: "Agregar lote id",
          message: "Para agregar un lote previamente debes haber agregado una finca,  dirigete a la sección con el icono del grano de café, presiona el botón de  '+ Añadir', completa los campos y presiona el botón de guardar. ",
          end: true
},


  
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


