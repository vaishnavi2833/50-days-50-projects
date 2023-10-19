import React,{useState} from "react";
import ReactDOM from "react-dom";
import "./App.css";

const images = [
  {
    id:1,
    title:"Explore The World",
    url:"https://images.unsplash.com/photo-1558979158-65a1eaa08691",
    active:true
  },
  {
    id:2,
    title:"Wild Forest",
    url:"https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d",
    active:false
  },
  {
    id:3,
    title:"Sunny Beach",
    url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    active:false
  },
  {
    id:4,
    title:"City on Winter",
    url:"https://images.unsplash.com/photo-1551009175-8a68da93d5f9",
    active:false
  },
  {
    id:5,
    title:"Mountains - Clouds",
    url:"https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    active:false
  }
]

const ExpandingCards = (props) =>{

  const [data,setData] = useState(props.data);

  if(!data || data.length <= 0){
    return "No images to render";
  }

  const onCardClick = (id) =>{
    const newState = [...data];
    newState.map((item)=>item.id===id?item.active=true:item.active=false);
    setData(newState);
  }

  return(
    <section className="cards">
      {
        data.map((card)=> 
          <div className={`card ${card.active && 'active'} `} 
               style={{backgroundImage:`url(${card.url})`}} 
               key={card.id}
               onClick={()=>onCardClick(card.id)}>
            <h2>{card.title}</h2>
          </div>
        )
      }
    </section>
  )

} 

const App = () => { 
  return (
      <ExpandingCards data={images}/>
  );
};

export default App;