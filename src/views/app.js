var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({collection: this.videos}).render();
    new VideoPlayerView({model: this.videos[0]}).render();
    new SearchView().render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
