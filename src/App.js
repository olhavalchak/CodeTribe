import React , { useState, useEffect } from 'react';
import { StartButton, Step1, Step2_1, Step3 } from './components';
import { useSelector } from 'react-redux';
import { selectUserInput } from './lib/redux/selectors';

function App() {
  const [card, setCard] = useState(0); 
  const info = useSelector(selectUserInput);

  useEffect(() => {
    if (info.data) {
      switch(info.data.userInfo.input) {
        case 'email': 
          setCard(2);
          break;
        case 'username' : 
          setCard(3);
          break;
        default: setCard(4);
      }
    } else  if (info.error) {
      setCard(4);
    }
  }, [info]);

  return (
    <div className='App'>
      {(() => {
        switch (card) {
          case 0:
            return <StartButton setCard={setCard} />
          case 1:
            return <Step1 setCard={setCard} />
          case 2:
            return <Step2_1 setCard={setCard} inputType={card === 2} card/>
          case 3:
            return <Step2_1 setCard={setCard} inputType={card === 2} card/>
          case 4:
            return <Step2_1 setCard={setCard} card={card}/>
          case 5 :
            return <Step3 />
          default:
            return null
        }
      })()}
    </div>
  );
}

export default App;
