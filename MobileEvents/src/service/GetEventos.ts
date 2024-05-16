


  
 type Evento = {
    id:number;
    nome: string;
    imagem: string;
    data: string; 
    horario:string;
    owner:string;
  };
  
  type EventosProp = {
    eventos: Evento[];
  };
  
  export default EventosProp;
  