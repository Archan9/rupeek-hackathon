import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Card from "./Card";

export default function Dashboard() {
  const [cards,setCards] = useState([]);
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  
  const fetchCards=async(url)=>{
    try {
      const res=await axios.get('https://rupeek-backend.onrender.com/api/user/loan/open',{
        headers:{
          Authorization: `JWT ${jwt}`,
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
      <Navbar  title = "Dashboard"/>
      
      <div className="grid grid-cols-4 gap-4 p-5">
      {cards.length&&cards.map((card, index) => (
        <Card showBtn={true} id={card.id} title={card.borrower.username || 'Random Guy'} description={card.amount} imageUrl="https://i.postimg.cc/15nMZRVX/vector-users-icon.webp"  />
      ))}
    </div>
    </>
  );
}
