// Author : Ankit Kumar Maurya

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
    	
    }   
}, false);