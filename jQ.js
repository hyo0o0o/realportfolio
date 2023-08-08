// Intersection Observer 설정
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2 // 섹션이 20% 이상 보이면 실행
};

// Intersection Observer 콜백 함수
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 섹션이 화면에 보이면 애니메이션 실행
      skill();
      observer.unobserve(entry.target); // 한 번 실행 후 관찰 해제
    }
  });
};

// Intersection Observer 인스턴스 생성
const observer = new IntersectionObserver(observerCallback, observerOptions);

// 관찰 대상인 섹션을 지정
const skillsSection = document.querySelector(".skills");
observer.observe(skillsSection);

function skill() {
  $(".skill-per").each(function() {
    var $this = $(this);
    var per = $this.attr("per");
    $this.css("width", per + "%");
    $({ animatedValue: 0 }).animate(
      { animatedValue: per },
      {
        duration: 1000,
        step: function() {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
        complete: function() {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        }
      }
    );
  });
}

///////door///////

$(document).ready(function () {
  unlock($(".enter"));
});

function Dopen(left, right, button) {
  TweenLite.to(left, 1.5, {
    width: 0
  });
  TweenLite.to(right, 1.5, {
    width: 0
  });
  TweenLite.to(button, 1.5, {
    "margin-left": "-60px",
    onComplete: function () {
      // Remove doors and button
      left.parent().remove();
      button.remove();
    }
  });
};

function unlock(el) {
  TweenLite.to(el, 0.5, {
    transform: "rotate(90deg)",
    onComplete: function () {
      Dopen($(".door .left"), $(".door .right"), el);
    }
  });
};
