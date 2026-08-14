(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- 主题切换 ---------- */
  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('academic-theme', next); } catch (e) {}
    });
  }

  /* ---------- 中英文切换 ---------- */
  var I18N = {
    zh: {
      title: '杨小博 · 个人学术主页',
      brand: '杨小博',
      'nav.home': '首页',
      'nav.news': '新闻动态',
      'nav.edu': '教育及工作',
      'nav.research': '研究方向',
      'nav.pubs': '发表论文',
      'nav.skills': '专业技能',
      'nav.awards': '荣誉奖项',
      'nav.contact': '联系',
      'hero.role': '助理研究员 · 电催化与能源材料',
      'hero.affil': '中国科学院大连化学物理研究所 · 30室',
      'hero.bio': '研究方向聚焦于电催化与能源材料，重点关注直接醇类燃料电池电催化剂、核壳结构催化剂与单原子催化剂的设计，以及电化学 CO₂/硝酸根还原制尿素等小分子转化过程。通过第一性原理计算与实验表征相结合，揭示晶格应力与电子结构对催化性能的调控机制。以第一作者或共同第一作者在 Advanced Energy Materials、Small 等期刊发表论文 9 篇。',
      'hero.cta1': '查看发表论文',
      'hero.cta2': '联系我',
      'news.title': '新闻动态',
      'news.subtitle': '近期动态与代表性进展',
      'news.n1': '结束博士后研究，正式加入大连化学物理研究所30室，担任助理研究员。',
      'news.n2': '论文“Secondary Coordination Sphere Engineering of Single-Sn-Atom Catalyst”发表于 Advanced Energy Materials（共同一作）。',
      'news.n3': '综述“Single-atom catalysis: a promising avenue for precisely controlling reaction pathways”发表于 Frontiers of Chemical Science and Engineering（第一作者）。',
      'news.n4': '获评大连化学物理研究所“优秀博士后（C类）”（2022–2024）。',
      'news.n5': '论文“Size effect of ruthenium nanoparticles on water cracking”发表于 Journal of Colloid and Interface Science（共同一作）。',
      'news.n6': '加入中国科学院大连化学物理研究所，开展博士后研究。',
      'news.n7': '两篇第一作者论文发表于 Advanced Energy Materials。',
      'edu.title': '教育及工作经历',
      'edu.subtitle': '本科、硕博、博士后与助理研究员经历',
      'edu.w1.role': '助理研究员 · 电催化与能源材料',
      'edu.w1.place': '中国科学院大连化学物理研究所 · 30室',
      'edu.e1.role': '博士后 · 电催化与能源材料',
      'edu.e1.place': '中国科学院大连化学物理研究所',
      'edu.e2.role': '博士 · 材料学',
      'edu.e2.place': '中国科学院大学，山西煤炭化学研究所',
      'edu.e3.role': '硕士 · 材料物理与化学',
      'edu.e3.place': '中国科学院大学，山西煤炭化学研究所',
      'edu.e4.role': '本科 · 材料化学',
      'edu.e4.place': '太原理工大学',
      'research.title': '研究方向',
      'research.subtitle': '当前关注的核心科学问题',
      'research.r1.title': '直接醇类燃料电池电催化',
      'research.r1.desc': '核壳结构催化剂的设计与醇氧化反应机理研究，通过调控核/壳组成与生长方式优化催化性能。',
      'research.r2.title': '单原子催化剂',
      'research.r2.desc': '单/多原子催化剂的可控合成，及其对电化学反应路径的精准调控。',
      'research.r3.title': '电催化小分子转化',
      'research.r3.desc': '电化学 CO₂ 还原、硝酸根还原以及二者共还原制备尿素。',
      'research.r4.title': '理论计算与实验表征',
      'research.r4.desc': '第一性原理计算（VASP、CP2K）结合 XPS、XANES、EXAFS 等表征，揭示应力–电子结构–性能关系。',
      'pubs.title': '发表论文',
      'pubs.subtitle': '以第一作者或共同第一作者发表的代表性成果（9 篇）',
      'pubs.all': '全部',
      'pubs.first': '第一作者',
      'pubs.cofirst': '共同一作',
      'badge.first': '第一作者',
      'badge.cofirst': '共同一作',
      'pubs.note': '# 表示共同第一作者；* 表示通讯作者。',
      'skills.title': '专业技能',
      'skills.subtitle': '实验、计算与表征方面的核心能力',
      'skills.s1.title': '电化学测试',
      'skills.s1.desc': '电催化相关电化学性能测试（CV、LSV、EIS 等）与反应活性评价。',
      'skills.s2.title': '第一性原理计算',
      'skills.s2.desc': '熟练使用 VASP、CP2K 等软件开展密度泛函理论计算。',
      'skills.s3.title': '催化剂合成',
      'skills.s3.desc': '核壳结构纳米颗粒催化剂与单原子催化剂的合成与制备。',
      'skills.s4.title': '结构表征与分析',
      'skills.s4.desc': '高分辨透射电镜（HRTEM）操作，XPS、XANES、EXAFS 等数据处理。',
      'skills.s5.title': '英语能力',
      'skills.s5.desc': '英语六级（CET-6），具备较强的科技英语读写能力。',
      'awards.title': '荣誉奖项',
      'awards.subtitle': '研究生与博士后期间获得的荣誉',
      'awards.a1.name': '国家奖学金',
      'awards.a1.desc': '2021–2022 学年 · 中国科学院大学',
      'awards.a2.name': '优秀博士后（C类）',
      'awards.a2.desc': '2022–2024 · 大连化学物理研究所',
      'awards.a3.name': '优秀毕业生',
      'awards.a3.desc': '2021–2022 学年 · 中国科学院大学',
      'awards.a4.name': '三好学生',
      'awards.a4.desc': '2019–2020 学年 · 中国科学院大学',
      'contact.title': '联系我',
      'contact.subtitle': '欢迎学术交流与合作',
      'contact.email.title': '电子邮件',
      'contact.phone.title': '电话',
      'contact.office.title': '工作地点',
      'contact.office.desc': '辽宁省大连市 · 中国科学院大连化学物理研究所30室',
      'contact.profiles.title': '学术主页',
      'contact.profiles.desc': 'Google Scholar · GitHub · ORCID',
      'footer.name': '杨小博',
      'footer.rights': '保留所有权利'
    },
    en: {
      title: 'Xiaobo Yang · Academic Homepage',
      brand: 'Xiaobo Yang',
      'nav.home': 'Home',
      'nav.news': 'News',
      'nav.edu': 'Education & Work',
      'nav.research': 'Research',
      'nav.pubs': 'Publications',
      'nav.skills': 'Skills',
      'nav.awards': 'Awards',
      'nav.contact': 'Contact',
      'hero.role': 'Assistant Researcher · Electrocatalysis & Energy Materials',
      'hero.affil': 'Dalian Institute of Chemical Physics (DICP), Chinese Academy of Sciences · Division 30',
      'hero.bio': 'My research focuses on electrocatalysis and energy materials, with emphasis on catalyst design for direct alcohol fuel cells, core–shell nanostructures and single-atom catalysts, as well as electrochemical conversion of small molecules such as CO₂ and nitrate (including co-reduction to urea). By combining first-principles calculations with experimental characterization, I aim to reveal how lattice strain and electronic structure govern catalytic performance. I have published 9 papers as first or co-first author in journals including Advanced Energy Materials and Small.',
      'hero.cta1': 'View Publications',
      'hero.cta2': 'Contact Me',
      'news.title': 'News',
      'news.subtitle': 'Recent updates and highlights',
      'news.n1': 'Completed postdoctoral training and joined Division 30 of DICP, CAS, as an Assistant Researcher.',
      'news.n2': 'Paper “Secondary Coordination Sphere Engineering of Single-Sn-Atom Catalyst” published in Advanced Energy Materials (co-first author).',
      'news.n3': 'Review “Single-atom catalysis: a promising avenue for precisely controlling reaction pathways” published in Frontiers of Chemical Science and Engineering (first author).',
      'news.n4': 'Awarded “Outstanding Postdoctoral Fellow (Class C)” by Dalian Institute of Chemical Physics (2022–2024).',
      'news.n5': 'Paper “Size effect of ruthenium nanoparticles on water cracking” published in Journal of Colloid and Interface Science (co-first author).',
      'news.n6': 'Joined Dalian Institute of Chemical Physics, CAS, as a postdoctoral researcher.',
      'news.n7': 'Two first-authored papers published in Advanced Energy Materials.',
      'edu.title': 'Education & Work Experience',
      'edu.subtitle': 'BSc, MSc, PhD, postdoctoral training and current position',
      'edu.w1.role': 'Assistant Researcher · Electrocatalysis & Energy Materials',
      'edu.w1.place': 'DICP, Chinese Academy of Sciences · Division 30',
      'edu.e1.role': 'Postdoctoral Researcher · Electrocatalysis & Energy Materials',
      'edu.e1.place': 'Dalian Institute of Chemical Physics, CAS',
      'edu.e2.role': 'PhD · Materials Science',
      'edu.e2.place': 'University of Chinese Academy of Sciences, Institute of Coal Chemistry',
      'edu.e3.role': 'MSc · Materials Physics and Chemistry',
      'edu.e3.place': 'University of Chinese Academy of Sciences, Institute of Coal Chemistry',
      'edu.e4.role': 'BSc · Materials Chemistry',
      'edu.e4.place': 'Taiyuan University of Technology',
      'research.title': 'Research Interests',
      'research.subtitle': 'Core problems I am currently working on',
      'research.r1.title': 'Electrocatalysis for Direct Alcohol Fuel Cells',
      'research.r1.desc': 'Design of core–shell catalysts and mechanistic studies of alcohol oxidation, optimizing performance by tuning core/shell composition and growth.',
      'research.r2.title': 'Single-Atom Catalysis',
      'research.r2.desc': 'Controllable synthesis of single-/multi-atom catalysts and precise regulation of electrochemical reaction pathways.',
      'research.r3.title': 'Electrocatalytic Small-Molecule Conversion',
      'research.r3.desc': 'Electrochemical CO₂ reduction, nitrate reduction and their co-reduction to urea.',
      'research.r4.title': 'Theory and Characterization',
      'research.r4.desc': 'First-principles calculations (VASP, CP2K) combined with XPS, XANES and EXAFS to reveal strain–electronic structure–performance relationships.',
      'pubs.title': 'Publications',
      'pubs.subtitle': 'Selected publications as first or co-first author (9 papers)',
      'pubs.all': 'All',
      'pubs.first': 'First author',
      'pubs.cofirst': 'Co-first author',
      'badge.first': 'First Author',
      'badge.cofirst': 'Co-First Author',
      'pubs.note': '# denotes co-first authorship; * denotes corresponding author.',
      'skills.title': 'Skills',
      'skills.subtitle': 'Core capabilities in experiments, computation and characterization',
      'skills.s1.title': 'Electrochemical Testing',
      'skills.s1.desc': 'Electrocatalytic performance testing (CV, LSV, EIS, etc.) and activity evaluation.',
      'skills.s2.title': 'First-Principles Calculations',
      'skills.s2.desc': 'DFT calculations using VASP and CP2K.',
      'skills.s3.title': 'Catalyst Synthesis',
      'skills.s3.desc': 'Synthesis of core–shell nanoparticle and single-atom catalysts.',
      'skills.s4.title': 'Structural Characterization',
      'skills.s4.desc': 'HRTEM operation; XPS, XANES and EXAFS data processing.',
      'skills.s5.title': 'Language',
      'skills.s5.desc': 'CET-6 certified, with strong scientific English reading and writing skills.',
      'awards.title': 'Awards & Honors',
      'awards.subtitle': 'Honors received during graduate and postdoctoral studies',
      'awards.a1.name': 'National Scholarship',
      'awards.a1.desc': '2021–2022 · University of Chinese Academy of Sciences',
      'awards.a2.name': 'Outstanding Postdoctoral Fellow (Class C)',
      'awards.a2.desc': '2022–2024 · Dalian Institute of Chemical Physics',
      'awards.a3.name': 'Outstanding Graduate',
      'awards.a3.desc': '2021–2022 · University of Chinese Academy of Sciences',
      'awards.a4.name': 'Merit Student',
      'awards.a4.desc': '2019–2020 · University of Chinese Academy of Sciences',
      'contact.title': 'Contact',
      'contact.subtitle': 'Open to academic exchange and collaboration',
      'contact.email.title': 'Email',
      'contact.phone.title': 'Phone',
      'contact.office.title': 'Office',
      'contact.office.desc': 'Dalian, Liaoning · DICP, CAS (Division 30)',
      'contact.profiles.title': 'Academic Profiles',
      'contact.profiles.desc': 'Google Scholar · GitHub · ORCID',
      'footer.name': 'Xiaobo Yang',
      'footer.rights': 'All rights reserved'
    }
  };

  var langBtn = document.getElementById('lang-toggle');
  var currentLang = 'zh';
  try { currentLang = localStorage.getItem('academic-lang') || 'zh'; } catch (e) {}

  function applyLang() {
    var dict = I18N[currentLang];
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key]) nodes[i].textContent = dict[key];
    }
    root.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    document.title = dict.title;
    if (langBtn) langBtn.textContent = currentLang === 'zh' ? 'EN' : '中文';
  }

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      try { localStorage.setItem('academic-lang', currentLang); } catch (e) {}
      applyLang();
    });
  }
  applyLang();

  /* ---------- 移动端菜单 ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    function closeMenu() {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---------- 滚动高亮当前章节 ---------- */
  var spyLinks = {};
  var spyLinkEls = document.querySelectorAll('.nav-link');
  for (var i = 0; i < spyLinkEls.length; i++) {
    var href = spyLinkEls[i].getAttribute('href');
    if (href && href.charAt(0) === '#') spyLinks[href.slice(1)] = spyLinkEls[i];
  }
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          for (var s = 0; s < spyLinkEls.length; s++) spyLinkEls[s].classList.remove('active');
          var link = spyLinks[entry.target.id];
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    var secs = document.querySelectorAll('main section[id]');
    for (var j = 0; j < secs.length; j++) spy.observe(secs[j]);
  }

  /* ---------- 出场动画 ---------- */
  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    var reveals = document.querySelectorAll('.reveal');
    for (var k = 0; k < reveals.length; k++) revealObs.observe(reveals[k]);
  } else {
    var fallbacks = document.querySelectorAll('.reveal');
    for (var f = 0; f < fallbacks.length; f++) fallbacks[f].classList.add('visible');
  }

  /* ---------- 论文筛选 ---------- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var pubItems = document.querySelectorAll('.pub-item');
  for (var b = 0; b < filterBtns.length; b++) {
    filterBtns[b].addEventListener('click', function () {
      for (var x = 0; x < filterBtns.length; x++) filterBtns[x].classList.remove('active');
      this.classList.add('active');
      var f = this.getAttribute('data-filter');
      for (var y = 0; y < pubItems.length; y++) {
        pubItems[y].classList.toggle('hidden', f !== 'all' && pubItems[y].getAttribute('data-role') !== f);
      }
    });
  }

  /* ---------- 平滑滚动 ---------- */
  var anchors = document.querySelectorAll('a[href^="#"]');
  for (var a = 0; a < anchors.length; a++) {
    anchors[a].addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  }

  /* ---------- 回到顶部 ---------- */
  var topBtn = document.getElementById('back-to-top');
  if (topBtn) {
    window.addEventListener('scroll', function () {
      topBtn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
