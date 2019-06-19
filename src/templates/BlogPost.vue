<template>
  <Layout >
    <main class="blog"> 
      <h1>{{$page.post.title}}</h1>
      <g-link :to=$page.post.author.path>
        <small>
          {{$page.post.author.id}}
        </small>
      </g-link>
      <div class="blog__content" v-html="$page.post.content">
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query Blog($path: String){
    post: blogPost(path: $path){
        title
        content
        author {
          id
          path
        }
        tags {
          id
          path
        }
    }
  }
</page-query>



