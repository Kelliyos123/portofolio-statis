    exports.handler = async function(event, context) {
        // Logika menghitung jumlah pengunjung di sini
        let visitors = 100; // Misalnya, ini dari database atau layanan lain
    
        return {
        statusCode: 200,
        body: JSON.stringify({ visitors: visitors }),
        };
    };
    