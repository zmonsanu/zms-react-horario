import logo from './logo.svg';
import './App.css';
import './main.css';
import Button from './Button';

let contador = 0;

const intervalos = [
  { id:1, rango: '08:00 -  08:30'},
  { id:2, rango: '08:30 -  09:00'},
  { id:3, rango: '09:00 -  09:30'},
  { id:4, rango: '09:30 -  10:00'},
  { id:5, rango: '10:00 -  10:30'},
  { id:6, rango: '11:30 -  12:00'},
  { id:7, rango: '12:00 -  12:30'},
  { id:8, rango: '12:30 -  13:00'},
  { id:9, rango: '13:00 -  13:30'},
  { id:10, rango: '13:30 -  14:00'},
  { id:11, rango: '14:00 -  14:30'},
  { id:12, rango: '14:30 -  15:00'},
  { id:13, rango: '15:00 -  15:30'},
  { id:14, rango: '15:30 -  18:00'},
  { id:15, rango: '18:00 -  18:30'},
  { id:16, rango: '19:30 -  20:00'}
];

//A cada elemento de intervalos le aplico un map para devuelva un Button con el onClick correspondiente
const botones = (intervalos.map(intervalo => {
  return <Button onClick={(e) => {
    console.log(clickButton(e) + ' ' + intervalo.id)
  }}> {intervalo.rango} </Button>
}))

//función que si el valor de contador supera 10 lo inicializa a 0 , en caso contrario suma 1
// y devuelve una cadena con el valor del contador
//así mismo cambia el estilo del botón pulsado a : verde (queda ocupado) o rojo (si ya se ha superado el contador)
const clickButton = (e) => {
   switch (e.target.className) {
     case 'btn':
       if (contador >= 5) {
         e.target.className = 'btnRojo'
       } else {
         e.target.className = 'btnVerde';
         ++contador;
       }
       break;
     case 'btnVerde':
        if (contador >= 5) {
          e.target.className = 'btn';
          --contador;
        } else {
          e.target.className = 'btn';
          --contador;
        }
        break;
     case 'btnRojo':
        if (contador < 5) {
          e.target.className = 'btnVerde';
          ++contador;
        }
        break;
     default:
       break;
     }
   return ('Contador = ' + contador);
};

//App devolverá el renderizado del array de botones
const App = () => {
  return (botones);
}

export default App;
