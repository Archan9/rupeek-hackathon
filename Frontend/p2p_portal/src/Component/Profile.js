import Navbar from "./Navbar";
import Card from "./Card";

export default function Profile() {

  const cards = [
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp"  ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." }
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
