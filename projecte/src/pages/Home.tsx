import Header from '../components/layouts';
import { Nav } from '../components/molecules';
import { Text } from '../components/atoms';

const links = [
  { name: 'Buscador', url: '/buscador' },
  { name: 'Datos', url: '/datos' },
  { name: 'Mi perfil', url: '/mi-perfil' },
];

const Home = () => {
  return (
    <>
      <Header>
        <h1>MIPISO.com.es</h1>
        <Nav links={links} />
      </Header>
      <Text>Hola a tothom</Text>
    </>
  );
};

export default Home;
