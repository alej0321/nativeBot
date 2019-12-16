
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
      trigger: "categoria"
  },
  /* Primer menu */
  {
    id: "categoria",
    options:[
            {
              id: "finca",
              value: "Finca",
              label: "Finca",
              trigger: "opciones finca"  
            },
            {
              id: "lote",
              value:"Lote",
              label: "Lote",
              trigger: "opciones lote"
            },
            {
              id: "floracion",
              value:"Floracion",
              label: "Floracion",
              trigger: "opciones floracion"
            },
            {
              id: "actividad",
              value:"Actividad",
              label: "Realizar Actividad",
              trigger: "opciones actividad"
            }
    ]
    
},

/* ============================= */

/* Sub Menu  */
    {
      id: "opciones finca",
      options: [
        { 
          value: "Agregar Finca",
          label: "¿Cómo agrego una finca?",
          trigger: "Agregar Finca id"
        },
        { 
          value: "Editar Finca",
          label: "¿Cómo edito una finca?",
          trigger: "Editar Finca id"
        }
      ]
    },
    {
      id: "opciones lote",
      options: [
        { 
          value: "Agregar Lote",
          label: "¿Cómo agrego un lote?",
          trigger: "Agregar lote id"
        },
        { 
          value: "Editar Lote",
          label: "¿Cómo edito un lote?",
          trigger: "Editar lote id"
        }
      ]
    },
    {
      id: "opciones floracion",
      options: [
        { 
          value: "Agregar Floración",
          label: "¿Cómo agrego una Floración?",
          trigger: "Agregar floración id"
        },
        { 
          value: "Eliminar Floración",
          label: "¿Cómo elimino una Floración?",
          trigger: "Eliminar floración id"
        },
      ]
    },
    {
      id: "opciones actividad",
      options: [
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
          value: "Cosecha",
          label: "¿Cómo realizar la actividad de cosecha?",
          trigger: "Cosecha id"
        }
      ]
    },


  {
    id: "mostrar opciones",
           options: [                    
                      /* { 
                        value: "Comunícate",
                        label: "Comunícate con nosotros",
                        trigger: "Comunicate id"
                      }, */
                      {
                        //value: true,
                        label: "Tengo otra pregunta",
                        trigger: "pregunta opciones ayuda"
                      } 
                    ]
  },

  /* FINCA */
  {
          id: "Agregar Finca id",
          message: "Para agregar una finca dirigete a la sección con el icono del grano de café, presiona el botón de  '+ Añadir', completa los campos y presiona el botón de guardar. ",
          trigger: "mostrar opciones"
  },
  {
          id: "Editar Finca id",
          message: "Para editar una finca dirigete a la sección con el icono del grano de café, presiona el botón rojo 'Editar finca', realiza los cambios que necesites y presiona el botón guardar.",
          trigger: "mostrar opciones"
  },

  /* LOTE */

  {
          id: "Agregar lote id",
          message: "Para agregar un lote previamente debes haber agregado una finca,  dirigete a la sección con el icono del grano de café, presiona el nombre de la finca, verás un botón que dice 'Ver Lotes', presiónalo y luego presiona el botón circular rojo. Luego encontrarás un formulario con los datos de tu lote, complétalo y presiona el botón Guardar.",
          trigger: "mostrar opciones"
  },

  {
          id: "Editar lote id",
          message: "Para editar un lote, selecciona una finca, presiona el botón 'Ver lotes', selecciona un lote, presiona el botón editar, realiza los cambios que necesites y presiona el botón Guardar.",
          trigger: "mostrar opciones"
  },

  /* FLORACION*/
  {
          id: "Agregar floración id",
          message: "Para agregar una floración debes haber agregado un  lote previamente, dirigete a la sección con el icono del grano de café, presiona el nombre de la finca, presiona el botón 'Ver Lotes', selecciona un lote, presiona el botón 'Ver floraciones, presiona el botón circular rojo, selecciona la fecha de floración, califica tu floracion y presiona el botón Guardar.'",
          trigger: "mostrar opciones"
  },
  {
          id: "Eliminar floración id",
          message: "Para eliminar una floración creada, dirigete a la sección con el icono del grano de café, presiona el nombre de la finca, presiona el botón 'Ver Lotes', selecciona un lote, presiona el botón 'Ver floraciones', presiona el icono de la canasta de basura, presiona aceptar .",
          trigger: "mostrar opciones"
},

  /* ACTIVIDADES */
  {
          id: "Roya id",
          message: "Dirigete a la sección con el icono del grano de café, presiona el nombre de la finca, presiona el botón 'Ver Lotes', selecciona un lote, presiona el botón 'Ver floraciones', escoge una floración, presiona 'Evaluación Roya' en el calendario, presiona el botón rojo 'Comenzar', presiona sobre el icono del árbol, completa los datos, presiona el boton rojo 'Realizar conteo'",
          trigger: "mostrar opciones"
  },
  {
          id: "Broca id",
          message: "Dirigete a la sección con el icono del grano de café, presiona el nombre de la finca, presiona el botón 'Ver Lotes', selecciona un lote, presiona el botón 'Ver floraciones', escoge una floración, presiona 'Evaluación Broca' en el calendario, presiona el botón rojo 'Comenzar', presiona sobre el icono del árbol, completa los datos, presiona el boton rojo 'Realizar conteo'",
          trigger: "mostrar opciones"
  },
  {
          id: "Cosecha id",
          message: "Dirigete a la sección con el icono del grano de café, presiona el nombre de la finca, presiona el botón 'Ver Lotes', selecciona un lote, presiona el botón 'Ver floraciones', escoge una floración, presiona 'Pronóstico de cosecha' en el calendario, presiona el botón rojo 'Comenzar', presiona sobre el icono del árbol, completa los datos teniendo en cuenta el número de árboles que aparezcan, presiona el boton rojo 'Realizar conteo'",
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


