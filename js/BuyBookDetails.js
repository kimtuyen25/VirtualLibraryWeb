document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".DG-link");
    const all = document.getElementById("all");
    all.classList.remove("DG-link");
    all.classList.add("Active");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
            const rating = this.getAttribute("href").substring(1); // Lấy giá trị đánh giá từ href

            //Xóa lớp Active từ tất cả các liên kết và thêm lại lớp DG - link
            navLinks.forEach(link => {
                link.classList.remove("Active");
                link.classList.add("DG-link");
            });

            // Thêm lớp Active vào liên kết được nhấp và xóa lớp DG-link
            this.classList.add("Active");
            this.classList.remove("DG-link");

            // Sử dụng pushState để thay đổi URL mà không tải lại trang
            history.pushState({ rating: rating }, null, `#${rating}`);

            updateContent();
        });
    });
})

const imgItems = document.querySelectorAll(".imgItem");
const imgActive = document.getElementById("imgActive");
// Lặp qua từng phần tử 'imgItem'
imgItems.forEach(imgItem => {
    // Thêm một trình lắng nghe sự kiện 'mouseover' vào từng 'imgItem'
    imgItem.addEventListener("mouseover", function () {
        // Lấy thuộc tính 'src' của 'imgItem' được di chuột vào
        const imgSrc = this.getAttribute("src");

        // Đặt thuộc tính 'src' của 'imgActive' để khớp với 'src' của 'imgItem' được di chuột vào
        imgActive.setAttribute("src", imgSrc);
    });
});
const imgSlide1 = document.getElementById("imgSlide1");
const imgSlide2 = document.getElementById("imgSlide2");
const imgSlide3 = document.getElementById("imgSlide3");
const imgSlide4 = document.getElementById("imgSlide4");
// Thêm một trình lắng nghe sự kiện 'click' vào từng 'imgItem'
imgItems.forEach((imgItem, index) => {
    imgItem.addEventListener("click", function () {
      // Lấy thuộc tính 'src' của 'imgItem' được click
      const imgSrc = this.getAttribute("src");
      
      // Đặt thuộc tính 'src' của 'imgSlide1' để khớp với 'src' của 'imgItem' được click
      imgSlide1.setAttribute("src", imgSrc);
      
      // Đặt thuộc tính 'src' của các 'imgSlide' còn lại để khớp với 'src' của 'imgItem' không phải là 'imgSlide1'
      imgItems.forEach((item, idx) => {
        if (idx !== index) {
          switch (idx) {
            case 0:
              imgSlide2.setAttribute("src", item.getAttribute("src"));
              break;
            case 1:
              imgSlide3.setAttribute("src", item.getAttribute("src"));
              break;
            case 2:
              imgSlide4.setAttribute("src", item.getAttribute("src"));
              break;
            default:
              break;
          }
        }
      });
  
      // Hiển thị modal
      const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      modal.show();
    });
  });
