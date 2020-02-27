
import albums from './albums.json';
import users from './users.json';
import photos from './photos.json';



const superAgentConfig = [
    {
      /**
       * regular expression of URL
       */
      pattern: 'https://localhost:3000(.*)',
  
      /**
       * returns the data
       *
       * @param match array Result of the resolution of the regular expression
       * @param params object sent by 'send' function
       * @param headers object set by 'set' function
       * @param context object the context of running the fixtures function
       */
      fixtures: function (match, params, headers, context) {
         
        /**
         * Checking on parameters example:
         *   request.get('https://domain.example/hero').send({superhero: "superman"}).end(function(err, res){
         *     console.log(res.body); // "Your hero: superman"
         *   })
         */
  
        if (match[1] === '/albums') {          
            return {albums}          
        }

        if (match[1] === '/photos') {          
            return {photos}          
        }

        if (match[1] === '/users') {          
            return {users}          
        }  
        
      },
  
      /**
       * returns the result of the GET request
       *
       * @param match array Result of the resolution of the regular expression
       * @param data  mixed Data returns by `fixtures` attribute
       */
      get: function (match, data) {
        return {
          body: data
        };
      },
  
      /**
       * returns the result of the POST request
       *
       * @param match array Result of the resolution of the regular expression
       * @param data  mixed Data returns by `fixtures` attribute
       */
      post: function (match, data) {
        return {
          status: 201
        };
      }
    },
  ];
  
export default superAgentConfig;