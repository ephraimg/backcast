var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', function(e) {
      this.model = e;
      this.render();
    }, this);
    
    this.collection.on('select', function(e) {
      this.model = e;
      this.render();
    }, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
