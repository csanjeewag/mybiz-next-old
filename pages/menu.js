import Layout from './../layouts/MainLayout';

export default function Blog() {
    return (
      <Layout>
    <div className = "container">
    <div className="card-columns">
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/640/200/tech/1	" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/400/480/tech/2	" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/640/480/tech/3	" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/500/300/tech/4	" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/400/480/tech/5	" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/640/200/tech/6" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/600/500/tech/7" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/600/500/tech/8" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/200/450/tech/20" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/640/480/tech/10" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/640/480/tech/11" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/200/400/tech/12" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/640/480/tech/21" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/640/480/tech/14" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/400/200/tech/15" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/300/300/tech/16" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/300/300/tech/17" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/400/480/tech/18" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/300/400/tech/19" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/400/300/tech/20" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/300/300/tech/16" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/300/300/tech/17" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/400/480/tech/18" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/300/400/tech/19" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/400/300/tech/20" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/400/480/tech/5	" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/640/200/tech/6" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/600/500/tech/7" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/600/500/tech/8" alt="Card image cap"/> </div>
    <div className="card "> <img class="card-img-top" src="	https://placeimg.com/200/450/tech/20" alt="Card image cap"/> </div>

  </div>
</div>

<style jsx>{`
body {
    padding: 2em;
  }
  .card {
    border: none;
  }
  img,
  .card-img-top {
    border-radius: 0em;
  }
  
  @media (min-width: 576px) {
    .card-columns {
      column-count: 2;
    }
  }
  
  @media (min-width: 768px) {
    .card-columns {
      column-count: 3;
    }
  }
  
  @media (min-width: 992px) {
    .card-columns {
      column-count: 4;
    }
  }
  
  @media (min-width: 1200px) {
    .card-columns {
      column-count: 5;
    }
  }
  
`}

</style>
        
      </Layout>
    );
  }