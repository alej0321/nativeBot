
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
      message: "Hola {previousValue}, tu pregunta está relacionada con : ",
      trigger: "mostrar opciones"
  },
  {
    id: "mostrar opciones",
           options: [
                      { 
                        value: "Agregar Finca",
                        label: "¿Cómo agrego una finca?",
                        trigger: "Agregar Finca id"
                      },
                      { 
                        value: "Agregar Lote",
                        label: "¿Cómo agrego un lote?",
                        trigger: "Agregar lote id"
                      },
                      { 
                        value: "Agregar Floración",
                        label: "¿Cómo agrego una Floración?",
                        trigger: "Agregar floración id"
                      },
                      { 
                        value: "Roya",
                        label: "¿Cómo realizar la actividad de roya?",
                        trigger: "Roya id"
                      },
                      { 
                        value: "Broca",
                        label: "¿Cómo realizar la actividad de broca?",
                        trigger: "Broca id"
                      },
                      { 
                        value: "Comunícate",
                        label: "Comunícate con nosotros",
                        trigger: "Comunicate id"
                      } 
                    ]
  },
  {
          id: "Agregar Finca id",
          message: "Para agregar una finca dirigete a la sección con el icono del grano de café, presiona el botón de  '+ Añadir', completa los campos y presiona el botón de guardar. ",
          trigger: "mostrar opciones"
  },
  {
          id: "Agregar lote id",
          message: "Para agregar un lote previamente debes haber agregado una finca,  dirigete a la sección con el icono del grano de café, presiona el nombre de la finca, verás un botón que dice 'Ver Lotes', presiónalo y luego presiona el botón circular rojo. Luego encontrarás un formulario con los datos de tu lote, complétalo y presiona el botón Guardar.",
          trigger: "mostrar opciones"
  },
  {
          id: "Agregar floración id",
          message: "Para agregar una floración debes haber agregado un  lote previamente, dirigete a la sección con el icono del grano de café, presiona el nombre de la finca, presiona el botón 'Ver Lotes', selecciona un lote, presiona el botón 'Ver floraciones, presiona el botón circular rojo, selecciona la fecha de floración, califica tu floracion y presiona el botón Guardar.'",
          trigger: "mostrar opciones"
  },
  {
          id: "Roya id",
          message: "Roya",
          trigger: "mostrar opciones"
  },
  {
          id: "Broca id",
          message: "Broca",
          trigger: "mostrar opciones"
  },
  {
          id: "Comunicate id",
          message: "Para mayor información puedes enviarnos un correo electrónico a : buxtar2240@gmail.com",
          trigger: "mostrar opciones"
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


