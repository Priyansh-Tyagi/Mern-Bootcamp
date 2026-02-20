import fs from 'fs';
import { createServer } from 'http';

const server = createServer((req, res) => {
    const log = `
Time: ${new Date().toISOString()}
Method: ${req.method}
URL: ${req.url}`;

    fs.appendFile('logfile.txt', log, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Log entry added successfully!');
    });

    res.end('Hello from server');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

/* fs.appendFile('hello.txt','\nNew Line Added' ,'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
        console.log('File updated successfully!');
}); */

/* fs.rename('Hello.txt', 'Nfile.txt',(err) =>{
    if (err){
        console.log(err);
        return;
    }
    console.log('File renamed successfully!');
}); */

/* fs.unlink('Nfile.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }   console.log('File deleted successfully!');
}); */
