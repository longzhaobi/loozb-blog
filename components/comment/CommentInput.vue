<template>
  <div class="reply-form">
      <form class="form">
        <div class="form-group">
          <textarea class="form-control new-comment-text" rows="2" placeholder="撰写评论..."></textarea>
        </div>
        <div class="form-group comment-user">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <input type="text" class="form-control" id="nameInputEmail1" placeholder="输入评论显示名称">
              </div>
            </div>
            <div class="col-md-5">
            </div>
            <div class="col-md-3"><button type="submit" class="btn btn-block btn-primary">发表评论</button></div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .reply-form {
    margin:20px;
    
  }

</style>
