'use strict';

export default function(app) {
  app.use('/api/date', require('./api/date'));

}
