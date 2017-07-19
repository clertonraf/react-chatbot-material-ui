var watson = require('watson-developer-cloud');

var conversation = watson.conversation({
    username: '0a2588e8-c11f-4894-841c-e1e42942ee31',
    password: 'p2gRziEi6Bai',
    version: 'v1',
    url: 'https://gateway-fra.watsonplatform.net/conversation/api',
    version_date: '2017-05-26'
});

var context = {};

console.log('User: oi');

conversation.message({
    workspace_id: '28ab5aba-cdf0-42f4-b882-db43df26b430',
    input: { 'text': 'oi' },
    context: context
}, function (err, response) {
    if (err) {
        console.log('error:', err);
    } else {
        context = response.context;
        console.log("Watson: ", response.output.text[0]);
        console.log('User: sim');
    }
});