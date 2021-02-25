import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
var person = {
  name: 'Fahim',
}
function App() {
  const courses = [
    {
      name: 'React',
      price: '$99.99'
    },
    {
      name: 'AWS Cloud',
      price: '$10,000'
    },
    {
      name: 'Google Cloud',
      price: '$10,000'
    }
  ]
  return (

    < div className="App" >
      <header className="App-header">
        <Posts></Posts>

        <ul>
          {
            courses.map(course => <li>{course.name}</li>)
          }
        </ul>
        <Counter></Counter>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ backgroundColor: 'black' }}>Hello {person.name}</p>
        <Message></Message>
        {
          courses.map(course => <Course course={course}></Course>)
        }
        <Trainer name='Jisan' title='React Learner'></Trainer>
      </header>
    </div >
  );
}

function Message() {
  const messageStyle = {
    border: '1px solid tomato',
    margin: '10px',
    padding: '5px'
  }
  return (
    <div style={messageStyle}>
      <h2>Grate News</h2>
      <p>We are starting our first work with React</p>
    </div>
  )
}


// Props
function Trainer(props) {
  return (
    <p>Student name: {props.name}, {props.title}</p>
  )
}


function Course(props) {
  const style = {
    backgroundColor: 'tomato',
    border: '1px solid gold',
    float: 'left',
    height: '200px',
    width: '200px',
  }

  const { name, price } = props.course;

  return (
    <div style={style}>
      <h3>{name}</h3>
      <h5>{price}</h5>
    </div>
  )
}


// Component state hook and set state method
function Counter() {
  const [count, setCount] = useState(10)
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}


// Load dynamic data, API call useEffect integrate state
function Posts() {
  const [posts, SetUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => SetUsers(data))
  }, [])

  return (
    <div>
      <h4>Posts: {posts.length}</h4>
      <ul>
        {
          posts.map(post => <li>{post.title}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
