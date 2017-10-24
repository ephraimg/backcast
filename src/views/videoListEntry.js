var VideoListEntryView = Backbone.View.extend({

  // el: '#app .video-list',
  
  //model: Video,
  
  initialize: function() {
    // this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
