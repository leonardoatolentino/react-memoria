import * as C from './styles';

type Props ={
  label: String;
  icon?: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;

}

export const Button = ({label, icon, onClick}: Props) =>{
  return(
    <C.Container onClick={onClick}>
      {icon && 
        <C.IconArea>
          <C.icon src={icon} />
        </C.IconArea>
      }
      <C.Label>{label}</C.Label>
    </C.Container>
  );
}