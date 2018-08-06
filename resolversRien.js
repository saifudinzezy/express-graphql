export default {
  Query: {
    allAuthors: (parent, args, { db }, info) => db.author.findAll(),
    allPosts: (parent, args, { db }, info) => db.post.findAll(),
    authors: (parent, { id }, { db }, info) => db.author.findById(id),
    getPosts: (parent, { id }, { db }, info) => db.post.findById(id),
    getAuthor: (parent, { id }, { db }, info) => db.author.findById(id),
  },
  Mutation: {
    createPost: (parent, args, { db }, info) => db.post.create(args),
    updatePost: (parent, { id, title, content }, { db }, info) => 
      db.post.update({
        title: title,
        content: content
      },
      {
        where: {
          id: id
      }
    }),
    deletePost: (parent, {id}, { db }, info) => 
        db.post.destroy({
        where: {
         id: id
      }
    })
  },
};