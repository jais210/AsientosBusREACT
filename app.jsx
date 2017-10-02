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
         {/* <RTable  seats = {seats}/> */} 
       
         {/* <h3>  {title}</h3> */}
         <ol>
            {/* {listPairs (seats)} */}
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

const AppPasajeros = ({ pasajeros, title, seats }) => {
    return (
      <div className="container">
        <div className="text-center header"  ><h1>{title}</h1></div>
        <RTable seats={seats} />
        <div>
          <div className='row tablaPasajeros'>
            <div className='col col-xl-2 col-sm-2'>Asiento</div>
            <div className='col col-xl-5 col-sm-5'>Nombres y apellidos</div>
            <div className='col col-xl-2 col-sm-2'>DNI</div>
          </div>
          <ListaPasajeros pasajeros={pasajeros} />
        </div>
      </div>
    );
  }

const ListaPasajeros = (props) => {
    let lista = props.pasajeros.map((elemento, index) => {
      return (<div className="row">
        <div className="col col-xl-2 col-sm-2">{elemento.index}</div>
        <div className="col col-xl-5 col-sm-5">{elemento.index}</div>
        <div className="col col-xl-2 col-sm-2">{elemento.index}</div>
      </div>);
    });
    return (lista);
  }

// Empezando REACT


ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );

  ReactDOM.render(
    <AppPasajeros pasajeros={pasajeros} title={'Reserva tu Asiento'} seats={seats} />,
    document.getElementById("pasajeros")
  );