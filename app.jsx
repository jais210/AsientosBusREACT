// // modelo guía del Profesor
// const RowTable = (props) => {
//    const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
//    return (
//       <tr>
//          {_tds}
//      </tr> 
//    )
// }

// const RTable = ({seats}) => {
//    return (
//       <table width="300" border="3" className = "table table-bordered">
//          <RowTable items = {seats[0]} />
//          <RowTable items = {seats[1]} />
//          <RowTable items = {seats[2]} />
//          <RowTable items = {seats[3]} />
//       </table>
//    );
// }

// function listPairs (seats) {
//    console.log ("seats: ", seats);
//    let newSeats = [];
//    for ( let row  of seats ) {
//       let filterArray = row.filter ( e => e % 2 == 0);
//       newSeats.push(filterArray); 
//    }
//    return newSeats.map ((row, index) => {
//       return (
//          <li key = {index}> {row} </li>
//       );
//    });
// }

// const App1 = ({title, seats}) => {
//    return (
//       <div>
//          <RTable  seats = {seats}/>
       
//          <h3>  {title}</h3>
//          <ol>
//             {listPairs (seats)}
//          </ol>
//       </div>
//    );
// }

// let seats = [
//    [4, 8, 12, 16, 20, 24, 28, 32],
//    [3, 7, 11, 15, 19, 23, 27, 31],
//    [2, 6, 10, 14, 18, 22, 26, 30],
//    [1, 5, 9, 13, 17, 21, 25, 29]
// ]

// ReactDOM.render ( 
//    <App1 title = {'Hola Mundo!'}  seats = {seats} />, 
//    document.getElementById("root")
// ); 
 
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

// function doble(e) {
//   return e * 2;
// }
 
// var arreglo = [1, 2, 3, 4, 5];
// var resultado = arreglo.map(doble);

// Empezando REACT
// COMPONENTE TODO
const MostrarPasajeros ({html})=>{
  return (<div>
              <div className="text-center">
            <h1>Reserva de Asientos</h1>
              </div>      
                <div className="container-fluid">
                    <div className="row justify-content-sm-center">
      
                    <div className="col-xl-5 col-sm-5">
                    <div className="datos">
                      <h2>Datos</h2>
                   </div>
                    <form>
                      <div className="form-group">
                  <input type="number" className="form-control" id="nro_Asiento" placeholder="Seleccione el número de asiento" disabled='disabled'>
                    </div>
                  <div className="form-group">
                  <input type="number" className="form-control" id="dni" placeholder="Ingrese el número de DNI">
              </div>
              <div className="form-group">
                  <input type="text" className="form-control" id="nombreApellido" placeholder="Nombres y Apellidos">
              </div>
              <div className="form-group" id="alerta"></div>
              <button type="button" id="guardarDatos" className="btn btn-primary">Guardar</button>
              <button type="button" id="eliminarReserva" className="btn btn-danger">Eliminar</button>
              
          </form>
      </div>
      <div className="col col-xl-4 col-sm-4 text-center bus">
              <div className= "text-center" id="bus"></div>
          </div>
  </div>
  <hr>
  <div id="buscar" className="row justify-content-sm-center">
      <div className="col-xl-5 col-sm-5 inputDNI">
          <div className="input-group">
              <input type="text" className="form-control" id="buscarDni" placeholder="Ingrese el número de DNI" aria-label="Search for...">
              <span className="input-group-btn">
              <button id="btnBuscar" className="btn btn-primary" type="button">Buscar</button>
          </span>
          </div>
      </div>
  </div>
  <hr>
  <div className="row justify-content-sm-center">
      <div className=" col-xl-10 col-sm-10">      
              <button type="button" id="mostrarLista" className="btn btn-warming text-center">Lista de pasajeros</button>                  
              <div className='text-center'><h3>Datos Ingresados</h3></div>
              
          <div className='row tablaPasajeros' >

              <div className='col col-xl-2 col-sm-2 text-center'>Número de Asiento</div>
              <div className='col col-xl-5 col-sm-5 text-center'>Nombres y apellidos del pasajero</div>
              <div className='col col-xl-2 col-sm-2 text-center'>Número de DNI</div>
          </div>
          <div id="listaPasajeros"></div>
      </div>
  </div>
</div>
</div>)
}



ReactDOM.render ( 
   <MostrarPasajeros pasajeros= {html}/>, 
   document.getElementById("pasajeros")
); 