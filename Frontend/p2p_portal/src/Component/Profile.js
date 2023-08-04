import Navbar from "./Navbar";
import Card from "./Card";

export default function Profile() {

  const cards = [
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp"  ,title:"Amar" ,description:"credit_score: Credit score of the customer (e.g., 750)" },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Amal" ,description:"credit_score: Credit score of the customer (e.g., 750)" },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Akash" ,description:"credit_score: Credit score of the customer (e.g., 750)" },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Amit" ,description:"credit_score: Credit score of the customer (e.g., 750)" },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Sasi" ,description:"credit_score: Credit score of the customer (e.g., 750)"},
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Balaji" ,description:"credit_score: Credit score of the customer (e.g., 750)"}
  ];
const fetchCards =()=>{
  
}

  return (
    <>
      <Navbar title="Profile"/>
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
      {cards.map((card, index) => (
        <Card showBtn={false} id={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} />
      ))}
    </div>
    </>
  );
}
