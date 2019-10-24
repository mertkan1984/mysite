//const axios = require('axios');
const path = require('path');
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`)

//const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

/*const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      const abilities = await Promise.all(
        pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
          const { data: ability } = await get(`/ability/${abilityName}`);

          return ability;
        })
      );

      return { ...pokemon, abilities };
    })
  );*/


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ actions: { createPage }, graphql,reporter  }) => {
 
  //const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle']);
  const blogPostTemplate = path.resolve("src/templates/blog.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  
  /*const dogData = [
    {
       name: "Fido",
       breed: "Sheltie",
    },
    {
      name: "Sparky",
      breed: "Corgi",
    },
  ]*/

   const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
              thumbnail
            }
            html
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const posts = result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path, //node.fields.slug,  
      component: blogPostTemplate,
    })
  })
  
  // Extract tag data from query
  /*const tags = result.data.tagsGroup.group
 
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })*/



  /*result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve('src/templates/blog.js')
    })
  })*/


  /*dogData.forEach(dog =>{
    createPage({
      path:`/${dog.name}`,
      component: require.resolve('./src/templates/dog-template.js'),
      context : {dog},
    })
  })*/



  // Create a page that lists all Pokémon.

  /*createPage({
    path: `/`,
    component: require.resolve('./src/templates/all-pokemon.js'),
    context: { allPokemon }
  });

  // Create a page for each Pokémon.
  allPokemon.forEach(pokemon => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve('./src/templates/pokemon.js'),
      context: { pokemon }
    });

    // Create a page for each ability of the current Pokémon.
    pokemon.abilities.forEach(ability => {
      createPage({
        path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
        component: require.resolve('./src/templates/ability.js'),
        context: { pokemon, ability }
      });
    });
  }); */

  //const posts = result.data.allMarkdownRemark.edges
  /*const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })*/



//END
};

