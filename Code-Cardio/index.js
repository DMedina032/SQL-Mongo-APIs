route
.get('/', function(req, res, next){
    res.render('index', {
        title: 'Homies'
    })
})
.post('/setdata', async (request,response) => {
    console.log(request.body)
    response.end();
});