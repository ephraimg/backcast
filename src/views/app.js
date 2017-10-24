var AppView = Backbone.View.extend({

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({collection: this.videos, el: '#app .list'}).render();
    new VideoPlayerView({model: this.videos.at(4), el: '.player'});//.render();
    new SearchView({el: '.search'}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
