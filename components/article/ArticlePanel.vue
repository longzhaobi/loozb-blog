<template>
  <article class="article my-article">
    <!-- <div class="aritcle-flag">原创</div> -->
    <header>
      <h1 class="text-center">{{article.title}}</h1>
      <dl class="dl-inline">
        <dt>类型：</dt>
        <dd>{{article.type === '1' ? '原创' : '转载'}}</dd>
        <dt>作者：</dt>
        <dd>{{article.author}}</dd>
        <dt>发表于：</dt>
        <dd>{{article.ctime}}</dd>
        <dd v-if="article.type === '2'"><a :href="article.originalUrl" target="_blank">原文地址</a></dd>
        <dd class="pull-right"><span class="label label-success">HTML</span> <span class="label label-warning">网页设计</span> <span class="label label-info">W3C</span> <span class="label label-danger"><i class="icon-eye-open"></i> 235</span></dd>
      </dl>
      <section class="abstract">
        <p><strong>摘要：</strong>{{article.digest}}</p>
      </section>
    </header>
    <section class="content">
      <div v-html="article.content"></div>
    </section>
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
