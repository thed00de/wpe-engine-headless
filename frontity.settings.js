const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://test.frontity.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    {
			name: '@10up/frontity-elasticpress',
			state: {
				elasticpress: {
					node: 'https://thorstentestessential.clients.hosted-elasticpress.io',
					indexName: 'thorstentestessential--demoelasticpressio-post-1',
					loadInitialData: true,
				},
			},
		},
  ]
};

export default settings;
