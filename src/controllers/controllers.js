//to wrap tokens user
exports.wrap = async (req, res) => {
    //create new wallet address
    try{  
        req = req.query;
        if(req.code && req.issuer){  
            //make call to the actual server
           const response = await fetch(`http://195.26.242.45:4000/wrap?code=${req.code}&issuer=${req.issuer}`);
           if (!response.ok) {
               //network error
               res.send(JSON.stringify({status:'error', msg:'something went wrong'}))
            }
            const resp = await response.json();
            if(!resp.status) {return {status: false, msg:'Internal server error'}}
            else res.send(resp)
        }
        else{res.send(JSON.stringify({status:'error', msg:'fields missing'}))}
    }
    catch(e){res.send(JSON.stringify({status:'error', msg:'something went wrong'}))}    
}  
