
    $(document).ready(function () {
        // 這是你要的效果，執行完動畫之後，讓物件隱藏
        $("img").on("animationend", function () {
            $("#preload_body").hide();
            $("#preload_heading").hide();
        });
      });

    function clearHistory() {
        localStorage.removeItem("isFirstTime");
      }

    function checkIfFirstTime() {
        const isFirstTime = localStorage.getItem("isFirstTime");
        if (!isFirstTime) {
            localStorage.setItem("isFirstTime", true);
        return true;
            }
        return false;
      }

    function checkAnimation() {
        const isFirstTime = checkIfFirstTime();
        if (isFirstTime) $("#preload_body").addClass("active");
      }

    // 清除記錄，所以每次進來都會執行動畫，不執行這行以後就不會再消失了
    clearHistory();

    // 執行動畫確認
    checkAnimation();