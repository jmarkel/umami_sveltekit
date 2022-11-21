<script>
    // component props
    // Camel case not supported for props, see drawback section.
    export let article_title, article_img;
  </script>
  
  <main>
    <div class="card-container">
      <div class="card">
        
        <div class="card-body">
          <div class="row">
            <div class="card-title">
              <h2>{article_title}</h2>
            </div>
            <img src={article_img} alt={article_title} />
            </div>
            <p>
              <a class="uppercase" href="#">View Article &gt;</a>
            </p>
        </div>
    </div>
  </main>
  
  <style>
   .card {
      max-width: 350px;
      border-radius: 5px;
      box-shadow: 0 4px 6px 0 #00000033;
      padding: 0 0 10px 0;
    }
  
    .card img {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  
    .card-body {
      padding: 5px 10px;
    }
  
    .card-body p {
      color: #575757;
      margin-bottom: 20px;
      font-size: 14px;
    }
  </style>