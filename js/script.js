document.addEventListener("DOMContentLoaded", function () {
  // 导航搜索框演示
  const searchForms = document.querySelectorAll(".search-form");
  searchForms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const input = form.querySelector('input[type="search"]');
      const keyword = input ? input.value.trim() : "";

      if (keyword === "") {
        alert("请输入搜索关键词。");
        if (input) {
          input.focus();
        }
        return;
      }

      alert("搜索功能为课程演示，关键词：" + keyword);
    });
  });
});