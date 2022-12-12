// Optional chaining syntax allows you to access deeply nested object properties without worrying if the property exists or not.
// If it exists, great! If not, undefined will be returned.
// This works on object properties but also on function calls and arrays.
// Super convenient! Like this example:

const post = {
    "title":"ES2020: Quoi de neuf Javascript ?",
    "createdAt":"2020-04-02T16:00:00.000Z",
    "author":{
       "username":"Arkerone",
       "email":"contact@codeheroes.fr"
    },
    "comments":[
       {
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          "createdAt":"2020-04-02T17:00:00.000Z",
          "author":{
             "username":"John Doe",
             "email":"john@doe.com"
          }
       },
       {
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          "createdAt":"2020-04-02T19:00:00.000Z",
          "author":{
             "username":"Jane Doe",
             "email":"jane@doe.com"
          }
       }
    ]
 };

const postComments = post && post.comments; // (1)
const firstComment = postComments && postComments[0]; // (2)
const author = firstComment && firstComment.author; // (3)
const username = author && author.username; // (4)

// (1) : On vérifie que la variable post existe, si c’est le cas on récupère son tableau de commentaires;
// (2) : On vérifie que le tableau de commentaires existe, si c’est le cas on récupère le premier commentaire;
// (3) : On vérifie que le premier commentaire existe, si c’est le cas on récupère l’auteur;
// (4) : Et enfin, on vérifie que l’auteur existe et si c’est le cas on récupère son nom d’utilisateur.