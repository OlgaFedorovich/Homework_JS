const data = async function() {
    await fetch('/components/data.json')
    .then(response => {
        return response.text();
    })
    .then(result => {
        localStorage.setItem('data', result);
        return result;
    });

};

export default data();