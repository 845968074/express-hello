let express=require('express');
let app=new express();
app.get('/',function (req,res) {
       res.send("Hello world");
});
app.listen(3000);