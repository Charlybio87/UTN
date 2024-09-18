import React, { useState } from 'react'
import './FileList.css';
import { FILE_ICONS } from '../../utils/constants';

const FileList = (props) => {
  const files = props.files
  const [openList, setOpenList] = useState(false)

  const handleToggleList = () =>{
    setOpenList(!openList)
  }


  const filesListJSX = files.map((item) => {
    
    const Icon = FILE_ICONS[item.icon]

    return(
      <div key={item.id} className='file-list'>
        {
          item.tipo === 'folder' ?
        <button onClick={handleToggleList}>{item.title}</button>
        : <span><Icon/> {item.title}</span>
        }
        {
          (item.tipo === 'folder' && openList) &&
          <FileList files={item.archives}/>
        }
      </div>
    )
  })
  return (
    <div>
      {
        filesListJSX
      }
    </div>
  )
}

export default FileList

// Primera opcion:
// return(
//   <div key={item.id} className='file-list'>
//     {item.title}
//     {
//       item.tipo === 'folder' &&
//       <div className='file-list'>
//         {
//           item.archives.map((item) =>{
//             return(
//               <div key={item.id}>
//                 {item.title}
//               </div>
//             )
//           })
//         }
//       </div>
//     }
//   </div>
// )