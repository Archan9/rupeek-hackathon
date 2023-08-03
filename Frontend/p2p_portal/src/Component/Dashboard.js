import Navbar from "./Navbar";
import Card from "./Card";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <Card
              imageUrl="https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" // Replace with the URL of your image
              title="Example Card"
              description="This is an example card with an image and text."
            />
            
            <Card
              imageUrl="https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" // Replace with the URL of your image
              title="Example Card"
              description="This is an example card with an image and text."
            />

            <Card
              imageUrl="https://i.postimg.cc/15nMZRVX/vector-users-icon.webp" // Replace with the URL of your image
              title="Example Card"
              description="This is an example card with an image and text."
            />
          </div>
          
        </div>
      </div>
    </>
  );
}
