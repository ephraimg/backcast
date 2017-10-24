var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry-title': 'handleTitleClick'
  },
  
  handleTitleClick: function() {
    this.model.select();
  },

  initialize: function() {
    // console.log(this.$el.find('video-list-entry-title'));

    // this.$el.find('video-list-entry-title').on('click', this.model.select);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
