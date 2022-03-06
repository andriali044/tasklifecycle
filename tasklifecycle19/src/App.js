import React, { useState } from 'react'
import axios from 'axios'
function App() {

  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');

  const fetchNews = (e) => {
    e.preventDefault();
    console.log(query);
    // axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2022-02-05&sortBy=publishedAt&apiKey=4da4024fcb0b490cb56b031302a4a808`)
    axios.get(`https://newsapi.org/v2/top-headlines?q=${query}&country=us&category=business&apiKey=8368e4459d25495280471dc2f610a8bb`)
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }
  return (
    <>
      <div>
          <form onSubmit={fetchNews}>
              <label className='label'>Searching News with NewsAPI</label>
              <input type="text" value={query} className='form-control my-1'  
              onChange={(e) => setQuery(e.target.value)} placeholder='input your search in here' />
              <input type="submit" value="Submit" className='btn btn-primary' />

          </form>
      </div>
        <div className="row">
          {
            news.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href={value.url} className="btn btn-primary">Main</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      
    </>
  )
}

export default App;