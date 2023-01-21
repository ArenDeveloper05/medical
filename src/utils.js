export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};
export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".header");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 60) {
        sticky.classList.add("stricky-fixed");
      } else {
        sticky.classList.remove("stricky-fixed");
      }
    }
  }
};

export const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");
  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
};

export const dataImage = () => {
  let d = document.querySelectorAll("[data-bg");
  for (let i = 0; i < d.length; i++) {
    const element = d[i];
    element.style.backgroundImage = `url(${element.getAttribute("data-bg")})`;
  }
};

export const generateLanguage = (lang) => {
  if (lang == "ru") {
    return "ru_ru"
  } else if (lang == "en") {
    return "en_us"
  } else {
    return "am_hy"
  }
}

export const hierarchy = (data) => {
  const tree = [];
  const childOf = {};
  data.forEach((item) => {
    const { id, parrent_id } = item;
    childOf[id] = childOf[id] || [];
    item.children = childOf[id];
    parrent_id
      ? (childOf[parrent_id] = childOf[parrent_id] || []).push(item)
      : tree.push(item);
  });
  return tree;
};

export function changeIdName(arr) {

  return arr.map((item) => {

    return {
      ...item,
      "name": item.Name,
      "parrent_id": item.CategoryID
    }

  })
}

