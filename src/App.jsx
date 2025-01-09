import { useState } from 'react'
import 'leaflet/dist/leaflet.css';
import Map from './Map.jsx';
import githubLogo from './assets/github-light.svg'
import pbwLogo from './assets/project-blue-waters.png'
import './stylesheet.css'

function App() {
  return (
    <div className="relative">
      <div className="w-50 h-[2vh] bg-white text-black font-bold flex items-center justify-start px-2 pointer-events-auto">
        Aquatic Endangered Species Map
      </div>
      <Map />
      <div className='h-[8vh] w-full bg-white text-black flex items-center justify-around px-2'>
        <div className='flex justify-center'>
          Created with ❤️ by <a href='https://github.com/c0dev1king' className='ml-1 hover:text-orange-500'>c0dev1king</a>
          <img src={githubLogo} className='w-6 h-6 ml-2' />
        </div>
        <div className='flex flex-row justify-evenly'>
          <ul>
            <li>Sources</li>
            <li>Get Involved</li>
          </ul>
          <ul>
            <li>Resources</li>
          </ul>
        </div>
      </div>
      <img src={pbwLogo} className='h-[7vh] absolute bottom-1 right-1 shadow-[2px_2px_2px_rgba(0,0,0,0.2)]' />
    </div>
  )
}

export default App
