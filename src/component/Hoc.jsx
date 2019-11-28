import React from 'react'

export default function Hoc(Loder , MouvieApp ) 
{
    return function spiner({ isLoading}) {
      if (!isLoading) return (<MouvieApp  />);
      else 

      return (<Loder/>);
    }
  }
  // export default Hoc ;















//     return (
//         <div>
            
//         </div>
//     )
// }

