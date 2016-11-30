var server=require('node-http-server');

    server.deploy(
        {
            port:80,
            root:'pages/',
            https:{
               privateKey:`private/recipio.key`,
               certificate:`certs/recipio.crt`,
               ca: `certs/intermediate.crt`,
               port:443,
               only:true
           }
        }
    );
