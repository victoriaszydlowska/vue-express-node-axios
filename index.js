const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { JSOM } = require('jsdom')
const cheerio = require('cheerio');
const { URL } = require('url');
const request = require('request')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

app.get('/api/data', (req, res) => {
    const data = { message: 'You are connected to back-end!' };
    res.json(data);
    
});

function normalizeURL(urlString){

    const urlObject = new URL(urlString)
    const hostPath = `${urlObject.hostname}${urlObject.pathname}`
    if (hostPath.length>3 && hostPath.slice(-1)=== '/'){
        return hostPath.slice(0,-1)
    }
    return hostPath
} 



app.post('/data', (req, res) => {
    const name = req.body.name;
    console.log('Received URL:', name);
    const links = [];

    try{
    const websiteUrl = name;
    
    // Fetch the HTML content of the website
    request(websiteUrl, (error, response, html) => {
        console.log(response.statusCode)

        if(response.statusCode>400 &response.statusCode<600){
            const statusCodeError= response.statusCode;
            links.push(statusCodeError);
            res.send(links)
        }
         else if (!error && response.statusCode == 200) {
            // Load HTML content using Cheerio
            const $ = cheerio.load(html);

            // Get the hostname of the requested website
            const { hostname } = new URL(websiteUrl);

            // Extract all links from the HTML
            $('a').each((i, element) => {
                const href = $(element).attr('href');
                if (href) {
                    // If the link is relative, convert it to absolute URL
                    const absoluteUrl = new URL(href, websiteUrl).toString();
                    // Check if the link has the same domain
                    
                    if (new URL(absoluteUrl).hostname === hostname) {

                        links.push(normalizeURL(absoluteUrl));


                    }
                    
                }
            });

            if (links.length==0){
                links.push("No links have been found")
            }
            //Usage of sets removes duplicates and then there is a new array created which takes the set values 
            const removeDuplicates= Array.from(new Set(links))
            res.send(removeDuplicates);
        } else {
            res.status(500).json({ error: 'Failed to fetch website' });
        }
    });
}
catch(err){
    console.log("Invalid URL")
    links.push("Invalid URL")
    res.send(links)    
}

  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});