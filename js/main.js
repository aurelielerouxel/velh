// AJAX request
let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE){

        if(httpRequest.status === 200){

            //  store the json file in a variable
            layer.innerText = httpRequest.responseText;
        }
        else {
            // there was a problem with the request,
            console.log("une erreur est survenue");
        }
    } 
    else {
        // not ready yet,
        console.log("en attente de réponse");
    }
}