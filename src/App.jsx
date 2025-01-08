import { useState } from 'react'
import 'leaflet/dist/leaflet.css';
import Map from './Map.jsx';
import githubLogo from './assets/github-dark.svg'
import pbwLogo from './assets/project-blue-waters.png'
import './stylesheet.css'

function App() {
  return (
    <div className="relative">
      <div className="w-50 h-[2vh] bg-[#15b7f2] text-white font-bold flex items-center justify-center pointer-events-auto">
        Endangered Species Map
      </div>
      <Map />
      <div className='h-[8vh] w-full bg-[#15b7f2] text-white flex items-center justify-center px-2'>
        <div className='flex justify-center'>
          Created with ❤️ by <a href='https://github.com/c0dev1king' className='ml-1 hover:text-orange-500'>c0dev1king</a>
          <img src={githubLogo} className='w-6 h-6 ml-2' />
        </div>
      </div>
      <img src={pbwLogo} className='h-[7vh] absolute bottom-1 right-1' />
    </div>
  )
}

export default App
