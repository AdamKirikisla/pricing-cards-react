import { useState } from 'react'
import Header from './Components/Header'
import Entry from './Components/Entry'
import Footer from './Components/Footer'
import data from './data/data'


function App() {

  // data.js array
const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        ) 
    })
  
  return(
    <>
    <Header></Header>
    <main className='container'>
      {entryElements}
    </main>
    <Footer></Footer>
    </>
  )
  
}

export default App
