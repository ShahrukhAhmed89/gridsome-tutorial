<template>
  <Layout>
    <article 
        v-for="edge in $page.blogs.edges" 
        :key="edge.node.id">
        <h2>
          <g-link :to='edge.node.path'>
            {{edge.node.title}}
          </g-link>
        </h2>
        <small>{{edge.node.author}}</small>
        <hr>
    </article>
  </Layout>
</template>

<page-query>
  query {
    blogs: allBlogPost {
      edges {
        node {
          id
          title
          author
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>


