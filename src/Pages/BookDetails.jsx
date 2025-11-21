import React, { useEffect, useState } from "react";
import { useParams ,useNavigate } from "react-router-dom";
import axios from "axios";




const BookDetails = () => {
  const { isbn13 } = useParams();
  const [book, setBook] = useState(null);

  const navigate = useNavigate();


  const fetchBookData = async () => {
    const url = `https://api.itbook.store/1.0/books/${isbn13}`;
    const result = await axios.get(url);
    setBook(result.data);
    console.log(result);
  };

  useEffect(() => {
    fetchBookData();
  }, [isbn13]);

  if (!book) return <p className="text-center">Loading...</p>;


 

  return (
    <div className="p-10 ">
      <h1 className="text-3xl font-bold mb-5">{book.title}</h1>
      
      <div className="flex flex-col md:flex-row gap-10 ">
        <img
          src={book.image}
          alt={book.title}
          className="w-64 h-auto rounded-xl  bg-[#FFFFFF] shadow-md shadow-[#A7795B40 rounded-2xl border border-[#E8DCC5]  duration-300 hover:shadow-2xl hover:shadow-pink-200 hover:-translate-y-2 cursor-pointer"
        />

        <div>
          <p><strong>Author:</strong> {book.authors}</p>
          <p><strong>Publisher:</strong> {book.publisher}</p>
          <p><strong>Pages:</strong> {book.pages}</p>
          <p><strong>Language:</strong> {book.language}</p>
          <p className="mt-3 text-gray-600">{book.desc}</p>

          <a
            href={book.url}
            target="_blank"
            className="mt-6 inline-block bg-orange-200 text-gray-500 px-6 py-2 rounded-lg"
          >
            View Official Page
          </a>
          <button
       onClick={() => navigate(-1)}
        className="mb-6 bg-orange-200 text-gray-500 px-5 py-2 rounded-lg cursor-pointer ml-2 duration-300"
        >
  ← Go Back
</button>

          
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
