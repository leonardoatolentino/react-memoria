import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import { Button } from './components/Buttton';
import { InfoItem } from './components/InfoItem';
import RestartIcon from './svgs/restart.svg';
import { GridItemType } from './types/GridItemType';

 
const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);



  useEffect(() => {
    resetAndCreateGrid()
  },[]);

  const resetAndCreateGrid = () => {

  }


  return(
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={logoImage} alt='' width="200"  />
        </C.LogoLink>  

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>   

        <Button label="Reinicar" icon={RestartIcon} onClick={resetAndCreateGrid} />

      </C.Info>
      <C.GridArea>
        <C.Grid>
          <items />
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );

}

export default App;