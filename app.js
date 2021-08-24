/*ZebraAmy95133
1) Routes: forward the requests 
(and any information encoded in request URLs) 
to the appropriate controller functions.
2) Controller functions to get the requested data 
from the models, create an HTML page displaying the 
data, and return it to the user to view in the browser.
3) Views (templates) used by the controllers to render the data.
*/
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');