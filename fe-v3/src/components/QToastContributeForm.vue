<template>
  <q-toast ref="q-toast">
    <div class="form">
      <div class="form-item row-space-between">
        <label for="nickName">你的昵称</label>
        <input v-model="form.nickName" type="text" id="nickName" placeholder="昵称最多7个汉字" maxlength="7" autocomplete="off">
      </div>
      <div class="form-item row-space-between">
        <label for="bookName">书籍名称</label>
        <input v-model="form.bookName" type="text" id="bookName" autocomplete="off">
      </div>
      <div class="form-item row-space-between">
        <label for="pubYear">书籍详情</label>
        <input v-model="form.pubYear" class="mr-5" type="text" id="pubYear" autocomplete="off" placeholder="出版年">
        <input v-model="form.author" class="mr-5" type="text" id="author" autocomplete="off" placeholder="作者">
        <select v-model="form.type" name="" id="type">
          <option value="0" disabled="disabled" selected="selected" class="disabled">类型</option>
          <option 
          v-for="item in type"
          :key="item"
          :value="item">{{ item }}</option>
        </select>
      </div>
      <div class="form-item row-space-between">
        <label for="referenceUrl">参考链接</label>
        <input v-model="form.referenceUrl" type="text" id="referenceUrl" autocomplete="off">
      </div>
      <div class="form-item row-space-between">
        <label for="fileUrl">资源链接</label>
        <input v-model="form.fileUrl" type="text" id="fileUrl" autocomplete="off">
      </div>
      <div class="form-item row-space-between">
        <label for="bookReview">阅读心得</label>
        <textarea v-model="form.bookReview" name="bookReview" id="bookReview"></textarea>
      </div>
      <div class="form-operation">
        <div class="form-submit-btn" @click="onSubmit">提交审核</div>
      </div>
    </div>
  </q-toast>
</template>
<script>
import QToast from './QToast.vue'
export default {
  name: 'QToastContributeForm',
  components: { QToast },
  data() {
    return {
      form: {
        nickName: '',
        bookName: '',
        pubYear: '',
        author: '',
        type: '0',
        referenceUrl: '',
        fileUrl: '',
        bookReview: ''
      },
      type: [
        '文学',
        '流行',
        '文化',
        '生活',
        '经管',
        '科技',
        '古籍',
        '原版',
        '其他'
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form)
      this.show()
    },
    show() {
      this.$refs['q-toast'].show()
    }
  }
}
</script>
