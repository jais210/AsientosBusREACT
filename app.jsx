// modelo guía del Profesor
const RowTable = (props) => {
   const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
   return (
      <tr>
         {_tds}
     </tr> 
   )
}

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

class Pasajero {
  constructor(nombre, apellido, dni,asiento) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
      this.asiento = asiento;
  }

  imprimir() {
      return (<div className="well lista">
                  <strong>Número de Asiento{this.asiento}</strong><br />
                  <strong>Nombres y Apellidos: </strong>{this.nombre} {this.apellido}<br />
                  <strong>Número de DNI: </strong>{this.dni}<br />
              </div>);
  }
}

let asientos = [
    [4, 8, 12, 16, 20, 24, 28, 32],
    [3, 7, 11, 15, 19, 23, 27, 31],
    [2, 6, 10, 14, 18, 22, 26, 30],
    [1, 5, 9, 13, 17, 21, 25, 29]
 ]

asientos[0][0] = new Pasajero(4, 'Petunia', 'Pino', 321654987);
asientos[1][1] = new Pasajero(7, 'Harry', 'Durand', 987654123);
asientos[2][2] = new Pasajero(10, 'Bruce', 'Lee', 654789123);
asientos[3][3] = new Pasajero(13, 'Mirta', 'Dominguez', 456789123);
asientos[3][4] = new Pasajero(17, 'Mario', 'Papel', 852741963);



const App2 = props => {
  return (
      <div>
          <header className="text-center">
              <h1>Reserva de Pasajes</h1>
          </header>
                  
            <div id="listar" className="tab-pane fade">
                {listar(props.items)}
        </div>
  </div>);
}

ReactDOM.render(<App2 items={asientos} />, document.getElementById('root'));

