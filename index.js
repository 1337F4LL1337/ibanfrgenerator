function makeid(length) {
    var result           = '';
    var characters       = '123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 let n = 0
    let inter = setInterval(()=>{
    console.log("FR"+makeid(25))
    n++
}, 1) // In MS
