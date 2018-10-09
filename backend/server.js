const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "Leif Torger Grøndahl", "location": "Earth"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "2010", "yearTo": "2018", "place": "Politiets IKT Tjenester", "comment": "Was doing stuff"}, {"yearFrom": "2006", "yearTo": "2010", "place": "Nasjonalt Kunnskapssener for Helsetjenesten", "comment": "Drinking coffee"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "1997", "yearTo": "2001", "place": "Høgskolen i Gjøvik", "comment": "Studying"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('something bad happened', err)
  }

  logger.info(`server is listening on ${port}`)
});
