import Header from './components/Header';
import Nav from './components/Nav';

const links = [
  { name: 'Buscador', url: '/buscador' },
  { name: 'Datos', url: '/datos' },
  { name: 'Mi perfil', url: '/mi-perfil' },
];

const App = () => {
  return (
    <Header>
      <h1>MIPISO.com.es</h1>
      <Nav links={links} />
    </Header>
  );
};

export default App;
