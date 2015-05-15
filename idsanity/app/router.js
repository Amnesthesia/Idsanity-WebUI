import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('keys', function(){
      this.route('index', { path: '/' });
  });
  this.resource('softwares', function() {
      this.route("index", {path: "/"});
      this.route("nodes", {path: "/:software_id/nodes"});
      this.route("rules", {path: "/:software_id/rules"});
  });
  this.resource('rules', function() {
    this.route("index", {path: "/"});
    this.route("details", {path: "/:rule_id"});
  });
  this.resource('operating-system', function() {
      this.route("index", {path: "/"});
      this.route("nodes", {path: "/:os_id/nodes"});
  });
  this.resource('nodes', function(){
      this.route("index", {path: "/"});
      this.route("details", {path: "/:node_id", template: 'node'});
  });
  this.resource('node-rule', function() {
      this.route("details", {path: "/:node_rule_id"})
  });
});

export default Router;
