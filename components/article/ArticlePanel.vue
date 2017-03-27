<template>
  <article class="article my-article">
    <!-- <div class="aritcle-flag">原创</div> -->
    <header>
      <h1 class="text-left">{{article.title}}</h1>
      <dl class="dl-inline">
        <dt>类型：</dt>
        <dd>{{article.type === '1' ? '原创' : '转载'}}</dd>
        <dt>作者：</dt>
        <dd>{{article.author}}</dd>
        <dt>发表于：</dt>
        <dd>{{article.ctime}}</dd>
        <dd v-if="article.type === '2'"><a :href="article.originalUrl" target="_blank">原文地址</a></dd>
        <dd class="pull-right"><span class="label label-success">{{article.classificationName}}</span> <span class="label label-warning" v-if="article.sort > 0">置顶</span> <span class="label label-danger"><i class="icon-eye-open"></i> {{article.readNum}}</span></dd>
      </dl>
      <section class="abstract">
        <p><strong>摘要：</strong>{{article.digest}}</p>
      </section>
    </header>
    <section class="content">
      <div v-html="article.content"></div>
    </section>
    <!-- <footer>
     <ul class="pager pager-justify">
       <li class="previous"><a target="_blank" href="https://zh.wikipedia.org/wiki/Category:HTML"><i class="icon-arrow-left"></i> HTML</a></li>
       <li class="next disabled"><a target="_blank" href="https://zh.wikipedia.org/wiki/Category:W3C%E6%A0%87%E5%87%86">W3C 标准 <i class="icon-arrow-right"></i></a></li>
     </ul>
   </footer> -->
  </article>
</template>

<script>
  export default {
    props: {
      article: {
        required: true
      }
    }
  }
</script>

<style scoped>
  .my-article {
    border-bottom:1px dotted #eee;
    position: relative;
  }
  .aritcle-flag {
    position: absolute;
    top:10px;
    right:-50px;
    border-radius: 5px;
    text-align: center;
    line-height: 35px;
    color:#fff;
    font-size:18px;
    background-color: #3cf;
    width:120px;
    height:35px;
    -moz-transform:rotate(45deg);
    -webkit-transform:rotate(45deg);
    -o-transform:rotate(45deg);
    -ms-transform:rotate(45deg);
    transform:rotate(45deg);
  }
  .pull-right span {
    margin-right:5px;
  }

</style>
