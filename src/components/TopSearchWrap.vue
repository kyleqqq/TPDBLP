<template>
  <div>
    <div class="contribution-submit">
      <i class="icon"></i>投稿
    </div>
    <div class="search-wrap">
      <input type="text" name="searchCon" placeholder="搜索公版书" autocomplete="off" class="searchCon" />
      <div class="search-btn"></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.contribution-submit {
  width: 102px;
  height: 40px;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  float: right;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  background: #db9d46;
  position: relative;
  text-indent: 27px;

  &:hover {
    background: #dba354;
  }
}

.icon {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAiCAYAAAAzrKu4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkZjZiNzlmYS1mMWZmLTlmNDYtOGI3NC1jMGZhNThkNjA3ZWYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0UzRjc0Q0ZCNTdBMTFFODg4RDREMTJDRTZDQjY3MUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0UzRjc0Q0VCNTdBMTFFODg4RDREMTJDRTZDQjY3MUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGMxNWY2MDQtYjFkNS02MzQ3LTlhZGQtN2QzOTFkYTBhZGNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTY1MDcwMTctYWI2NS0xMWU4LThkYjAtYWQ2OGUwNmIwMmFmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eqzcWAAAAR9JREFUeNrs2M8NwiAUBvDWOECPHnUCGYER3EBHcISO4AbtCLpBR8ANvHmlN2/4MI+E1D8l5UvlAMmXqjGvP4nywNIYU4DGnfKgbBDFFiBUS1lR1pQGUtHOWGRa8z6a2LoolPZQGoFDoYQHEwgcClV4sAKBQ6GGsGgcCvUJFoVDob7BJuNQqF+wSbgQVB2AGoMNcfXYfUNW/orSUyRFRazlimv0IW8ugb3SFSpT6pXwkWEZlmEpwiRvh6sEPBVbpF3+O24TMnI3O9aSQiK5RrcEftoLcuqQsF3+VWZYhoFgmh+LBDzOcLOwMz/ZJwBzhs5tre1+fMvXkxXPDLL/Eh15xq6vq3eCUeb/Q7mT2PAwcuAVfO6Grvkr1boXngIMAG8kbZ5C7pdaAAAAAElFTkSuQmCC)
    no-repeat 24px;
  background-size: 18px 16px;
}

$searchBgColor: #473c3c;

.search-wrap {
  width: 407px;
  height: 40px;
  margin: 10px;
  float: right;
  background: $searchBgColor;
  border-radius: 5px;
  border: 1px solid #645a4d;

  &::-webkit-input-placeholder,
  &:-ms-input-placeholder,
  &::-moz-placeholder {
    color: #857a6b;
  }

  input {
    width: 350px;
    height: 30px;
    margin: 5px 0 5px 10px;
    border: none;
    outline: none;
    font-size: 14px;
    color: #b7b7b7;
    background: $searchBgColor;
  }

  .search-btn {
    width: 22px;
    height: 22px;
    float: right;
    margin: 9px 5px;
    cursor: pointer;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA5CAYAAACS0bM2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZGVhMzI1MS1hYzUxLThjNDYtOWZjNC02ZmU4MDlmODk3YjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTgyOUNBRUZCNTg3MTFFODhFOTNBNjk4QjE1ODU1MTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTgyOUNBRUVCNTg3MTFFODhFOTNBNjk4QjE1ODU1MTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODRlZjQwNTUtNmE0MC1kZjRkLWFjZTctNjY3ZWY3NGU1OGY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNkZWEzMjUxLWFjNTEtOGM0Ni05ZmM0LTZmZTgwOWY4OTdiMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgnCy04AAAOGSURBVHja5JrdcZtAEIDPTN5DKgiuQKQCowqMKjCqAOkteRJ+8qNIBcINRHIFRhVYqkCogqAOcszsjdY7/B0c4iA7s2NbFj/f7bJ/x93hz0+mQB64Olxtrib8jiXlekC655qouPBk9lL4vy8tzpuB+FxdACoTAYyhM8iI6yvAKxejwTHZDb5z/eDqlYBduB4rFifkeuK6qrFAncJZXLcARt3ujeuS65TrHagJAOLve64zrr+5nolVA4D0+4BzwVIu+uwMQN/g88wKcck5smdsx3UBC/UDXBJDhrB45q3g1mAxE7nbEm4wbPG8HMCt78Hy2O1PYPVO4Taw0tj9BJQqScDyU1g4YcX3toBGBZiH/l7CTXQS2cClbRSEWgMWwQUEbK7YWmVWdHIALVVwDoRmDBax20maA7hVAUdP9HxjMAp4RjkxaAu3QFFx3+SEigHxo7GSdU+DJGnsjh7rX2JI+kLCpnABcceE6SEBShGPMtYz0LP2hJJ0yPSRlNxPIAuHy6qow1zWVEJiPSk4j8DpJinUpcLLPBm4B1QMH5iesiO5uBacQ6KTrhKTzn9UcCmqWqy6cBap7XSWhHTyUnCx5nAHUioqn6EMRoYMZ40ZLvnv3TKRTY49ik1SgxScpTnc94LIWQgXD8RyJrLcua5bSpc1PYl0JWWgkYJwS1tTOLegiK6EizQbL+S55CNqpqXg8JefWAc7Li0FD652dQ8yUFh9Rau00MxqfpsxAz1IeozWoQTIam8ynYtByhk8RttokrR94p6NC+eAXQcxDut3KJs3/U7awKUk5K56ip50A+TIFIzTRYJ8Ju55a8AtyrcXsuCt+7mAfd7S3TDF+9UVz5lDkneiEk4kcwwYss/bx12OEvBbEOum16zq5zwSQbNVPLHr6L0r8VBgs1nDlwDqNKtZ+J2zz/vVEYI0W7ifVWI9py1g3U48ggvsSe+Xff4X3NWv6CpEfbiGhfmAn50ByrwelbDrK04BAXFzIloCalfckF0SMARgFsG/IsBp3U5cVmK44BQCzqXgexZ8rwjsCO6+qxFgqAU3qi2XBxmjasZBz9EkByQFC4njZMI7taALgPOu4IpAu0wRLrgl7jvnKt2yT4kJjHfc/tqMBU5E7lqAQx3K1gIc8sS5EnDo4/RSwMHvFUxmL3mA4SjgCgB9DuiOZpcHAJe44B/VFhYHDFEPGv4TYACPGO+4LBgrbQAAAABJRU5ErkJggg==)
      no-repeat;
    background-size: 100%;
  }
}
</style>
