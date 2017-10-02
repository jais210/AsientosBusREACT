// // modelo guía del Profesor
const RowTable = (props) => {
   const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
   return (
      <tr>
         {_tds}
     </tr> 
   )
}// se dibuja los TD de la tabla con HTML

const RTable = ({seats}) => {
   return (
      <table width="300" border="3" className = "table table-bordered">
         <RowTable items = {seats[0]} />
         <RowTable items = {seats[1]} />
         <RowTable items = {seats[2]} />
         <RowTable items = {seats[3]} />
      </table>
   );
}
// lista los asientos pares
function listPairs (seats) {
   console.log ("seats: ", seats);
   let newSeats = [];
   for ( let row  of seats ) {
      let filterArray = row.filter ( e => e % 2 == 0);
      newSeats.push(filterArray); 
   }
   return newSeats.map ((row, index) => {
      return (
         <li key = {index}> {row} </li>
      );
   });
}

const App1 = ({title, seats}) => {
   return (
      <div>
         <RTable  seats = {seats}/>
       
         <h3>  {title}</h3>
         <ol>
            {listPairs (seats)}
         </ol>
      </div>
   );
}

let seats = [
   [4, 8, 12, 16, 20, 24, 28, 32],
   [3, 7, 11, 15, 19, 23, 27, 31],
   [2, 6, 10, 14, 18, 22, 26, 30],
   [1, 5, 9, 13, 17, 21, 25, 29]
]

ReactDOM.render ( 
   <App1 title = {'Hola Mundo!'}  seats = {seats} />, 
   document.getElementById("root")
); 
 
// hacer la lista de cinco pasajero en mi array
// mostrar la lista 

let pasajeros = [{
  asiento: 4, 
  nombre:'Petunia',
  apellido: 'Pino',
  dni: 321654987
},
 {
  asiento: 5, 
  nombre:'Genaro',
  apellido: 'Pino',
  dni: 321654987
},
 {
  asiento: 6, 
  nombre:'Paco',
  apellido: 'Pino',
  dni: 321654987
},
];

// Empezando REACT
// COMPONENTE TODO
// const MostrarPasajeros ({html})=>{
  
// }



// ReactDOM.render ( 
//    <MostrarPasajeros pasajeros= {html}/>, 
//    document.getElementById("pasajeros")
// ); 

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('pasajeros')
  );