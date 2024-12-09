async function getApiKey(url){
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            }
        });
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json();
        console.log('API key:', data)
    }

    catch(error){
        console.error('Error fetching api key', error)
    }
}
getApiKey('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys');

//nyckeln är: {key: 'yum-zaCmZA74PLKCrD8Y'}