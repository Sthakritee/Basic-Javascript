/* Ajax with Javascript 
Asynchronous Javascript And Xml
Send and receive information in various formats.


ajax allows to update the parts of the website without updating the whole website.
*/
function loadDoc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            document.getElementById("demo").innerHTML = this.responseText;
            
        }
    };
    xhttp.open("GET", "https://crossorigin.me/http://carnes.cc/code/ajax_example.txt",true);
    xhttp.send();
}
