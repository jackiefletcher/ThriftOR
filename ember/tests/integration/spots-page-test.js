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

  test('Should list all spots', function(assert) {
    visit('/spots').then(function() {
      assert.equal(find('a:contains("Village Merchants")').length, 1);
      assert.equal(find('a:contains("Red Fox")').length, 1);
    });
  });

  test('Should be able to navigate to a spot page', function(assert) {
    visit('/spots').then(function() {
      click('a:contains("Village Merchants")').then(function() {
        assert.equal(find('h4').text(), 'Village Merchants');
      });
    });
  });

  test('Should be able to visit a spot page', function(assert) {
    visit('/spots/1').then(function() {
      assert.equal(find('h4').text(), 'Village Merchants');
    });
  });

  test('Should remove entries that do not fit query', function(assert) {
    visit('spots').then(function() {
      fillIn("input#query", 'Red');
      assert.notEqual(find('li.spot a').text(), 'Village Merchants');
    });
  });

  test('Should retain entries that do fit query', function(assert) {
    visit('spots').then(function() {
      fillIn("input#query", 'Red').then(function() {
        assert.equal(find('li.spot a').text(), 'Red Fox');
      });
    });
  });
