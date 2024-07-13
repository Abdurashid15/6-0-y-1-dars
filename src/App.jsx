import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <ul className="navbar">
          <li className='logo'><img src="/public/Logo.svg" alt="Logo" /></li>
          <li className='search'><p className='searchicon'><img src="/public/search.svg" alt="search" /></p><input placeholder='Cari apapun disini...' type="text" /></li>
          <li><img className='Icon' src="/public/Icon.svg" alt="select" />
            <select className='country' name="country" id="c">
              <option value=" bahasaindonesia"> Bahasa Indonesia</option>
            </select></li>
          <li>
            <div className='navselect'>
              <img src="/public/loca.svg" alt="select" />
              <div>
                <p>Lokasi</p>
                <select className='country' name="country" id="country">
                  <option value="country">Indonesia, Yogyakarta</option>
                </select>
              </div>
            </div>
          </li>
        </ul>
        <div className="hero-top">
          <select className='country' name="" id="">
            <option value="Gunung">Gunung</option>
          </select>
          <select className='country' name="" id="">
            <option value="Pantai">Pantai</option>
          </select>
          <select className='country' name="" id="">
            <option value="Kuliner">Kuliner</option>
          </select>
          <select className='country' name="" id="">
            <option value="Outbond">Outbond</option>
          </select>
          <select className='country' name="" id="">
            <option value="Sejarah">Sejarah</option>
          </select>
          <select className='country' name="" id="">
            <option value="Edukasi">Edukasi</option>
          </select>
          <select className='country' name="" id="">
            <option value="Romantis">Romantis</option>
          </select>
          <div className="div">
            <p><img src="/public/cart.svg" alt="cart" /></p>
            <p><img src="/public/Button.svg" alt="icon" /></p>
          </div>
        </div>
        <div className="hero">
          <div className="left">
            <a className='hero-link' href="#">✈ • Explore the wonderful indonesia!</a>
            <h1>Liburan & nikmati <br />
              tempat baru di <br />
              indonesia  ️🏝</h1>
            <p className='subtitle'>Destinize membuat kamu selalu update terkait tempat liburan <br /> baru di Indonesia dengan mengikuti perkembangan para <br /> influencer di sosial media ✨</p>
            <div className="btns">
              <button className='Mulai'>   Mulai sekarang →</button>
              <div className='play'><img className='Polygon' src="/public/Polygon 1.svg" alt="Polygon" />
                <p className='PutarDemo'>Putar Demo</p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src="/public/Group 592 1.png" alt="human" />
          </div>
        </div>
        <div className="partners">
          <img className='axion' src="/public/image 27.png" alt="axion" />
          <img className='jetstar' src="/public/image 28.png" alt="jetstar" />
          <img className='expedia' src="/public/image 29.png" alt="expedia" />
          <img className='qantas' src="/public/image 30.png" alt="qantas" />
          <img className='litalia' src="/public/image 31.png" alt="litalia" />
        </div>
        <div className="cards">
          <a className='cards-link' href='#'>DESTINASI FAVORIT</a>
          <div className="link-fvoritm">
            <h2 className='favoritmu'>✈ • Temukan Destinasi Favoritmu </h2><a className='lihat' href="#">Lihat semua <img className='Vector' src="/public/Vector 1.svg" alt="Vector" /></a>
          </div>
          <div className="cardss">
            <div className="card card1">
              <div className="card-description">
              <p className='card-p'>Raja Ampat
            </p><p className='secondp'>Bali </p></div>
            </div>
            <div className="card card2">
              <div className="card-description">
              <p className='card-p'>Labuan Bajo 
            </p><p className='secondp'>NTT </p></div>
            </div>
            <div className="card card3">
              <div className="card-description">
              <p className='card-p'>Kawah Ijen 
            </p><p className='secondp'>Jawa Timurp </p></div>
            </div>
            <div className="card card4">
              <div className="card-description">
              <p className='card-p'>Bromo
            </p><p className='secondp'>Jawa Timurp </p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
