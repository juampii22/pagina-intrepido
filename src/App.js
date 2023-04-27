import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
    <div className='App'>
      <div className="NavBar">
        <NavBar />
      </div>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <div className='Contador'>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
      </div>
    </div>
    </>
  );
}

export default App;
