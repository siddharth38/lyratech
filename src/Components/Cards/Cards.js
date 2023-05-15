import React from 'react';
import './cards.css'
import aboutImg from './icon-gfb6e54711_1920.png'

const Cards = () => {
    return  <div className='mycards'>
   
    <h1 className='d-flex justify-content-center'>What parents says</h1>
<section className='d-flex justify-content-around flex-wrap'>


<div className="card">



<div className="card__body">
<img src={aboutImg} alt="" className='profile' />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
</div>
<div class="card__footer">
  <div class="user">
   
    <div class="user__info">
      <h5>Jane Doe</h5>
      
    </div>
  </div>
</div>
</div>
<div className="card">

<div className="card__body">
  
<img src={aboutImg} alt="" className='profile' />
  <p>Lorem ipsum dolor sit amedoloriLorem ipsum dolor sit amet consnemo doloribus. Doloremque, nihil! At ea atque quidem!bus. Doloremque, nihil! At ea atque quidem!
  </p>
</div>
<div class="card__footer">
  <div class="user">
   
    <div class="user__info">
      <h5>Jane Doe</h5>
      
    </div>
  </div>
</div>
</div>
<div className="card">

<div className="card__body">

<img src={aboutImg} alt="" className='profile' />
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
</div>
<div class="card__footer">
  <div class="user">
   
    <div class="user__info">
      <h5>Jane Doe</h5>
      
    </div>
  </div>
</div>
</div>



</section>
    <hr/>
</div>;
}



export default Cards;