import React from 'react';
import Adds from './Adds/Adds';
import Balance from './Balance/Balance';
import Toast from './Toast/Toast';
import Cocktails from '../Cocktails/Cocktails';
const Personal = ( ) => {
    return(
        <div className="w-100 h4 ba pa1 bw1 br3 mb2 relative">
            <div style={{direction:'rtl'}} className="fr w-100 flex inline-flex">
                <Toast className="fixed "/>
                <Balance className="fixed "/>
                <Adds className="fixed" />
            </div>
            <div style={{direction:'ltr'}} >
              <Cocktails/>
            </div>
        </div>
    )
} 
export default Personal;