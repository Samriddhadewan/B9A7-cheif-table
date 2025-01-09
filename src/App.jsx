import './App.css'
import Banner from './assets/components/banner/Banner'
import Header from './assets/components/header/Header'

function App() {
  

  return (
    <>
    <div className='container mx-auto' >
    <Header></Header>
    <Banner></Banner>
    <main>
      <div className='text-center mt-16'>
        <h1 className='#150B2B text-5xl font-semibold '>Our Recipes</h1>
        <p className='#150B2B99 text-base font-normal my-3'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
      </div>
    </main>

    </div>
    </>
  )
}

export default App
