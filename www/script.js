

$(document).ready(function(){

   $.getJSON('data/app.json', function(data){
      var items = [];
      $.each(data, function(i,entry){
         items.push(`
            <div class="col col-sm-6 col-narrow"> 
               <div class="list-item box">
                  <div class"box-image-container">
                     <a href="${entry["link"]}">
                        <img src="${entry["image"]}" alt="entry ${i} image">
                     </a>
                  </div>
                  <h4>
                     <a href="${entry["link"]}">
                        ${entry["name"]}
                     </a>
                  </h4>
                  <p>
                     ${entry["description"]}
                  </p>
               </div>
            </div>
         `);
      })
      $("#apps").append(items)
   });
})
