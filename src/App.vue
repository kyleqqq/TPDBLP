<template>
  <div id="app" >
    <router-view/>
  </div>

</template>

<style lang="scss">
  body {
      -webkit-text-size-adjust: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      font: 12px/1.5 PingFangSC-Regular,Microsoft Yahei;
      color: #333;
      text-align: justify;
  }

  body, div, span, h1, h2, h3, h4, h5, h6, p, em, img, strong, b, small, u, i, center, dl, dt, dd, ol, ul, li,  sub, sup, tt, var, del, dfn,  ins, kbd, q, s, samp,  strike, applet, object, iframe, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, blockquote, pre, a, abbr, acronym, address, big, cite, code, mark, audio, video, input, textarea, select
  {
    margin:0; padding:0;
  }

  ul,ol,li,dl{
    list-style: none;
  }

  $mainColor: #e6a549;

  #app {
    background-color: #fff;
  }

  .clearfix:after{
    content:"";
    display:block;
    clear:both
  }

  .flex-box{
    display:flex;
    display:-ms-flexbox;
    -ms-flex-pack:justify;
    justify-content:space-between
  }

  .left-con{
    width:850px
  }
  .right-con{
    width:300px
  }

  a {
    text-decoration: none;

    &:hover {
      color: $mainColor;
    }
  }

</style>

<script>
export default {

  components: {
  }
}
</script>
