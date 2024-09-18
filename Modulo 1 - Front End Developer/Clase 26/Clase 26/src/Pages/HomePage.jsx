import React from 'react'
import { ShieldIcon, TankIcon } from '../Icons'
import { files } from '../data-files'
import { FileList } from '../Components'


function HomePage() {

  return (
    <>
      <h1 className='titulo'>
        <TankIcon/> Lista de archivos <ShieldIcon className='icon-shield'/>
      </h1>
      <FileList files={files}/>
      {/* <FILE_ICONS.JS/> */}
    </>
  )
}

export default HomePage