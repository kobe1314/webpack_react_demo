export default function get(url) {
    return fetch(url).then(function(response){
        return response.json();
    }).then(function(resp){
        return resp;
    }).catch(function(error) {
        console.log(error);
    }
    );
}