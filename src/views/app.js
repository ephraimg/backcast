var AppView = Backbone.View.extend({

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('icicles');
    this.videos.on('sync', this.render, this);
    //var defaultVideos = 
    // this.videos.fetch(this.videos);
    // defaultVideos.done(() => {
    //   this.render();
    // });
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView({ collection: this.videos,
      el: '.search'}).render();
    
    new VideoPlayerView({
      collection: this.videos, 
      model: this.videos.at(0), 
      el: '.player'}).render();
    
    new VideoListView({
      collection: this.videos, 
      el: '#app .list'}).render();
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
