var siteNameInput =document.getElementById("siteNameInput");
var siteUrlInput =document.getElementById("siteUrlInput");

var site=[];

function addSite(){

    if( isValidUrl()==true ){
        var website={
            Name:siteNameInput.value,
            URL:siteUrlInput.value
    
        }
        site.push(website);
    
        
    
    
        clearForm();
        displayData();
        
    }
    
}

function clearForm(){
    siteNameInput.value="";
    siteUrlInput.value="";
}
 function displayData(){
    var data="";
    for(var i=0; i<site.length ;i++ ){
      data+=`<tr>
      <td> ${i}</td>
      <td> ${site[i].Name}</td>
      <td> 
      <button class="btn btn-sm btn-success px-2"> <i class="fa-solid fa-eye pe-2"></i> <a href="${site[i].URL}" class="text-white text-decoration-none"> Visit </a> </button> 
      </td>
      <td> 
      <button onclick="deleteItem(${i})" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can pe-2"></i> Delete </button> 
      </td>
      
       </tr>`
    }
    document.getElementById("tableBody").innerHTML = data;
 }

function deleteItem(index){
   site.splice(index ,1);
   displayData();
}

var mess=document.getElementById("alertMess")

function isValidUrl() {
    var urlName=siteUrlInput.value;
    var regex = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g
    
  if( regex.test(urlName) ){
    siteUrlInput.classList.add( "is-valid" )
    siteUrlInput.classList.remove( "is-invalid" )
    mess.classList.add("d-none")
    return true;

  }
  else{
    siteUrlInput.classList.add( "is-invalid" )
    siteUrlInput.classList.remove( "is-valid" )
     mess.classList.remove("d-none")
    return false;
  }

  }






