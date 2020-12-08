import { useEffect, useState } from 'react';
import './App.css';

// Function to get the data from the APIs
const fetchUsers = (apiEndpoint) => {
  return (
    fetch(apiEndpoint)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
  );
};

function App() {
  const [commentData, setCommentData] = useState([{}]);

  useEffect(() => {
    fetchUsers(`https://jsonplaceholder.typicode.com/comments`).then((data) => {
      setCommentData(data);
    });
  }, []);

  return (
    <>
      {commentData.map((comment) => (
        <div className="card" key={comment.postId}>
          <div>
            <h3>{comment.name}</h3>
            <h5>{comment.email}</h5>
            <p>{comment.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
