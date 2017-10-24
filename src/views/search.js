var SearchView = Backbone.View.extend({

  events: {
    'click button': 'search',
    'keyup': 'keySearch'
  },
  
  keySearch: function(e) {
    if (e.keyCode === 13) {
      this.search();
    }
  },
  
  search: function() {
    var query = this.$el.find('input').val();
    this.collection.search(query);
  },

  initialize: function() {
    
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
