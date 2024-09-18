import React, { useState } from 'react'
import DATA_MOOK from './data'
import ChatHistory from './Components/ChatHistory'
import './App.css'


export default function App() {
  return (
    <div className='App'>
      <aside> 
        <div className='sidebar_superior'>
          <h3>Parte Superior1</h3>
        </div>
        <div>
          <h3>Parte Superior2</h3>
        </div>
        <div className='sidebar_medio'>
        <ChatHistory data_mook={DATA_MOOK}/>
        </div>
        <div className='sidebar_inferior'>
        <h3>Parte inferior</h3>
        </div>
      </aside>
      <section>
        <div className='chat'>
          <div className='chat_header'>
            <h3>Chat</h3>
          </div>
        </div>
      </section>
    </div>
  )
}