import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoadingPage from './loaders/LoadingPage';
import React,{ useState, useEffect } from 'react';
import Header from './components/Header';
function App() {

  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(false)
  },[])

  if(loading)
    return <LoadingPage/>
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App;
