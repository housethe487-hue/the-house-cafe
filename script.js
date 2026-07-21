const menuData = [
  {
    id: "classic",
    label: "قهوة كلاسيك",
    summary: "أساسيات القهوة من الإسبريسو حتى الكولد برو.",
    items: [
      ["إسبريسو", 1.50, "جرعة مركّزة وواضحة"],
      ["أمريكانو", 2.00, "إسبريسو وماء ساخن"],
      ["بلاك", 2.00, "قهوة سوداء بطابع مباشر"],
      ["V60", 3.50, "تحضير يدوي بنكهة أنظف"],
      ["كورتادو", 2.00, "إسبريسو مع حليب متوازن"],
      ["فلات وايت", 2.00, "قوام ناعم وقهوة واضحة"],
      ["كولد برو", 3.00, "استخلاص بارد ومنعش"],
      ["لاتيه", 3.00, "إسبريسو وحليب مخملي"],
      ["كابتشينو", 3.00, "رغوة كثيفة وتوازن كلاسيكي"],
      ["قهوة تركي", 1.50, "تحضير تركي تقليدي"],
      ["قهوة تركي دبل", 2.50, "جرعة تركي مضاعفة"],
      ["نسكافيه", 1.50, "خيار يومي خفيف"],
      ["هوت شوكوليت", 2.50, "شوكولاتة دافئة وغنية"]
    ]
  },
  {
    id: "signature",
    label: "لاتيه مختص",
    summary: "خلطات ذا هاوس الخاصة ونكهات اللاتيه المميزة.",
    items: [
      ["هاوس لاتيه", 3.50, "مشروب التوقيع الخاص بذا هاوس"],
      ["لاتيه التوت", 3.50, "توت ناعم مع قاعدة لاتيه"],
      ["توفي كراميل لاتيه", 3.50, "توفي وكراميل بقوام غني"],
      ["كوكيز لاتيه", 3.50, "كوكيز كريمي مع الإسبريسو"],
      ["لاتيه عربي", 4.00, "طابع عربي بخلطة خاصة"]
    ]
  },
  {
    id: "frappe",
    label: "فرابيه",
    summary: "مشروبات باردة كريمية بنكهات ذا هاوس.",
    items: [
      ["ليالي", 3.50, "خلطة فرابيه خاصة"],
      ["توكسيك", 3.50, "نكهة قوية بطابع جريء"],
      ["شوكو أورانج", 3.50, "شوكولاتة مع لمسة برتقال"],
      ["حرير", 3.50, "قوام ناعم وخفيف"],
      ["فراب اللوز", 3.50, "لوز كريمي ومتوازن"]
    ]
  },
  {
    id: "milkshake",
    label: "ميلك شيك",
    summary: "خلطات كثيفة للحلو والبارد.",
    items: [
      ["جوز وتين", 4.00, "جوز وتين بقوام غني"],
      ["تشيزكيك ليمون", 4.00, "حموضة ليمون مع قاعدة تشيزكيك"],
      ["فانيلا سبيشل", 4.00, "فانيلا كريمية بلمسة خاصة"],
      ["شوكولاتة وتوت", 4.00, "شوكولاتة مع مزيج توت"],
      ["ميلك شيك اليوم", 4.00, "خلطة متغيرة حسب اليوم"]
    ]
  },
  {
    id: "mojito",
    label: "موهيتو",
    summary: "نكهات منعشة مناسبة لقعدات المساء.",
    items: [
      ["موهيتو فراولة", 2.75, "فراولة وانتعاش"],
      ["موهيتو باشن فروت", 2.75, "باشن فروت بطابع حمضي"],
      ["موهيتو بلو أوشن", 2.75, "نكهة زرقاء منعشة"],
      ["موهيتو مانجو", 2.75, "مانجو باردة ومشرقة"],
      ["موهيتو خوخ", 2.75, "خوخ خفيف ومتوازن"],
      ["موهيتو مكس توت", 2.75, "مزيج توت منعش"],
      ["موهيتو ريدبول", 3.25, "موهيتو مع ريدبول"]
    ]
  },
  {
    id: "juice",
    label: "عصائر",
    summary: "عصائر طبيعية وخيارات فاكهية بسيطة.",
    items: [
      ["برتقال طبيعي", 2.00, "برتقال طازج"],
      ["جزر وبرتقال", 2.00, "مزيج جزر وبرتقال"],
      ["شمام طبيعي", 2.00, "شمام بارد"],
      ["ليمون ونعنع", 2.00, "ليمون منعش مع نعنع"],
      ["تفاح", 2.00, "عصير تفاح"],
      ["مانجا", 2.00, "عصير مانجا"],
      ["كركديه", 2.00, "كركديه بارد"]
    ]
  },
  {
    id: "cocktail",
    label: "كوكتيلات",
    summary: "خلطات فواكه وحليب وخيارات أغنى.",
    items: [
      ["كوكتيل كلاسيك", 3.00, "مزيج فواكه كلاسيكي"],
      ["أفوكادو سادة", 3.00, "أفوكادو كريمي"],
      ["أفوكادو قشطة وعسل ومكسرات", 4.00, "خلطة أفوكادو كاملة"],
      ["كوكتيل سبيشل", 4.00, "خلطة ذا هاوس الخاصة"],
      ["موز بالحليب", 3.00, "موز وحليب"],
      ["فراولة ومانجا", 3.00, "فراولة مع مانجا"],
      ["بينا كولادا", 3.00, "أناناس وجوز هند"]
    ]
  },
  {
    id: "tea",
    label: "شاي",
    summary: "خيارات دافئة من الشاي الكلاسيكي حتى الكرك.",
    items: [
      ["شاي إنجليزي", 1.50, "شاي أسود على الطريقة الإنجليزية"],
      ["شاي أخضر", 1.50, "شاي أخضر خفيف"],
      ["شاي نعنع", 1.50, "شاي مع نعنع"],
      ["شاي أعشاب", 1.50, "مزيج أعشاب دافئ"],
      ["شاي أسود", 1.50, "شاي أسود كلاسيكي"],
      ["زنجبيل وعسل وليمون", 1.50, "خلطة دافئة متوازنة"],
      ["شاي كرك", 1.50, "شاي كرك بالحليب والبهارات"]
    ]
  },
  {
    id: "dessert",
    label: "حلويات وتسالي",
    summary: "حلويات خفيفة وتسالي تكمل القعدة.",
    items: [
      ["كريب", 3.00, "كريب حسب الاختيار"],
      ["وافل", 3.00, "وافل طازج"],
      ["بانكيك", 3.00, "بانكيك طري"],
      ["تشيزكيك", 3.00, "قطعة تشيزكيك"],
      ["تيراميسيو", 3.00, "حلوى تيراميسيو"],
      ["فشار", 1.50, "فشار للقعدة والمباراة"],
      ["مكسرات", 2.00, "تشكيلة مكسرات"],
      ["آيس كريم (نكهات)", 2.00, "اختيارات آيس كريم"]
    ]
  },
  {
    id: "cold",
    label: "مياه ومشروبات",
    summary: "مياه ومشروبات غازية وطاقة.",
    items: [
      ["مشروبات غازية", 1.00, "خيارات غازية متنوعة"],
      ["مشروب طاقة", 2.00, "مشروب طاقة"],
      ["ريدبول", 2.50, "ريدبول"],
      ["مياه عادي", 0.50, "مياه معدنية"]
    ]
  },
  {
    id: "hookah",
    label: "الأراجيل",
    summary: "تشكيلة نكهات أراجيل للبالغين وفق التعليمات.",
    items: [
      ["أرجيلة تفاحتين نخلة", 3.50, "نكهة تفاحتين"],
      ["أرجيلة تفاحتين فاخر", 3.50, "تفاحتين فاخر"],
      ["أرجيلة تفاحتين مزايا", 3.00, "تفاحتين مزايا"],
      ["أرجيلة ليمون ونعنع", 3.00, "ليمون ونعنع"],
      ["أرجيلة علكة وقرفة", 3.00, "علكة وقرفة"],
      ["أرجيلة علكة ونعنع", 3.00, "علكة ونعنع"],
      ["أرجيلة بطيخ ونعنع", 3.00, "بطيخ ونعنع"],
      ["أرجيلة عنب وتوت", 3.00, "عنب وتوت"],
      ["أرجيلة عنب ونعنع", 3.00, "عنب ونعنع"],
      ["أرجيلة كاندي", 3.00, "نكهة كاندي"],
      ["أرجيلة لوف", 3.00, "نكهة لوف"],
      ["أرجيلة بلوبيري", 3.00, "بلوبيري"],
      ["أرجيلة كيف", 3.00, "نكهة كيف"],
      ["أرجيلة زغلول", 3.00, "زغلول"],
      ["تجديد رأس", 2.00, "تجديد رأس الأرجيلة"]
    ]
  }
];

const moods = {
  focus: {
    title: "تركيز",
    pick: "فلات وايت",
    price: "2.00 JD",
    description: "اختيار هادئ ومتوازن لجلسة دراسة أو شغل طويلة.",
    color: "#f45b45"
  },
  fresh: {
    title: "انتعاش",
    pick: "موهيتو بلو أوشن",
    price: "2.75 JD",
    description: "نكهة باردة ومشرقة عندما تحتاج تغيير مودك بسرعة.",
    color: "#4f8fa7"
  },
  social: {
    title: "قعدة",
    pick: "هاوس لاتيه",
    price: "3.50 JD",
    description: "مشروب التوقيع المناسب لحكاية طويلة مع الأصحاب.",
    color: "#d75a42"
  },
  late: {
    title: "سهر",
    pick: "كولد برو",
    price: "3.00 JD",
    description: "قهوة باردة بطابع واضح تساعدك تكمل المساء.",
    color: "#2f2a29"
  }
};

const els = {
  header: document.getElementById("siteHeader"),
  navToggle: document.getElementById("navToggle"),
  mobileMenu: document.getElementById("mobileMenu"),
  categoryTabs: document.getElementById("categoryTabs"),
  menuList: document.getElementById("menuList"),
  menuSearch: document.getElementById("menuSearch"),
  menuSummary: document.getElementById("menuSummary"),
  menuCount: document.getElementById("menuCount"),
  menuEmpty: document.getElementById("menuEmpty"),
  menuModal: document.getElementById("menuModal"),
  closeMenuModal: document.getElementById("closeMenuModal"),
  moodPills: document.getElementById("moodPills"),
  moodDial: document.getElementById("moodDial"),
  moodTitle: document.getElementById("moodTitle"),
  moodPick: document.getElementById("moodPick"),
  moodPrice: document.getElementById("moodPrice"),
  moodDescription: document.getElementById("moodDescription"),
  cupScene: document.getElementById("cupScene")
};

let activeCategory = "classic";

function formatPrice(value) {
  return Number(value).toFixed(2);
}

function buildTabs() {
  els.categoryTabs.innerHTML = menuData.map((category, index) => `
    <button
      type="button"
      role="tab"
      aria-selected="${index === 0}"
      class="${index === 0 ? "active" : ""}"
      data-category="${category.id}"
    >${category.label}</button>
  `).join("");
}

function renderMenu() {
  const query = els.menuSearch.value.trim().toLowerCase();

  const category =
    menuData.find(item => item.id === activeCategory) || menuData[0];

  const visibleItems = category.items.filter(
    ([name, , description]) =>
      `${name} ${description}`.toLowerCase().includes(query)
  );

  els.menuSummary.textContent = query
    ? `نتائج البحث داخل ${category.label}`
    : category.summary;

  els.menuCount.textContent = `${visibleItems.length} صنف`;
  els.menuEmpty.hidden = visibleItems.length !== 0;
  els.menuList.hidden = visibleItems.length === 0;

  els.menuList.innerHTML = visibleItems.map(
    ([name, price, description]) => `
      <article class="menu-item">
        <div>
          <h3>${name}</h3>
          <p>${description}</p>
        </div>

        <strong>
          ${formatPrice(price)}
          <small>JD</small>
        </strong>
      </article>
    `
  ).join("");
}

function setCategory(categoryId) {
  activeCategory = categoryId;

  [...els.categoryTabs.querySelectorAll("button")].forEach(button => {
    const active = button.dataset.category === categoryId;

    button.classList.toggle("active", active);
    button.setAttribute(
      "aria-selected",
      active ? "true" : "false"
    );
  });

  renderMenu();
}

function setMood(key) {
  const mood = moods[key];

  if (!mood) return;

  [...els.moodPills.querySelectorAll("button")].forEach(button => {
    const active = button.dataset.mood === key;

    button.classList.toggle("active", active);
    button.setAttribute(
      "aria-selected",
      active ? "true" : "false"
    );
  });

  document.body.dataset.mood = key;

  els.moodDial.style.background = mood.color;
  els.moodTitle.textContent = mood.title;
  els.moodPick.textContent = mood.pick;
  els.moodPrice.textContent = mood.price;
  els.moodDescription.textContent = mood.description;

  if (typeof els.moodDial.animate === "function") {
    els.moodDial.animate(
      [
        {
          transform: "scale(.97) rotate(-1.2deg)"
        },
        {
          transform: "scale(1.01) rotate(.5deg)"
        },
        {
          transform: "scale(1) rotate(0)"
        }
      ],
      {
        duration: 520,
        easing: "cubic-bezier(.2,.75,.2,1)"
      }
    );
  }
}

/* تحديد مود الموقع حسب توقيت الأردن */

function getJordanHour() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Amman",
    hour: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());

  const hourPart = parts.find(
    part => part.type === "hour"
  );

  return Number(hourPart?.value ?? 0);
}

function getJordanMood() {
  const hour = getJordanHour();

  // من 8 صباحًا إلى قبل 2 ظهرًا
  if (hour >= 8 && hour < 14) {
    return "fresh";
  }

  // من 2 ظهرًا إلى قبل 10 مساءً
  if (hour >= 14 && hour < 22) {
    return "focus";
  }

  // من 10 مساءً إلى قبل 8 صباحًا
  return "late";
}

function applyJordanMood() {
  const mood = getJordanMood();

  const activeMood =
    els.moodPills
      .querySelector("button.active")
      ?.dataset.mood;

  if (activeMood !== mood) {
    setMood(mood);
  }
}

function toggleMobileMenu(force) {
  const nextState =
    typeof force === "boolean"
      ? force
      : !els.mobileMenu.classList.contains("open");

  els.mobileMenu.classList.toggle("open", nextState);
  els.navToggle.classList.toggle("active", nextState);

  els.navToggle.setAttribute(
    "aria-expanded",
    String(nextState)
  );

  els.mobileMenu.setAttribute(
    "aria-hidden",
    String(!nextState)
  );

  document.body.classList.toggle(
    "menu-open",
    nextState
  );
}

function openMenuModal() {
  if (typeof els.menuModal.showModal === "function") {
    els.menuModal.showModal();
  } else {
    els.menuModal.setAttribute("open", "");
  }
}

function closeMenuModal() {
  if (typeof els.menuModal.close === "function") {
    els.menuModal.close();
  } else {
    els.menuModal.removeAttribute("open");
  }
}

function setupReveal() {
  const elements =
    document.querySelectorAll("[data-reveal]");

  elements.forEach(element => {
    element.style.setProperty(
      "--delay",
      `${Number(element.dataset.delay || 0)}ms`
    );
  });

  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => {
      element.classList.add("revealed");
    });

    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -40px"
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });
}

function updateScrollUI() {
  const scrollTop = window.scrollY;

  const maxScroll =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    maxScroll > 0
      ? (scrollTop / maxScroll) * 100
      : 0;

  const progressBar =
    document.querySelector(".page-progress span");

  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }

  els.header.classList.toggle(
    "scrolled",
    scrollTop > 30
  );
}

function setupCupMotion() {
  const stage =
    els.cupScene?.closest(".hero-stage");

  const reducedMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if (!stage || reducedMotion) return;

  stage.addEventListener("pointermove", event => {
    const rect = stage.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width -
      0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height -
      0.5;

    els.cupScene.style.transform =
      `translate(-50%,-47%) ` +
      `rotate(${-4 + x * 5}deg) ` +
      `rotateX(${y * -8}deg) ` +
      `rotateY(${x * 10}deg)`;
  });

  stage.addEventListener("pointerleave", () => {
    els.cupScene.style.transform =
      "translate(-50%,-47%) rotate(-4deg)";
  });
}

/* تشغيل الموقع */

buildTabs();
renderMenu();

/* تطبيق مود توقيت الأردن عند فتح الموقع */
applyJordanMood();

setupReveal();
setupCupMotion();
updateScrollUI();

/* فحص توقيت الأردن كل دقيقة */
setInterval(applyJordanMood, 60 * 1000);

const yearElement =
  document.getElementById("year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}

els.categoryTabs.addEventListener(
  "click",
  event => {
    const button =
      event.target.closest(
        "button[data-category]"
      );

    if (button) {
      setCategory(button.dataset.category);
    }
  }
);

els.menuSearch.addEventListener(
  "input",
  renderMenu
);

els.moodPills.addEventListener(
  "click",
  event => {
    const button =
      event.target.closest(
        "button[data-mood]"
      );

    if (button) {
      setMood(button.dataset.mood);
    }
  }
);

els.navToggle.addEventListener(
  "click",
  () => toggleMobileMenu()
);

els.mobileMenu.addEventListener(
  "click",
  event => {
    if (event.target.closest("a")) {
      toggleMobileMenu(false);
    }
  }
);

document
  .querySelectorAll(".menu-image-trigger")
  .forEach(button => {
    button.addEventListener(
      "click",
      openMenuModal
    );
  });

els.closeMenuModal.addEventListener(
  "click",
  closeMenuModal
);

els.menuModal.addEventListener(
  "click",
  event => {
    const rect =
      els.menuModal.getBoundingClientRect();

    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (outside) {
      closeMenuModal();
    }
  }
);

document.addEventListener(
  "keydown",
  event => {
    if (event.key === "Escape") {
      toggleMobileMenu(false);
      closeMenuModal();
    }
  }
);

window.addEventListener(
  "scroll",
  updateScrollUI,
  {
    passive: true
  }
);

window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 1060) {
      toggleMobileMenu(false);
    }
  },
  {
    passive: true
  }
);
