var sails = require('sails');

before(function(done) {

  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(50000);

  sails.lift({
    // configuration for testing purposes
    connections: {
      someMysqlServer: {
      adapter: 'sails-mysql',
      host: 'localhost',
      user: 'root', //optional
      password: '123456', //optional
      database: 'yuki' //optional
      },
    },
    models: {
      migrate: 'alter'
    }
  }, function(err) {
    if (err) return done(err);
    app = sails;
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});