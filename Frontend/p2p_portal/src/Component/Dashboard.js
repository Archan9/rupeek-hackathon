import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Card from "./Card";

export default function Dashboard() {
  const [cards,setCards] = useState([]);

  const BASE_URL='http://localhost:8000';

  const fetchCards=async(url)=>{
    try {
      const res=await axios.get(BASE_URL+url,{
        headers:{
          Authorization: `JWT ${localStorage.getItem('jwt')}`,
        }
      })
      console.log(res.data);
      setCards(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchCards('/api/user/loan/open');
  },[])

  return (
    <>
      <Navbar />
      <div className="btns">
        <button className="btn" autoFocus={true} 
        onClick={()=>{
          fetchCards('/api/user/loan/open');
        }}
        >Borrowed</button>
        <button className="btn"
        onClick={()=>{
          fetchCards('/api/user/loan/open/pending');
        }}
        >Pending</button>
        <button className="btn"
        onClick={()=>{
          fetchCards('/api/user/loan/open/lender');
        }}
        >Lent</button>
      </div>
      <div className="grid grid-cols-4 gap-4 p-5">
      {cards.length&&cards.map((card, index) => (
        <Card id={card.id} title={card.borrower.username || 'Random Guy'} description={card.amount} imageUrl="https://i.postimg.cc/15nMZRVX/vector-users-icon.webp"  />
      ))}
    </div>
    </>
  );
}
