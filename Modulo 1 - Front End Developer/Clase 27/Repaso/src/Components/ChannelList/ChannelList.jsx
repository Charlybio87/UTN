import React from "react"
import ChannelItem from "../ChannelItem/ChannelItem"

const ChannelList=( { titulos, canales } )=>{

    return (
      <>
        <h1>{titulos}</h1>
        {
          canales.map((canal) => {
            return (
                <ChannelItem key={canal.id} nombre={canal.nombre} id={canal.id}/>
            )
          })
        }
      </>
    )
}


export default ChannelList


// const ChannelList = (props) => {
//   const canalesJSX = props.canales.map(canal => {
//     return (
//       <div key={canal.id} className="channel-container">
//         <a>
//           {canal.nombre}
//         </a>
//       </div>
//     )
//   })
//   return (
//     <div>
//       <h1>{props.titulos}</h1>
//       {canalesJSX}
//     </div>
//   )
// }

// export default ChannelList