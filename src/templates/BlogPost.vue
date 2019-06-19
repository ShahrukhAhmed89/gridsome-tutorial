<template>
  <Layout >
    <main class="blog"> 
      <h1>{{$page.post.title}}</h1>
      <small>{{$page.post.author}}</small>
      <div class="blog__content" v-html="$page.post.content">
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query Blog($path: String){
    post: blogPost(path: $path){
      title
      author
      content
    }
  }
</page-query>