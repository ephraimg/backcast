var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',
  
  parse: function(response) {
    return response.items;
  },
  
  search: function(string) {
    this.fetch({
      data: {
        part: 'snippet',
        q: string,
        maxResults: '5',
        key: YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });
  }


});
