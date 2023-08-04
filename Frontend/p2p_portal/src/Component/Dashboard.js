import Navbar from "./Navbar";
import Card from "./Card";

export default function Dashboard() {

  const cards = [
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp"  ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." },
    { id:1, imageUrl:"https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" ,title:"Example Card" ,description:"This is an example card with an image and text." }
  ];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 p-5">
      {cards.map((card, index) => (
        <Card id={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} />
      ))}
    </div>
    </>
  );
}
