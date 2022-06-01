import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import { Button } from './components/Button';
import { InforItem } from './components/infoitem';
import RestrartIcon from './svgs/restart.svg';


const App = () => {

  const resetAndCreateGrid = () =>{

  }

  return(
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InforItem label="Tempo" value="00:00" />
          <InforItem label="Movimento" value="0" />
        </C.InfoArea>

        <Button label="Reiniciar" icon={RestrartIcon} onClick={resetAndCreateGrid} />
      </C.Info>
      <C.GridArea>
        ...
      </C.GridArea>
      

    </C.Container>
  );
}

export default App;