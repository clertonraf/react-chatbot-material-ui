var watson = require('watson-developer-cloud');
var axios = require("axios");

const token = "45b8a93b-840c-4340-bfe3-b2f674b3f084";
const url = "http://soft031-081:8081/cpa-integracao-sma-sp/consulta-processo";
const config = {
    headers: { 'Content-Type': 'application/json', "authorization": "Bearer " + token }
};

var conversation = watson.conversation({
    username: '0a2588e8-c11f-4894-841c-e1e42942ee31',
    password: 'p2gRziEi6Bai',
    version: 'v1',
    url: 'https://gateway-fra.watsonplatform.net/conversation/api',
    version_date: '2017-05-26'
});

console.log(conversation);

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

        conversation.message({
            workspace_id: '28ab5aba-cdf0-42f4-b882-db43df26b430',
            input: { 'text': 'sim' },
            context: context
        }, function (err, response) {
            if (err) {
                console.log('error:', err);
            } else {
                //console.log(JSON.stringify(response, null, 2));
                context = response.context;
                console.log("Watson:", response.output.text[0]);

                const cpf = '11144477735';
                console.log('User:', cpf);

                conversation.message({
                    workspace_id: '28ab5aba-cdf0-42f4-b882-db43df26b430',
                    input: { 'text': cpf },
                    context: context
                }, function (err, response) {
                    if (err) {
                        console.log('error:', err);
                    } else {
                        //console.log(JSON.stringify(response, null, 2));
                        context = response.context;
                        console.log("Watson:", response.output.text[0]);

                        axios.post(url,
                            {
                                "cpfInteressado": cpf,
                                "numeroProcesso": null
                            },
                            config)

                            .then(function (response) {
                                //console.log(response.data)
                                const size = response.data.length;

                                if (!response.data || response.data == '' || size === 0) {
                                    console.log("Não encontramos processos para o seu cpf")
                                } else {
                                    var retorno = response.data;
                                    if (size > 1) {
                                        console.log("Encontramos " + size + " processos. Qual deseja consultar?");
                                        retorno.map((item, index) => console.log((index + 1) + "-" + item.numeroProcesso, ". O status dele é: ", retorno.status === "E" ? "Em andamento" : "Finalizado"));

                                        console.log("User: quero o 2");

                                        axios.post(url,
                                            {
                                                "cpfInteressado": cpf,
                                                "numeroProcesso": retorno[1].numeroProcesso
                                            },
                                            config)
                                            .then(function (response) {
                                                var retorno = response.data[0];
                                                console.log("Watson: Encontramos o processo ", retorno.numeroProcesso, ". O status dele é: ", retorno.status === "E" ? "Em andamento" : "Finalizado");
                                            }).catch(function (error) {
                                                console.log(error)
                                            })
                                    } else {
                                        console.log("Watson: Encontramos o processo ", retorno.numeroProcesso, ". O status dele é: ", retorno.status === "E" ? "Em andamento" : "Finalizado");
                                    }
                                }
                            }).catch(function (error) {
                                console.log(error)
                            })
                    }
                });
            }
        });
    }
});