import Header from "./Header";
import Search from "./Search";


window.inicio = useState(true);
const [btnState2, setBtnState2] = useState(false);
const [btnState3, setBtnState3] = useState(false);
const [btnState4, setBtnState4] = useState(false);
const [btnState5, setBtnState5] = useState(false);

function final(){
  if(window.user == 'inicio' ){

      setBtnState(true);
      setBtnState2(false);
      setBtnState3(false);
      setBtnState4(false);
      setBtnState5(false);
    
  }else if (window.user == 'Pages'){
      setBtnState(false);
      setBtnState2(true);
      setBtnState3(false);
      setBtnState4(false);
      setBtnState5(false);
  
  }

}

export default final