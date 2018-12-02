const http = require('http');

http.get('http://127.0.0.1:8000/service/frequentProducts', res => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('GET : ' + data);
    });
});

const postOptions = {
    hostname: '127.0.0.1',
    port: 8000,
    path: '/service/invoices',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};

const req = http.request(postOptions, res => {
    console.log('POST status : ' + res.statusCode);
    res.setEncoding('utf8');

    res.on('data', data => {
        console.log('POST body : ');
        if (res.statusCode == 201)
            console.log(JSON.parse(data));
        else
            console.log(data);
    });
});

req.write(JSON.stringify({
	id: '100',
	products: [ 'pomme', 'orange', 'banane']
}));
req.end();
