const http = require('http');

// https://github.com/node-formidable/formidable
const formidable = require('formidable');

const server = http.createServer((req, res) => {
  // File Upload API
  if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {
    const form = formidable({ multiples: true });

    /**
     * *  'progress' event. 
     *    Emitted after each incoming chunk of data that has been parsed
     */
    form.on('progress', (bytesReceived, bytesExpected) => {
      // console.log(bytesReceived, bytesExpected);
      const percent_progress = Math.floor(
        (bytesReceived / bytesExpected) * 100
      );
      console.log(`Progress ${percent_progress} %`);
    });

    // Parses an incoming Node.js request containing form data.
    form.parse(req, (err, fields, files) => {
      if (!err) {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ fields, files }, null, 2));
      } else {
        res.statusCode = 500;
        console.log('Error getting file', err.message);
        res.end(err.message);
      }
    });
  }

  // An API which returns/show a simple HTML file upload form
  else if (req.url === '/form' && req.method.toLowerCase() === 'get') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(`
      <h2>With Node.js <code>"http"</code> module</h2>
      <form action="/api/upload" enctype="multipart/form-data" method="post">
        <div>Name <input type="text" name="User Name" /></div>
        <div>Fav Color <input type="text" name="Color Preference" /></div>
        <div>Profile Pic: <input type="file" name="multipleFiles" multiple="multiple" /></div>
        <input type="submit" value="Upload" />
      </form>
  `);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/ ...`);
});
