
import './App.css'

function App() {
  
  return (
    <>
      
      <div className='quizContainer bg-gradient-to-r from-teal-400 to-blue-500 h-screen flex items-center justify-center'>
         <div id='quizElem' className='flex flex-col gap-4 bg-white border-black rounded-md shadow-md pb-3'>
          
          <div className='text-2xl font-bold border-b-4 border-sky-300 p-3 flex justify-between'>
            <h1>Quiz Application</h1>
            
          </div>
          
          <div className='text-xl font-medium px-4'>
            <h1>1. What is the most famous sport in the world?</h1>
          </div>

          <div className='px-8 py-2'>
            <ul>
              <li className='p-2 rounded-md border-2 border-blue-300 m-1 font-medium hover:bg-blue-200'>Cricket</li>
              <li className='p-2 rounded-md border-2 border-blue-300 m-1 font-medium hover:bg-blue-200'>Football</li>
              <li className='p-2 rounded-md border-2 border-blue-300 m-1 font-medium hover:bg-blue-200'>Rugby</li>
              <li className='p-2 rounded-md border-2 border-blue-300 m-1 font-medium hover:bg-blue-200'>Hockey</li>
            </ul>
          </div>

          <div className='px-8 py-2 flex justify-between'>
            
            <button className='text-indigo-500 rounded-md bg-indigo-100 px-2 py-1 text-base font-medium justify-between border-indigo-500 border-2'>1 of 10 Questions</button>
            <button className='text-white rounded-md bg-sky-500 px-2 py-1 text-base font-medium'>Next Question</button>
          </div>

         </div>
      </div>
    </>
  )
}

export default App
