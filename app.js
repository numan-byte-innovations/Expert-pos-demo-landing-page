(function () {
  'use strict';

  var english = {
    skip: 'Skip to main content',
    navReviews: 'Client Reviews', navChallenges: 'Challenges', navApproach: 'Custom POS', navIndustries: 'Industries', navFeatures: 'Features', navDemo: 'Book a Demo',
    sampleSpeech: 'Illustrative owner voice', heroDemo: 'Book a Free Demo', heroExplore: 'Explore solutions', previous: 'Previous', next: 'Next',
    introEyebrow: 'MEET EXPERT POS', introTitle: 'From sale to insight, all in one place.', introBody: 'Expert POS is a web-based POS system for businesses in Bangladesh. Counter sales, stock by branch, online orders, Steadfast or Pathao courier booking and profit reports stay connected in one daily workflow.', introCap1: 'Fast billing', introCap2: 'Stock by branch', introCap3: 'Courier booking', introCta: 'See how Expert POS works ↗',
    reviewsEyebrow: 'CLIENT REVIEWS', reviewsTitle: 'Daily work, in the words of business owners.', reviewsIntro: 'Verified client reviews can sit here alongside the hero stories. These sample voices demonstrate the layout.', reviewsBadge: 'Illustrative copy · not verified reviews',
    review1: 'It used to take too long to see which products were running out. Now I can check stock easily in one place.', review1Role: 'Super shop owner',
    review2: 'Understanding each day’s sales used to take time. Now I can read a report and see how the business is doing.', review2Role: 'Female fashion and boutique owner',
    review3: 'We used to keep different business records separately. Now Expert POS brings much of the work into one place.', review3Role: 'Retail store owner', clientsLabel: 'A selection of businesses working with us',
    challengeEyebrow: 'THE DAILY REALITY', challengeTitle: 'Business challenges deserve a connected solution.', challengeIntro: 'The counter, stockroom, online orders, suppliers and reports all move together every day.',
    challengeCol: 'Business Challenges', solutionCol: 'Solutions in one place',
    challenge1: 'Orders, sales and stock are scattered across separate notebooks.', challenge2: 'Slow billing creates a queue at the counter.', challenge3: 'Finding supplier dues and customer history takes time.', challenge4: 'Daily sales and profit are difficult to read clearly.',
    solution1: 'Keep sales, stock and orders in one workflow.', solution2: 'Move checkout forward with POS billing and barcode scanning.', solution3: 'Open purchases, dues and customer ledgers quickly.', solution4: 'See business performance through a dashboard and reports.',
    solutionPricing: 'Discuss a plan and price shaped around your business needs.', pricingLink: 'Request pricing',
    approachEyebrow: 'BUILT AROUND YOUR WORKFLOW', approachTitle: 'A POS that follows your business.', approachIntro: 'Every business handles sales, stock and service differently. We learn your workflow, configure Expert POS around it, and develop the pieces your team needs.',
    approachStep1Label: 'Understand', approachStep1: 'We learn your business process and pain points.', approachStep2Label: 'Shape', approachStep2: 'We map the workflow and features you need.', approachStep3Label: 'Launch', approachStep3: 'We bring the team into the real working flow.', approachCta: 'Talk about your workflow',
    uiDisclaimer: 'PRODUCT PREVIEW · SAMPLE DATA', productWorkspace: 'BUSINESS WORKSPACE', productOverview: 'ONE CONNECTED WORKSPACE', productFlow: 'Sale, stock and delivery stay in sync.', productCaption: 'The next step stays connected to the same sale.',
    previewBilling: '01 / Billing', previewStock: '02 / Stock', previewCourier: '03 / Courier', previewSearch: 'Search product / SKU / scan barcode', previewProduct: 'Product', previewQuantity: 'Qty', previewAmount: 'Amount', previewPayable: 'Total payable', previewBillNote: 'Sample sale · 3 products', previewPayment: 'Cash / Split payment',
    previewStockHeading: 'Stock by branch', previewBranch: 'Dhaka main branch', previewAvailable: 'Available', previewStatus: 'Status', previewInStock: 'In stock', previewLowStock: 'Low stock', previewStockNote: 'See stock across locations and act before it runs out.',
    previewCourierHeading: 'Online order delivery', previewSaved: 'Sale saved', previewOrder: 'Order recorded', previewOrderHint: 'Customer and items', previewBooking: 'Pathao booked', previewBookingHint: 'With the same sale', previewTracking: 'Tracking linked', previewTrackingHint: 'Ready to follow up', previewCourierNote: 'The booking and tracking record stay with the order.',
    industriesEyebrow: 'WHO WE BUILD FOR', industriesTitle: 'Every business works differently. Its solution should too.', industriesIntro: 'Choose a business to see which Expert POS workflows may fit your day.', industryCta: 'See a demo for this business',
    featuresEyebrow: 'THE CORE SYSTEM', featuresTitle: 'Core features for the work you do every day.', featuresIntro: 'From sales to reporting, one connected view keeps the details within reach.', featuresCta: 'See the full demo',
    feature1Title: 'Fast POS billing', feature1Text: 'Barcode scanning, split payments, cash registers and receipts.',
    feature2Title: 'Inventory control', feature2Text: 'Stock by branch, low-stock alerts and transfer records.',
    feature3Title: 'Online orders & courier', feature3Text: 'Steadfast and Pathao booking with order tracking.',
    feature4Title: 'Purchase & supplier', feature4Text: 'Clear records of purchases, payments and supplier dues.',
    feature5Title: 'Customer history', feature5Text: 'Customer ledger, dues, groups and reward points.',
    feature6Title: 'Reports & visibility', feature6Text: 'Sales, profit and loss, branch performance and exported reports.',
    contactEyebrow: 'START A CONVERSATION', contactTitle: 'See the right setup for your business.', contactText: 'Request a free demo or pricing, and tell us how your business works.', contactWhatsapp: 'Talk on WhatsApp',
    contactCallLabel: 'Call us directly', contactOfficeLabel: 'Our office', contactAddress: 'Block H, Moar Banani 11, Ventura Iconia, Level 3, Holding 37 Road No. 11, Dhaka', contactMapLink: 'View on Google Maps ↗',
    contactFormKicker: 'TELL US WHAT YOU NEED', contactFormTitle: 'Request a demo or pricing', contactFormIntro: 'Share a few details so we can understand your business needs.',
    contactNameLabel: 'Business / Owner Name', contactPhoneLabel: 'Contact Number', contactEmailLabel: 'Email (optional)', contactBusinessLabel: 'Business type', contactBusinessPlaceholder: 'Choose a business type',
    businessEcommerce: 'E-commerce', businessSuperShop: 'Super Shop', businessFashion: 'Fashion & Boutique', businessRestaurant: 'Restaurant', businessElectronics: 'Electronics', businessSalon: 'Beauty Salon', businessOther: 'Other',
    contactIntentLabel: 'What do you need?', contactIntentPlaceholder: 'Choose an option', contactIntentDemo: 'Free demo', contactIntentPricing: 'Pricing', contactIntentCustom: 'Custom POS',
    contactSubmit: 'Open request in WhatsApp ↗', contactFormNote: 'This opens your request in WhatsApp. Review it and press Send there to deliver it.',
    contactVisitEyebrow: 'OUR LOCATION', contactVisitTitle: 'Our office in Banani, Dhaka.', contactOpenMaps: 'Open Google Maps ↗', mapDirections: 'Get directions ↗',
    footerTagline: 'POS, inventory and connected workflows for businesses in Bangladesh.', footerDemo: 'Book a demo for your business ↗', footerExplore: 'Explore', footerHome: 'Home', footerContact: 'Contact', footerReach: 'Get in touch', footerMap: 'Office map ↗', footerElsewhere: 'Elsewhere', footerLogin: 'Expert POS login ↗', footerRights: 'All rights reserved.', footerTop: 'Back to top ↑', footerNote: 'Local design demo · illustrative owner voices',
    floatingWhatsapp: 'Talk on WhatsApp', floatingTop: 'Back to top'
  };

  var assets = [
    { image: 'images/ecommerce-owner.png', focal: '77% center' },
    { image: 'images/super-shop-owner.png', focal: '78% center' },
    { image: 'images/fashion-owner.png', focal: '78% center' },
    { image: 'images/restaurant-owner.png', focal: '75% center' },
    { image: 'images/electronics.jpg', focal: '65% center' },
    { image: 'images/salon-owner.png', focal: '75% center' }
  ];

  var stories = {
    bn: [
      { category: 'E-COMMERCE & FACEBOOK SELLERS', name: 'E-commerce', title: 'Online order থেকে courier—সব এক workflow-তে।', description: 'Facebook ও website-এর order বারবার লিখতে হয়? Expert POS-এ order save করেই Steadfast বা Pathao booking এবং tracking record রাখুন।', quote: 'আগে order আর courier panel আলাদা ছিল। এখন sale-এর সঙ্গে delivery status-ও এক জায়গায় দেখি।', role: 'E-commerce business owner', detail: 'Online order, courier booking ও tracking একই sale-এর সঙ্গে রাখুন।', alt: 'Bangladesh-এর e-commerce owner তাঁর order fulfilment studio-তে' },
      { category: 'RETAIL & SUPER SHOP', name: 'Super Shop', title: 'Counter-এর queue কমান। Stock-এর হিসাব রাখুন।', description: 'Barcode, weighing-scale label ও POS billing দিয়ে checkout সহজ করুন; প্রতিটি sale-এর সঙ্গে stock-ও আপডেট থাকুক।', quote: 'আগে প্রতিটি bill করতে অনেক সময় লাগত। এখন সহজেই bill তৈরি করি, ক্রেতারাও দ্রুত service পান।', role: 'সুপার শপের মালিক', detail: 'দ্রুত billing, stock visibility ও cash register-এর হিসাব একসঙ্গে।', alt: 'সুপার শপে দাঁড়িয়ে থাকা বাংলাদেশি দোকানের মালিক' },
      { category: 'FASHION & BOUTIQUE', name: 'Fashion', title: 'প্রতিটি size, colour ও design-এর stock জানুন।', description: 'Variation, barcode label, showroom stock এবং online order—boutique-এর প্রতিটি product পরিষ্কারভাবে track করুন।', quote: 'আগে কোন size শেষ হয়ে যাচ্ছে বুঝতে দেরি হতো। এখন প্রতিটি variation-এর stock আলাদা করে দেখি।', role: 'ফ্যাশন ও বুটিক হাউসের নারী মালিক', detail: 'Size ও colour variation, barcode label এবং showroom stock-এর স্পষ্ট view।', alt: 'বাংলাদেশি নারী boutique owner তাঁর fashion store-এ' },
      { category: 'RESTAURANT & CAFÉ', name: 'Restaurant', title: 'Order থেকে kitchen—service চলুক একই flow-তে।', description: 'Table-wise order, kitchen screen এবং waiter workflow একসঙ্গে রাখুন, যাতে order হারিয়ে না যায়।', quote: 'আগে counter থেকে kitchen-এ order পৌঁছাতে দেরি হতো। এখন team একই order list দেখে কাজ করে।', role: 'রেস্টুরেন্টের মালিক', detail: 'Table order, kitchen screen এবং service team-এর কাজ connected রাখুন।', alt: 'বাংলাদেশি restaurant owner তাঁর restaurant-এর dining area-তে' },
      { category: 'MOBILE & ELECTRONICS', name: 'Electronics', title: 'IMEI, warranty ও customer record হাতের কাছেই।', description: 'প্রতিটি device-এর serial বা IMEI, product warranty ও customer ledger এক জায়গায় রাখুন।', quote: 'আগে কোন phone কার কাছে বিক্রি হয়েছে খুঁজতে সময় লাগত। এখন IMEI ও customer record সহজে দেখি।', role: 'মোবাইল ও ইলেকট্রনিক্স দোকানের মালিক', detail: 'Serial/IMEI, warranty, sale ও customer ledger-এর পরিষ্কার record।', alt: 'মোবাইল ও ইলেকট্রনিক্স দোকানে বিক্রেতা ও ক্রেতা' },
      { category: 'BEAUTY PARLOUR & SALON', name: 'Salon', title: 'Booking থেকে billing—salon-এর দিন সাজান সহজে।', description: 'Calendar-এ booking, assigned staff, service billing ও commission-এর তথ্য রাখুন একই system-এ।', quote: 'আগে booking আর stylist-এর কাজ আলাদা খাতায় রাখতাম। এখন calendar খুলেই দিনের plan দেখি।', role: 'বিউটি পার্লার ও স্যালনের নারী মালিক', detail: 'Booking calendar, assigned staff, service billing ও commission।', alt: 'বাংলাদেশি নারী salon owner তাঁর beauty studio-তে' }
    ],
    en: [
      { category: 'E-COMMERCE & FACEBOOK SELLERS', name: 'E-commerce', title: 'From online order to courier, one connected workflow.', description: 'Tired of entering Facebook and website orders twice? Save an order in Expert POS, book Steadfast or Pathao, and keep its tracking record with the sale.', quote: 'Orders and the courier panel used to be separate. Now I can see the delivery status alongside the sale.', role: 'E-commerce business owner', detail: 'Keep online orders, courier booking and tracking with the same sale.', alt: 'Bangladeshi e-commerce owner in an order fulfilment studio' },
      { category: 'RETAIL & SUPER SHOP', name: 'Super Shop', title: 'Shorter queues. Clearer stock.', description: 'Use barcodes, weighing-scale labels and POS billing to simplify checkout while every sale updates your stock records.', quote: 'Each bill used to take time. Now I can create it easily and customers are served faster.', role: 'Super shop owner', detail: 'Bring fast billing, stock visibility and cash register records together.', alt: 'Bangladeshi super shop owner standing in his store' },
      { category: 'FASHION & BOUTIQUE', name: 'Fashion', title: 'Know the stock of every size, colour and design.', description: 'Track variations, barcode labels, showroom stock and online orders for every piece in your boutique.', quote: 'It used to take time to find out which size was running out. Now I can see stock for each variation.', role: 'Female fashion and boutique owner', detail: 'A clear view of size and colour variations, barcode labels and showroom stock.', alt: 'Bangladeshi female boutique owner in her fashion store' },
      { category: 'RESTAURANT & CAFÉ', name: 'Restaurant', title: 'From order to kitchen, keep service in one flow.', description: 'Bring table orders, the kitchen screen and waiter workflows together so each order stays visible to the team.', quote: 'It used to take time for an order to reach the kitchen. Now the team works from one order list.', role: 'Restaurant owner', detail: 'Connect table orders, the kitchen screen and the service team.', alt: 'Bangladeshi restaurant owner in his dining area' },
      { category: 'MOBILE & ELECTRONICS', name: 'Electronics', title: 'IMEI, warranty and customer records close at hand.', description: 'Keep each device’s serial or IMEI number, product warranty and customer ledger in one place.', quote: 'Finding who bought a phone used to take time. Now I can check the IMEI and customer record easily.', role: 'Mobile and electronics store owner', detail: 'Clear records of serials, IMEIs, warranties, sales and customers.', alt: 'Seller and customer in a mobile and electronics shop' },
      { category: 'BEAUTY PARLOUR & SALON', name: 'Salon', title: 'From booking to billing, plan the salon day.', description: 'Keep bookings, assigned staff, service bills and commission records together in one system.', quote: 'We used to track bookings and stylist work in separate notebooks. Now I open the calendar to see the day’s plan.', role: 'Female beauty parlour and salon owner', detail: 'Booking calendar, assigned staff, service billing and commission.', alt: 'Bangladeshi female salon owner in her beauty studio' }
    ]
  };

  var originals = {};
  Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (node) {
    var key = node.getAttribute('data-i18n');
    if (!(key in originals)) originals[key] = node.textContent;
  });

  var lang = 'bn';
  var currentSlide = 0;
  var currentIndustry = 1;
  var autoTimer = null;
  var motionReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var manuallyPaused = motionReduced;
  var hero = document.getElementById('hero');

  function text(id, value) { document.getElementById(id).textContent = value; }

  function renderPills() {
    var row = document.getElementById('slidePills');
    row.textContent = '';
    stories[lang].forEach(function (story, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = story.name;
      button.setAttribute('aria-label', (lang === 'bn' ? 'Slide দেখুন: ' : 'Show slide: ') + story.name);
      button.setAttribute('aria-pressed', index === currentSlide ? 'true' : 'false');
      if (index === currentSlide) button.className = 'is-current';
      button.addEventListener('click', function () { changeSlide(index, index >= currentSlide ? 'next' : 'previous'); });
      row.appendChild(button);
    });
  }

  function renderSlide(direction) {
    var story = stories[lang][currentSlide];
    var image = document.getElementById('heroImage');
    if (image.getAttribute('src') !== assets[currentSlide].image) {
      var oldImage = document.querySelector('.hero-image-outgoing');
      if (oldImage) oldImage.remove();
      if (!motionReduced) {
        oldImage = image.cloneNode(false);
        oldImage.removeAttribute('id');
        oldImage.removeAttribute('fetchpriority');
        oldImage.alt = '';
        oldImage.setAttribute('aria-hidden', 'true');
        oldImage.className = 'hero-image-outgoing';
        image.parentNode.appendChild(oldImage);
        window.requestAnimationFrame(function () { oldImage.classList.add('is-exiting'); });
        window.setTimeout(function () { oldImage.remove(); }, 760);
      }
      image.setAttribute('src', assets[currentSlide].image);
    }
    image.alt = story.alt;
    image.style.objectPosition = assets[currentSlide].focal;
    text('heroCategory', story.category);
    text('heroTitle', story.title);
    text('heroDescription', story.description);
    text('heroQuote', story.quote);
    text('heroRole', story.role);
    text('slideCurrent', String(currentSlide + 1).padStart(2, '0'));
    var content = document.getElementById('heroContent');
    content.classList.remove('enter-next', 'enter-previous');
    if (!motionReduced && direction) {
      void content.offsetWidth;
      content.classList.add(direction === 'next' ? 'enter-next' : 'enter-previous');
    }
    renderPills();
  }

  function renderIndustry() {
    var list = document.getElementById('industryList');
    list.textContent = '';
    stories[lang].forEach(function (story, index) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'industry-choice' + (index === currentIndustry ? ' is-current' : '');
      button.setAttribute('aria-pressed', index === currentIndustry ? 'true' : 'false');
      var title = document.createElement('strong');
      title.textContent = story.name;
      var tagline = document.createElement('span');
      tagline.textContent = story.category;
      button.appendChild(title);
      button.appendChild(tagline);
      button.addEventListener('click', function () { currentIndustry = index; renderIndustry(); });
      list.appendChild(button);
    });
    var item = stories[lang][currentIndustry];
    var image = document.getElementById('industryImage');
    image.src = assets[currentIndustry].image;
    image.alt = item.alt;
    image.style.objectPosition = assets[currentIndustry].focal;
    text('industryPhotoLabel', item.name.toUpperCase());
    text('industryDescription', item.detail);
  }

  function setLanguage(next) {
    if (next !== 'bn' && next !== 'en') return;
    lang = next;
    document.documentElement.lang = next;
    Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), function (node) {
      var key = node.getAttribute('data-i18n');
      node.textContent = next === 'bn' ? originals[key] : (english[key] || originals[key]);
    });
    Array.prototype.forEach.call(document.querySelectorAll('.language-option'), function (button) {
      var active = button.getAttribute('data-lang') === next;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    document.title = next === 'bn' ? 'Expert POS — Landing Page Demo 02' : 'Expert POS — Landing Page Demo 02';
    renderSlide();
    renderIndustry();
    renderAutoplayControl();
    try { window.localStorage.setItem('expertPosDemoLanguage', next); } catch (e) { /* storage can be disabled */ }
  }

  function renderAutoplayControl() {
    var button = document.getElementById('slideAutoplay');
    if (!button) return;
    var label = manuallyPaused ? (lang === 'bn' ? 'চালু করুন' : 'Play') : (lang === 'bn' ? 'থামান' : 'Pause');
    button.textContent = label;
    button.setAttribute('aria-label', lang === 'bn' ? (manuallyPaused ? 'Slider আবার চালু করুন' : 'Slider থামান') : (manuallyPaused ? 'Play automatic slides' : 'Pause automatic slides'));
    button.setAttribute('aria-pressed', manuallyPaused ? 'true' : 'false');
  }
  function startAuto() {
    if (autoTimer || manuallyPaused || document.hidden) return;
    autoTimer = window.setInterval(function () { currentSlide = (currentSlide + 1) % assets.length; renderSlide('next'); }, 6500);
  }

  function stopAuto() { if (autoTimer) window.clearInterval(autoTimer); autoTimer = null; }
  function changeSlide(index, direction) {
    currentSlide = (index + assets.length) % assets.length;
    renderSlide(direction);
    stopAuto();
    startAuto();
  }

  Array.prototype.forEach.call(document.querySelectorAll('.language-option'), function (button) {
    button.addEventListener('click', function () { setLanguage(button.getAttribute('data-lang')); });
  });
  document.getElementById('slidePrevious').addEventListener('click', function () { changeSlide(currentSlide - 1, 'previous'); });
  document.getElementById('slideNext').addEventListener('click', function () { changeSlide(currentSlide + 1, 'next'); });
  document.getElementById('slideAutoplay').addEventListener('click', function () {
    manuallyPaused = !manuallyPaused;
    if (manuallyPaused) stopAuto(); else startAuto();
    renderAutoplayControl();
  });
  document.addEventListener('visibilitychange', function () { if (document.hidden) stopAuto(); else startAuto(); });
  document.addEventListener('keydown', function (event) {
    if (event.target && /input|textarea|select/i.test(event.target.tagName)) return;
    if (event.key === 'ArrowRight' && hero.getBoundingClientRect().bottom > 0 && hero.getBoundingClientRect().top < innerHeight) changeSlide(currentSlide + 1, 'next');
    if (event.key === 'ArrowLeft' && hero.getBoundingClientRect().bottom > 0 && hero.getBoundingClientRect().top < innerHeight) changeSlide(currentSlide - 1, 'previous');
  });

  var previewTabs = Array.prototype.slice.call(document.querySelectorAll('[data-preview-tab]'));
  var previewPanels = Array.prototype.slice.call(document.querySelectorAll('[data-preview-panel]'));
  function activatePreview(tab) {
    var key = tab.getAttribute('data-preview-tab');
    previewTabs.forEach(function (item) {
      var active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active ? 'true' : 'false');
      item.tabIndex = active ? 0 : -1;
    });
    previewPanels.forEach(function (panel) {
      var active = panel.getAttribute('data-preview-panel') === key;
      panel.hidden = !active;
      panel.classList.toggle('is-active', active);
    });
  }
  previewTabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () { activatePreview(tab); });
    tab.addEventListener('keydown', function (event) {
      var next = event.key === 'ArrowRight' ? index + 1 : event.key === 'ArrowLeft' ? index - 1 : event.key === 'Home' ? 0 : event.key === 'End' ? previewTabs.length - 1 : null;
      if (next === null) return;
      event.preventDefault();
      var target = previewTabs[(next + previewTabs.length) % previewTabs.length];
      activatePreview(target);
      target.focus();
    });
  });

  var menuButton = document.getElementById('menuToggle');
  var menu = document.getElementById('mainNav');
  function closeMenu() { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }
  menuButton.addEventListener('click', function () { var open = menu.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', open ? 'true' : 'false'); });
  menu.addEventListener('click', function (event) { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeMenu(); });

  var toTop = document.querySelector('.floating-top');
  function updateTopButton() { toTop.classList.toggle('is-visible', window.scrollY > 500); }
  window.addEventListener('scroll', updateTopButton, { passive: true });
  updateTopButton();

  var businessValues = ['ecommerce', 'super-shop', 'fashion', 'restaurant', 'electronics', 'salon'];
  function prepareContact(businessIndex, intent) {
    var business = document.getElementById('contactBusiness');
    var request = document.getElementById('contactIntent');
    if (business && businessValues[businessIndex]) business.value = businessValues[businessIndex];
    if (request) request.value = intent;
  }
  document.querySelector('.hero-cta-row .button').addEventListener('click', function () { prepareContact(currentSlide, 'demo'); });
  document.querySelector('.industry-detail a').addEventListener('click', function () { prepareContact(currentIndustry, 'demo'); });
  document.querySelector('[data-i18n="pricingLink"]').addEventListener('click', function () { prepareContact(-1, 'pricing'); });
  document.querySelector('[data-i18n="approachCta"]').addEventListener('click', function () { prepareContact(-1, 'custom'); });
  Array.prototype.forEach.call(document.querySelectorAll('[data-i18n="navDemo"], [data-i18n="featuresCta"], [data-i18n="footerDemo"]'), function (link) {
    link.addEventListener('click', function () { prepareContact(-1, 'demo'); });
  });

  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var form = event.currentTarget;
    if (!form.reportValidity()) return;
    var name = document.getElementById('contactName').value.trim();
    var phone = document.getElementById('contactPhone').value.trim();
    var email = document.getElementById('contactEmail').value.trim();
    var business = document.getElementById('contactBusiness');
    var request = document.getElementById('contactIntent');
    var businessName = business.options[business.selectedIndex].textContent.trim();
    var requestName = request.options[request.selectedIndex].textContent.trim();
    var lines = lang === 'bn'
      ? ['Expert POS-এ ' + requestName + ' request', 'নাম / Business: ' + name, 'ফোন: ' + phone, 'Business type: ' + businessName]
      : ['Expert POS ' + requestName + ' request', 'Name / business: ' + name, 'Phone: ' + phone, 'Business type: ' + businessName];
    if (email) lines.push('Email: ' + email);
    var link = document.createElement('a');
    link.href = 'https://wa.me/8801721417203?text=' + encodeURIComponent(lines.join('\n'));
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    link.remove();
    document.getElementById('contactFormNote').textContent = lang === 'bn'
      ? 'WhatsApp খুলবে। সেখানে Send চাপলে আপনার request যাবে।'
      : 'WhatsApp will open. Press Send there to deliver your request.';
  });

  var requestedSlide = Number(new URLSearchParams(window.location.search).get('slide'));
  if (Number.isInteger(requestedSlide) && requestedSlide >= 1 && requestedSlide <= assets.length) currentSlide = requestedSlide - 1;
  var requestedPreview = new URLSearchParams(window.location.search).get('preview');
  previewTabs.forEach(function (tab) { if (tab.getAttribute('data-preview-tab') === requestedPreview) activatePreview(tab); });
  var initial = 'bn';
  try { if (window.localStorage.getItem('expertPosDemoLanguage') === 'en') initial = 'en'; } catch (e) { /* storage can be disabled */ }
  if (new URLSearchParams(window.location.search).get('lang') === 'en') initial = 'en';
  if (new URLSearchParams(window.location.search).get('lang') === 'bn') initial = 'bn';
  assets.forEach(function (asset) { var preload = new Image(); preload.src = asset.image; });
  document.getElementById('footerYear').textContent = String(new Date().getFullYear());
  setLanguage(initial);
  startAuto();
})();
