


function superReducedString(s) {

    let arr=s.split('');
    
    for(let i=0; i<arr.length-1; i++){
        if (arr[i] === arr[i+1]){
            arr.splice(i,2);
            i-=2;
        }
    }
     if (arr.length === 0){
         return "Empty String" ;
     }
     else{
         return arr.join('');
     }
    }



    