import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImgComponent';
import NavBar from './components/NavBar';
import FormGroup from './components/FormGroup';

function App() {
  return (
          <div className="App">
      <header className='display: flex, justifyContent: between'>
        {/* <img src={logo} className="App-logo" alt="logo" width="20%"/> */}
        <NavBar
        width="10%"
        navStyle={{backgroundColor: "grey", color: "white", textDecoration: "none", padding: "0.3rem", marginLeft: "1rem" ,display: "inline-block"}}
        text1="link 1"
        text2="link 2"
        text3="link 3"
        />
      </header>

      <main className="App-main">


      <ImageComponent
      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
      alt="img personal computer"
      width="50%"
      title="Vieni a visitare anche tu il nuovo mondo del tech!"
      imgStyle={{borderRadius: "4rem", marginTop: "6rem" }}
            />

      

        <ButtonComponent
        buttonText="Click me!"
        buttonStyle={{ backgroundColor: "grey", color: "white", border: "1px solid white", boxShadow: "2px 4px 2px black", padding: "1rem", borderRadius: "10px", marginBottom: "2rem"}}
        />


        <FormGroup
        Label="Nome:"
        Placeholder="inserisci il tuo nome"
        />

      </main>

    </div>
  );
}

export default App;
