<template>
  <q-toast>
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
        <input v-model="form.pubYear" class="mr-5" type="text" id="pubYear" autocomplete="off" placeholder="出版年份">
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
        referenceUrl: ''
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
  }
}
</script>
