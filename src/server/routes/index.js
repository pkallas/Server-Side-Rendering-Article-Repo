import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../client/components/App';
import apiRoutes from './apiRoutes';
const router = require('express').Router();

router.use('/api', apiRoutes);

router.get('*', (req, res) => {

  res.write(`<!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Server Side Rendering in React</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="root">`);

  const context = {};

  const stream = renderToNodeStream(
    <StaticRouter context={context} location={req.url} >
    <App />
    </StaticRouter>
  );

  stream.pipe(res, { end: false, });
  stream.on('end', () => {
    res.write('</div><script type="text/javascript" src="/bundle.js"></script></body></html>');
    res.end();
  });

});

module.exports = router;
