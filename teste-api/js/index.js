//My api key
var apiKey = {
    key: 'SUA API AQUI :D'
};

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + 
        apiKey.key)
        .then((response) => {
            if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
            return response.json();
        })
        .then((api) => {

            var texto = "";
            //Get 10 coins and symbols
            for(let i = 0; i < 10; i++){


            //Show API Informations
            
                texto = texto + `
                
                <div class="media">
                    <img src="/img/coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                    <div class="media-body">
                    <h5 class="nt-2">${api.data[i].name} (${api.data[i].symbol}) Rank(#${api.data[i].rank})</h5>
                    <p>${api.data[i].first_historical_data}</p>
                    </div>
                </div>

                `;

                document.getElementById("coins").innerHTML = texto;
            }
        })
        .catch((error) => {
            console.error(error.message);
        })

