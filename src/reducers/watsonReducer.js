const watsonReducer = (state = {
  connect: {
                username: '0a2588e8-c11f-4894-841c-e1e42942ee31',
                password: 'p2gRziEi6Bai',
                version: 'v1',
                url: 'https://gateway-fra.watsonplatform.net/conversation/api',
                version_date: '2017-05-26'
            },
    workspace_id: '28ab5aba-cdf0-42f4-b882-db43df26b430'
}
, action) => {
  switch (action.type) {
    default: break;
  }
  return state;
};

export default watsonReducer;