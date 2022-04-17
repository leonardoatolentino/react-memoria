import { useEffect, useState } from 'react';
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import { Button } from './components/Buttton';
import { InfoItem } from './components/InfoItem';
import RestartIcon from './svgs/restart.svg';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items'

 
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
    // passo 1 - resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // passo 2 - criar o grid e começar o jogo
    // 2.1 criar o grid vazio
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++){
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }
    //2.2 - preencher o grid
    for (let w = 0; w < 2; w++){
      for (let i = 0; i < items.length; i++){
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          let pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = i;
      }
    }

    //2.3 jogar no state
    setGridItems(tmpGrid);

    // passo 3 - comecar o jogo
    setPlaying(true);

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
         {}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );

}

export default App;