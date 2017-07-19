const cpaReducer = (state = {
  token: "45b8a93b-840c-4340-bfe3-b2f674b3f084",
  url: "http://soft031-081:8081/cpa-integracao-sma-sp/consulta-processo",
  config: {
            headers: { 
                      'Content-Type': 'application/json', 
                      "authorization": "Bearer 45b8a93b-840c-4340-bfe3-b2f674b3f084"}
          }
}
, action) => {
  switch (action.type) {
    default: break;
  }
  return state;
};

export default cpaReducer;