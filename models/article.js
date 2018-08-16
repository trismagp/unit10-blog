'use strict';
var dateFormat = require('dateformat');

module.exports = function(sequelize, DataTypes) {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.TEXT
  });

  // Article.someClassMethod = function() {};

  Article.prototype.publishedAt = function() {
    return dateFormat(this.createdAt, "dddd, mmmm dS, yyyy, h:MM TT");
  };

  Article.prototype.shortDescription = function() {
    return this.body.length > 30 ? this.body.substr(0, 30) + "..." : this.body;
  };

  return Article;
};
