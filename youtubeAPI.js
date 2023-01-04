//const apiKey = "[INSERT YOUTUBE API KEY HERE]";
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
const googleApiUrl = "https://www.googleapis.com/youtube/v3/search";

searchButton.addEventListener("click", (e) => {
	const searchTerm = document.getElementById("searchQuery").value;
	const searchQuery = "?part=snippet&q=" + searchTerm + "&key=" + apiKey;
	const url = googleApiUrl + searchQuery;
  fetch(url)
  	.then(response => response.json())
    .then((results) => {
    	results.items.forEach(element => console.log(element));
      for(let item of results.items) {
      	if(item.id.kind == "youtube#video") {
        	let listItem = document.createElement('li');
        	let anchor = document.createElement('a');
          anchor.href = "https://www.youtube.com/watch?v=" + item.id.videoId;
          anchor.innerHTML = item.snippet.title;
          searchResults.appendChild(listItem).appendChild(anchor);
        }
      }
    })
})

/*

HTML CODE HERE:

<h2>
YouTube API
</h2>

<label
for="searchQuery"
>
  Search YouTube
</label>

<input
type="text"
id="searchQuery"
name="searchQuery"
/>

<button
id="searchButton"
>
  Search
</button>


<br/><br/><hr/><br/>


<h2>
Search Results from API
</h2>

<ul
id="searchResults"
>
</ul>

*/