import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import Pretender from 'pretender';

var App, server;

module('Integration - Spots Page', {
  beforeEach: function() {
    App = startApp();
    var spots = [
      {
        id: 1,
        name: "Village Merchants"
      },
      {
        id: 2,
        name: "Red Fox"
      }
    ];

    server = new Pretender(function() {
      this.get('/api/spots', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({spots: spots})];
      });

      this.get('/api/spots/:id', function(request) {
        var spot = spots.find(function(spot) {
          if (spot.id === parseInt(request.params.id, 10)) {
            return spot;
          }
        });

        return [200, {"Content-Type": "application/json"}, JSON.stringify({spot: spot})];
      });
    });
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

  test('Should allow navigation to the spots page from the landing page', function(assert) {
    visit('/').then(function() {
      click('a:contains("Spots")').then(function() {
        assert.equal(find('h3').text(), 'Spots');
      });
    });
  });
