let myKey = "oLRJ9n0jQEVDtCEIqmthaKxPJTYVtbwcXaWm6Ey5uNw2gWjhU1CrNmvN";
let url = "https://api.pexels.com/v1/search?query=";
let btn = document.getElementById("button-addon1");

function getQuery(){
  let query =  document.getElementById("search").value
  //console.log(query)
  return query
}

function searchPhoto()  {
  fetch(url + getQuery(),{
    headers :{
      Authorization: "oLRJ9n0jQEVDtCEIqmthaKxPJTYVtbwcXaWm6Ey5uNw2gWjhU1CrNmvN" ,
    },
  }).then(res => res.json())
  .then(result => {
    console.log(result)
   
    let contenuto = document.querySelector(".album .row")

      contenuto.innerHTML = result.photos.map((photo)=> {
        return ` 
                  <div class=' col col-4' >
                    <div class ='card mb-4 shadow-sm' style="height:auto; width:10em">
                      <img src='${photo.src.large}' class="m-4" />
                    </div>
                  </div>
                `
      }).join("")


  });

}