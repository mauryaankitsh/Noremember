



// localStorage.setItem('hihihih','hahahaha');
// var data=localStorage.getItem('hihihih');
// console.log(data);


// var fs = require("fs");
// console.log("Going to write into existing file");
// // Open a new file with name input.txt and write Simply Easy Learning! to it.
// fs.writeFile('input.txt',"\n"+ "domain------->", function(err) {
//    if (err) {
//       return console.error(err);
//    }
// });
// fs.writeFile('input.txt',"\n"+ "password", function(err) {
//    if (err) {
//       return console.error(err);
//    }
// });

// const fs = require('fs') 
  
// // Data which will write in a file. 
// var data = "Learning how to write in a file."
  
// // Write data in 'Output.txt' . 
// fs.writeFile('Output.txt', data, (err) => { 
      
//     // In case of a error throw err. 
//     if (err) throw err; 
// }) 





// function save2File() {
//     	var t1 ="hii "
//         var t2 = "Ankit";
//         var data = t1 + ' ' + t2;
        
//         var textToBLOB = new Blob([data], { type: 'text/plain' });
//         var sFileName = 'Documents/passwords/formData.txt';   // The file name.
//         var newLink = document.createElement("a");
//         newLink.download = sFileName;
//         if (window.webkitURL != null) {
//             newLink.href = window.webkitURL.createObjectURL(textToBLOB);
//         }
//         else {
//             newLink.href = window.URL.createObjectURL(textToBLOB);
//             newLink.style.display = "none";
//             document.body.appendChild(newLink);
//         }
//         newLink.click();
//     }
// save2File();


document.addEventListener('click', function(e) {
    e = e || window.event;
    try{
    var target = e.target || e.srcElement,
        text = target.value || target.textContent || target.innerText;
     	console.log(text);
         	if(text.toLowerCase()=="login" ||text.toLowerCase()=="log in"||text.toLowerCase()=="sign in"||text.toLowerCase()=="signin"){
         		console.log("hiihihiihi");
        		//var host=console.log(window.location.host);
        		const form = document.querySelector('form')
				var formdata=Object.values(form).reduce((obj,field) => { obj[field.type] = field.value; return obj }, {})
				var password=formdata.password;
				var domain=window.location.hostname
				console.log(domain+" "+password);
				 var getpass=localStorage.getItem(domain);
				 console.log(getpass);
				if(password=="" )
				{
					
					if(getpass===null)
					{
						alert("No previous data found");
					}
					else
					{
						alert("Your previous saved password for "+domain+" is:: \n"+getpass);
					}
				}
				else if(password!=getpass)
				{
					var res=confirm("press ok to update password");
					if(res==true)
					{
						//if(getpass!=null)
							localStorage.removeItem(domain);
						localStorage.setItem(domain,password);
					}
					else
					{
						alert("your saved password is :: "+getpass);
					}
				}
				else
				{
					alert("problem exist in saving the password");
				}
				// console.log(domain+"\n");
				// console.log(password);
         	}
        	
        
        }
    catch{
    	//alert("There is some problem getting the target");
    }   
}, false);