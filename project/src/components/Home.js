
import "../css/Home.css";


function Home() {
  
  return (
    
    < div className={"bg"}>
     
      
      <h2 className="title">Unlimited Movies, Tv shows and more...</h2>
      <form onSubmit={(e)=>{
        e.preventDefault();
        
      }}>
      <input className={"search"} placeholder={"search Movies,Tv shows"}></input>
      <button className="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default Home;