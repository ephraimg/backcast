var VideoListView = Backbone.View.extend({

  el: '#app .list',
    
  sample: [$('<div>').html('hello'), $('<div>').html('hello'), $('<div>').html('hello'), $('<div>').html('hello'), $('<div>').html('hello')],

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.html(this.template());
    this.$('.video-list').empty();
    this.$('.video-list').append(this.collection.map(function(video) {
      return new VideoListEntryView({model: video}).render().el;
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
