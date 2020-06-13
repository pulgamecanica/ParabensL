var blink = document.getElementById('blink');
setInterval(function() {
   blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 1000); 

function myFunction() {
    var x = document.getElementsByTagName("BODY")[0];
    if (x.style.backgroundColor === 'red') {
        x.style.backgroundColor = 'blue';
    }else if(x.style.backgroundColor === 'blue'){ 
    	x.style.backgroundColor = 'gray';
    }else if(x.style.backgroundColor == 'gray'){ 
    	x.style.backgroundColor = 'green';
    }else {
        x.style.backgroundColor = 'red';
    }
}