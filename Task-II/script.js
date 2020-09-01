var btn=document.getElementById("btn").addEventListener("click",getData);
var div=document.getElementById("postsDiv");
var con=0;
function getData(){
	con=Number(document.getElementById('inp').value);
	let xhr=new XMLHttpRequest();
	xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
	xhr.onload=function(){
		if (this.status === 200) {
			let data=JSON.parse(this.responseText);
			
			for (let index=0; index<1; index++) {
				div.innerHTML=`
				<div class="col-3 card mx-auto border mt-4">
  					<div class="card-body">
					    <p class="card-title">ID: ${data[con-1].id}</p>
					    <p class="card-title">Name: ${data[con-1].name}</p>
					    <p class="card-text">Username: ${data[con-1].username}</p>
					    <p class="card-text">Email: ${data[con-1].email}</p>
					    <p class="card-text">Phone: ${data[con-1].phone}</p>
					    <p class="card-text">Website: ${data[con-1].website}</p>
				    </div>
				</div>
				`
			}
		}
		}
	xhr.send();
}