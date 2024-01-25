import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect } from 'react';

function App() {
  // http://localhost:3000

  // env 변수 가져오기
  const client_id = process.env.REACT_APP_CLIENT_ID
  const secret = process.env.REACT_APP_SECRET

  useEffect(function () {
    axios({
      url: '/v1/search/news.json',
      params: { query: "짜장" },
      headers: {
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': secret
      }
    })
      .then((result) => {
        console.log(result)
      })

  }, [])

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;