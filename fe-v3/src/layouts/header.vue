<template>
  <nav class="row-space-between">
    <img class="logo" src="/@/assets/logo.png" alt="logo">
    <div class="search row-space-between">
      <a-input-search
      :value="value"
      placeholder="搜索图书内容"
      @search="onSearch"
      />
      <a-button type="primary" size="large">
        <template v-slot:icon>
          <DownloadOutlined />
        </template>
        投 稿
      </a-button>
    </div>
  </nav>
</template>