import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImgComponent';

function App() {
  return (
          <div className="App">
      
               <img src={logo} className="App-logo" alt="logo" width="10%"/>
      
      
        

      <main className="App-main">


      <ImageComponent
      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
      alt="img personal computer"
      width="50%"
      title="Vieni a visitare anche tu il nuovo mondo del tech!"
      />

      

        <ButtonComponent
        buttonText="Click me!"
        buttonStyle={{ backgroundColor: "grey", color: "white", border: "1px solid white", boxShadow: "2px 4px 2px black", padding: "1rem", borderRadius: "10px", marginBottom: "2rem", hover: "white"}}
        />


      </main>

    </div>
  );
}

export default App;
