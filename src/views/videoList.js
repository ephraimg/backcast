var VideoListView = Backbone.View.extend({

  el: '#app .list',
    
  sample: [$('<div>').html('hello'), $('<div>').html('hello'), $('<div>').html('hello'), $('<div>').html('hello'), $('<div>').html('hello')],

  initialize: function() {
    console.log('in vlv initialize');
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
