import React from 'react'
import { BioIcon, ShieldIcon, TankIcon } from '../Icons'
import { files } from '../data-files'
import { FileList } from '../Components'


function HomePage() {

  return (
    <>
      <h1 className='titulo'><BioIcon/> Lista de archivos</h1>
      <FileList files={files}/>
      {/* <FILE_ICONS.JS/> */}
    </>
  )
}

export default HomePage