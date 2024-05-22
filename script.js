
anime({
  targets: ".first path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2000,
  direction: 'alternate',
  endDelay: 2000,
  delay: function (el, i) {
    return i * 250;
    },
  autoplay: true,
  loop: true,
});
anime({
  targets: ".last path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2000,
  direction: 'alternate',
  endDelay: 2000,
  delay: function (el, i) {
    return i * 250;
    },
  autoplay: true,
  loop: true,
});

anime({
  targets: ".img_1 path",
  translateY: {
    value: 150,
    duration: 1500
  },
  easing: "easeInOutSine",
  duration: 1000,
  direction: 'alternate',
  endDelay: 2000,
  autoplay: true,
  loop: true,
})

anime({
  targets: ".img_2 path",
  translateY: {
    value: 150,
    duration: 1500
  },
  easing: "easeInOutSine",
  duration: 1000,
  direction: 'alternate',
  endDelay: 2000,
  autoplay: true,
  loop: true,
})

anime({
  targets: ".img_4 path",
  translateY: {
    value: 150,
    duration: 1500
  },
  easing: "easeInOutSine",
  duration: 1000,
  direction: 'alternate',
  endDelay: 2000,
  autoplay: true,
  loop: true,
})

anime({
  targets: ".img_5 path",
  translateY: {
    value: 150,
    duration: 1500
  },
  easing: "easeInOutSine",
  duration: 1000,
  direction: 'alternate',
  endDelay: 2000,
  autoplay: true,
  loop: true,
})

anime({
  targets: ".img_6 path",
  translateY: {
    value: 150,
    duration: 1500
  },
  easing: "easeInOutSine",
  duration: 1000,
  direction: 'alternate',
  endDelay: 2000,
  autoplay: true,
  loop: true,
})

anime({
  targets: ".img_7 path",
  translateY: {
    value: 150,
    duration: 1500
  },
  rotate: function() { return anime.random(60, 60); },
  easing: "easeInOutSine",
  duration: 1000,
  direction: 'alternate',
  endDelay: 2000,
  autoplay: true,
  loop: true,
})

anime({
  targets: ".img_8 path",
  translateY: {
    value: 150,
    duration: 1500
  },
  easing: "easeInOutSine",
  duration: 1000,
  direction: 'alternate',
  endDelay: 2000,
  autoplay: true,
  loop: true,
})