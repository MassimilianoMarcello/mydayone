import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList()
{
return (
  <div>
    <nav>
      <FirstTitle />
    </nav>

    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  </div>
);}

const Book = () => (
  <article className="book">
    <h1>Learn React</h1>
    <Image />
    <h2>{Title}</h2>
    {Author}
  </article>
);

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/819mkxDbhIL._AC_UY327_FMwebp_QL65_.jpg"
    alt=""
  />
);
const FirstTitle = () => <h1>Best React Books</h1>;
//using a different method
const Title= "React Explained";
const Author = <h2>Zac Gordon</h2>;



  ReactDOM.render(<BookList />, document.getElementById("root"));
