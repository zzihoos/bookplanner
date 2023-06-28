import React, { useState } from "react";
import Header from "../components/Header";


const Add = () => {

  const [cate, setCate] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [company, setCompany] = useState('');
  const [memo, setMemo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle the form submission, such as making an API call or performing any desired actions
    // You can access the values using the state variables: cate, startDay, endDay, title, author, company, memo
    console.log({ cate, startDay, endDay, title, author, company, memo });

    // Reset the form after submission
    setCate('');
    setStartDay('');
    setEndDay('');
    setTitle('');
    setAuthor('');
    setCompany('');
    setMemo('');
  };
  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        </label>
        <input type="text" value={cate} onChange={(e) => setCate(e.target.value)} />
      
      
      <label>
        Start Day:
        </label>
        <input type="date" value={startDay} onChange={(e) => setStartDay(e.target.value)} />
      
      
      <label>
        End Day:
        </label>
        <input type="date" value={endDay} onChange={(e) => setEndDay(e.target.value)} />
      
     
      <label>
        Title:
        </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      
      
      <label>
        Author:
        </label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      
     
      <label>
        Company:
        </label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
    
     
      <label>
        Memo:
        </label>
        <textarea value={memo} onChange={(e) => setMemo(e.target.value)} />
   
  
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default Add;
