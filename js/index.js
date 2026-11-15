window.addEventListener('DOMContentLoaded', function () {

  function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Common mobile/tablet detection regex
  const pattern = /android|bb\d+|meego|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|silk|playbook/i;

  // Older and obscure devices
  const legacyPattern = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i;

  return pattern.test(userAgent) || legacyPattern.test(userAgent.substr(0, 4));
  }

  if (isMobile()) {
    document.body.classList.add("mobile");
  }


  const titles = [
    "MULTIMEDIA SPECIALIST",
    "ELEARNING DEVELOPER",
    "GRAPHIC DESIGNER"
  ];

  let index = 0;
  const ml11 = document.querySelector('.ml11');
  const lettersSpan = ml11.querySelector('.letters');
  const line = ml11.querySelector('.line');

  function wrapLetters(text) {
    return text.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
  }

  // 1. Instantly show first title
  lettersSpan.textContent = titles[index];
  ml11.style.opacity = 1;

  // 2. After short pause, begin full animation loop
    function animateNextTitle() {
      index = (index + 1) % titles.length;
      const nextTitle = titles[index];
      lettersSpan.innerHTML = wrapLetters(nextTitle);

      anime.timeline({ loop: false })
        .add({
          targets: line,
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700
        })
        .add({
          targets: line,
          translateX: [0, lettersSpan.getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100
        })
        .add({
          targets: '.letter',
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=775',
          delay: (el, i) => 34 * (i + 1)
        })
        .add({
          targets: ml11,
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
          complete: () => {
            ml11.style.opacity = 1;
            animateNextTitle(); // recursively call for the next title
          }
        });
    }
    animateNextTitle();


    document.querySelectorAll('.nav-item').forEach(item => {
      const naviTransitionWrap = document.querySelector('.navi-transition-wrap');
    
      item.addEventListener('click', () => {
        setTimeout(() => {
          //setInit ()
          hicreo.init();
          elearning.init();
          others.init();
        }, 500);

        // Get absolute position of the clicked nav item
        const rect = item.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        const absoluteLeft = rect.left + window.scrollX;
    
        // Create and style the transition div
        const transitionDiv = document.createElement('div');
        transitionDiv.classList.add('navi-transition');
        transitionDiv.style.position = 'absolute';
        transitionDiv.style.top = `${absoluteTop}px`;
        transitionDiv.style.left = `${absoluteLeft}px`;
        naviTransitionWrap.appendChild(transitionDiv);
        naviTransitionWrap.style.zIndex = `9999`

        // Add optional logic per nav ID
        const clickedId = item.id;

        // Optional: set a special color or animation based on ID
        if (clickedId === "nav-home") {
          transitionDiv.style.backgroundColor = '#000000';
        }else if(clickedId === "nav-hicreo"){
          transitionDiv.style.backgroundColor = '#021526';
        }else if(clickedId === "nav-elearning"){
          transitionDiv.style.backgroundColor = '#17153B';
        }else if(clickedId === "nav-others"){
          transitionDiv.style.backgroundColor = '#222831';
        }else if(clickedId === "nav-resume"){
          transitionDiv.style.backgroundColor = '#0A2647';
        }else if(clickedId === "nav-contact"){
          transitionDiv.style.backgroundColor = '#191919';
        }
    
        // Manage `.active` class
        document.querySelectorAll('.nav-item').forEach(nav => {
          nav.classList.remove('active');
        });
        item.classList.add('active');
    
        // Animate and remove transition overlay
        setTimeout(() => {
          transitionDiv.classList.add('active');
          transitionDiv.style.left = "-150%";
          transitionDiv.style.top = "-150%";
        }, 50);

        setTimeout(() => {
          transitionDiv.classList.add('fade-out');
          const sectionIds = ['home', 'hicreo', 'elearning', 'others', 'resume', 'contact'];
          const sections = sectionIds.map(id => document.getElementById(id));
          naviTransitionWrap.style.zIndex = `0`
          // Hide all sections
          sections.forEach(section => {
            if (section) {
              section.style.display = 'none';
            }
          });

          // Extract section name by removing "nav-" prefix
          const sectionId = clickedId.replace('nav-', '');
          const targetSection = document.getElementById(sectionId);

          // Show the clicked section if it exists
          if (targetSection) {
            targetSection.style.display = 'block';
          }

        }, 400);

        setTimeout(() => {
          transitionDiv.remove();
        }, 500);


      });
    });
    
    const hicreoLaptop = document.querySelector('#hicreo .laptop');
    const hicreoPhone = document.querySelector('#hicreo .phone');
    
    let mouseX = 0;
    let mouseY = 0;
    let ticking = false;
    
    const maxMove = 20;
    
    function updateTransforms() {
      const offsetX = (mouseX - window.innerWidth / 2) / (window.innerWidth / 2);
      const offsetY = (mouseY - window.innerHeight / 2) / (window.innerHeight / 2);
    
      if (hicreoLaptop) {
        hicreoLaptop.style.transform = `translate(${-offsetX * maxMove}px, ${-offsetY * maxMove}px)`;
      }
    
      if (hicreoPhone) {
        hicreoPhone.style.transform = `translate(${offsetX * maxMove}px, ${offsetY * maxMove}px)`;
      }
    
      ticking = false;
    }
    
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    
      if (!ticking) {
        requestAnimationFrame(updateTransforms);
        ticking = true;
      }
    });
    
    window.addEventListener('mouseleave', () => {
      if (hicreoLaptop) hicreoLaptop.style.transform = 'translate(0, 0)';
      if (hicreoPhone) hicreoPhone.style.transform = 'translate(0, 0)';
    });

    function setupPortfolioNavigation({
      sectionId,
      portfolioSelector,
      pages,
    }) {
      const navNext = document.querySelector(`#${sectionId}-next`);
      const navPrev = document.querySelector(`#${sectionId}-prev`);
      const portfolio = document.querySelector(portfolioSelector);
      const navDots = pages.map(p => document.querySelector(`#${sectionId}-${p}`));
    
      let currentIndex = 0;
    
      function updateNav() {
        navDots.forEach(dot => dot.classList.remove('selected'));
        if (navDots[currentIndex]) {
          navDots[currentIndex].classList.add('selected');
        }
    
        navPrev.classList.toggle('disabled', currentIndex === 0);
        navNext.classList.toggle('disabled', currentIndex === navDots.length - 1);
    
        portfolio.style.left = `-${currentIndex * 100}%`;

      }
    
      navNext.addEventListener('click', () => {
        if (currentIndex < navDots.length - 1) {
          currentIndex++;
          updateNav();
        }
      });
    
      navPrev.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateNav();
        }
      });
    
      navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentIndex = index;
          updateNav();
        });
      });
    
      // Optional initializer
      function init() {
        currentIndex = 0;
        updateNav();

        const elearningWrap = document.querySelectorAll('.elearning-portfolio-item-wrap');
        const elearningDemoBtn = document.querySelectorAll('.demontem');
        const elearningCourseBtn = document.querySelectorAll('.coursetem');
        const latesDemoItem = document.querySelector('#demontem-3');
        const latesCourseItem = document.querySelector('#coursetem-13');
        const latesDemoBtn = document.querySelector('.demontem3');
        const latesCourseBtn = document.querySelector('.coursetem13');

        elearningWrap.forEach(container => {
          container.classList.remove('selected');
        });
        elearningDemoBtn.forEach(btn => {
          btn.classList.remove('selected');
        });
        elearningCourseBtn.forEach(btn => {
          btn.classList.remove('selected');
        });
        latesDemoItem.classList.add('selected');
        latesCourseItem.classList.add('selected');
        latesDemoBtn.classList.add('selected');
        latesCourseBtn.classList.add('selected');
          
        const othersWrap = document.querySelectorAll('.others-portfolio-item-wrap');
        const othersVideoWrap = document.querySelector('.item10 .others-portfolio-item-wrap');
        const othersVideoButtons = document.querySelectorAll('.item10 .video-button');
        const latesVideoButtons = document.querySelector('.item10 .others-video-button01');
        const latesGameItem = document.querySelector('#others-game-2');
        const latesAppItem = document.querySelector('#others-app-1');
        const othersBtn = document.querySelectorAll('.otherstem');
        const latesGameButton = document.querySelector('.item9 .otherstem2');
        const latesAppButton = document.querySelector('.item11 .otherstem1');
        othersWrap.forEach(container => {
          container.classList.remove('selected');
        });
        othersBtn.forEach(btn => {
          btn.classList.remove('selected');
        });
        othersVideoButtons.forEach(btn => {
          btn.classList.remove('selected');
        });

        latesGameItem.classList.add('selected');
        latesAppItem.classList.add('selected');
        latesGameButton.classList.add('selected');
        latesAppButton.classList.add('selected');
        othersVideoWrap.classList.add('selected');
        latesVideoButtons.classList.add('selected');
        clearVideoPlayer();

        const firstButton = otherVideoButtons[0];
        const type = firstButton.getAttribute('data-type');
        const src = firstButton.getAttribute('data-src');
        loadVideo(type, src);
      }
    
      return { init };
    }

    const hicreo = setupPortfolioNavigation({
      sectionId: 'hicreo',
      portfolioSelector: '#hicreo .portfolio-wrap',
      pages: ['home', 'web', 'uiux', 'mlearning', 'template'],
    });
    
    const elearning = setupPortfolioNavigation({
      sectionId: 'elearning',
      portfolioSelector: '#elearning .portfolio-wrap',
      pages: ['home', 'demo', 'courses', 'image'],
    });
    
    const others = setupPortfolioNavigation({
      sectionId: 'others',
      portfolioSelector: '#others .portfolio-wrap',
      pages: ['home', 'print', 'social', 'game','app', 'video'],
    });

      const laptopImage = document.querySelector('.hicreo-website-laptop .hicreo-screen-capture');
      const mobileImage = document.querySelector('.hicreo-website-mobile .hicreo-screen-capture');
    
      const imageSources = {
        home: {
          laptop: 'images/section2-screenshot-hicreo-home-laptop.webp',
          mobile: 'images/section2-screenshot-hicreo-home-mobile.webp'
        },
        about: {
          laptop: 'images/section2-screenshot-hicreo-about-laptop.webp',
          mobile: 'images/section2-screenshot-hicreo-about-mobile.webp'
        },
        blogList: {
          laptop: 'images/section2-screenshot-hicreo-bloglist-laptop.webp',
          mobile: 'images/section2-screenshot-hicreo-bloglist-mobile.webp'
        },
        blogPage: {
          laptop: 'images/section2-screenshot-hicreo-blogpage-laptop.webp',
          mobile: 'images/section2-screenshot-hicreo-blogpage-mobile.webp'
        }
      };

      const webPageButton = document.querySelectorAll('.hicreo-portfolio-text-wrap .page-buttons .button');
      const webPageButtonHome = document.querySelector('.hicreo-portfolio-text-wrap .page-buttons .button.button-home');
      const webPageAboutUs = document.querySelector('.hicreo-portfolio-text-wrap .page-buttons .button.button-about-us');
      const webPageBlogList = document.querySelector('.hicreo-portfolio-text-wrap .page-buttons .button.button-blog-list');
      const webPageButtonBlogPage = document.querySelector('.hicreo-portfolio-text-wrap .page-buttons .button.button-blog-page');

      function removeActiveFromwebPageButtons() {
        webPageButton.forEach(btn => {
          btn.classList.remove('active');
        });
      }

      document.querySelector('.button-home').addEventListener('click', () => {
        laptopImage.src = imageSources.home.laptop;
        mobileImage.src = imageSources.home.mobile;
        removeActiveFromwebPageButtons();
        webPageButtonHome.classList.add('active');
      });
    
      document.querySelector('.button-about-us').addEventListener('click', () => {
        laptopImage.src = imageSources.about.laptop;
        mobileImage.src = imageSources.about.mobile;
        removeActiveFromwebPageButtons()
        webPageAboutUs.classList.add('active');
      });
    
      document.querySelector('.button-blog-list').addEventListener('click', () => {
        laptopImage.src = imageSources.blogList.laptop;
        mobileImage.src = imageSources.blogList.mobile;
        removeActiveFromwebPageButtons()
        webPageBlogList.classList.add('active');
      });
    
      document.querySelector('.button-blog-page').addEventListener('click', () => {
        laptopImage.src = imageSources.blogPage.laptop;
        mobileImage.src = imageSources.blogPage.mobile;
        removeActiveFromwebPageButtons()
        webPageButtonBlogPage.classList.add('active');
      });


      const lazyVideos = document.querySelectorAll("video.lazy-video");
  
      if ("IntersectionObserver" in window) {
        const videoObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const video = entry.target;
              const source = video.querySelector("source");
              source.src = source.dataset.src;
              video.load();
              observer.unobserve(video);
            }
          });
        });
  
        lazyVideos.forEach(video => {
          videoObserver.observe(video);
        });
      } else {
        // Fallback for browsers without IntersectionObserver
        lazyVideos.forEach(video => {
          const source = video.querySelector("source");
          source.src = source.dataset.src;
          video.load();
        });
      }

      const laptopFrame = document.querySelector('.live-mlearning-course-laptop .hicreo-screen-capture');
      const mobileFrame = document.querySelector('.live-mlearning-course-mobile .hicreo-screen-capture');
      
      const courseSources = {
        microlearning: {
          laptop: 'portfolio/mlearning/01/',
          mobile: 'portfolio/mlearning/01/'
        },
        vital: {
          laptop: 'portfolio/mlearning/02/',
          mobile: 'portfolio/mlearning/02/'
        },
        adaptive: {
          laptop: 'portfolio/mlearning/03/',
          mobile: 'portfolio/mlearning/03/'
        }
      };
      
      const mlearningButtons = document.querySelectorAll('.item3 .page-buttons .button');
      const mlearningButtonMicro = document.querySelector('.item3 .button-microlearning');
      const mlearningButtonVital = document.querySelector('.item3 .button-vital');
      const mlearningButtonAdaptive = document.querySelector('.item3 .button-adaptive');
      
      function removeActiveFromButtons() {
        mlearningButtons.forEach(btn => btn.classList.remove('active'));
      }
      
      mlearningButtonMicro.addEventListener('click', () => {
        laptopFrame.src = courseSources.microlearning.laptop;
        mobileFrame.src = courseSources.microlearning.mobile;
        removeActiveFromButtons();
        mlearningButtonMicro.classList.add('active');
      });
      
      mlearningButtonVital.addEventListener('click', () => {
        laptopFrame.src = courseSources.vital.laptop;
        mobileFrame.src = courseSources.vital.mobile;
        removeActiveFromButtons();
        mlearningButtonVital.classList.add('active');
      });
      
      mlearningButtonAdaptive.addEventListener('click', () => {
        laptopFrame.src = courseSources.adaptive.laptop;
        mobileFrame.src = courseSources.adaptive.mobile;
        removeActiveFromButtons();
        mlearningButtonAdaptive.classList.add('active');
      });
      
            
      const hiCreoGallery = document.getElementById('hicreoGallery');
      const hiCreoLightbox = document.getElementById('hicreoLightbox');
      const hiCreoLightboxImg = document.getElementById('hicreoLightboxImg');

      // Define how many images are in each folder
      const folderImageCounts = {
      1: 25,
      2: 25,
      3: 24,
      4: 25,
      5: 25,
      6: 12,
      7: 12,
      8: 50
      };

      // Loop through each folder and image number
      for (let folder = 1; folder <= 8; folder++) {
        const count = folderImageCounts[folder];
      
        for (let i = 1; i <= count; i++) {
          const thumbPath = `images/templates/${folder}/thumbnail/slide${i}.webp`;
          const fullPath = `images/templates/${folder}/slide${i}.webp`;
      
          const hicreoTemplateThumbnailimg = document.createElement('img');
          hicreoTemplateThumbnailimg.src = 'images/placeholder.webp'; // Optional placeholder
          hicreoTemplateThumbnailimg.setAttribute('data-src', thumbPath);
          hicreoTemplateThumbnailimg.dataset.full = fullPath;
          hicreoTemplateThumbnailimg.alt = `Template ${folder} Slide ${i}`;
          hicreoTemplateThumbnailimg.classList.add('thumb', 'lazyload');
      
          hicreoTemplateThumbnailimg.addEventListener('click', () => {
            hiCreoLightboxImg.src = fullPath;
            hiCreoLightbox.style.display = 'flex';
          });
      
          hiCreoGallery.appendChild(hicreoTemplateThumbnailimg);
        }
      }

      // Close the lightbox on click
      hiCreoLightbox.addEventListener('click', (e) => {
          if (e.target === hiCreoLightbox) {
            hiCreoLightbox.style.display = 'none';
          }
        });

      document.querySelector('.close-lightbox').addEventListener('click', () => {
      hiCreoLightbox.style.display = 'none';
      });

      const elearningHero = document.querySelector('#elearning .hero');
      const elearningHeroBg = elearningHero.querySelector('#elearning .Image-bg');

      elearningHero.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = elearningHero;
        const x = e.clientX / width - 0.5; // range: -0.5 to 0.5
        const y = e.clientY / height - 0.5;

        const moveX = x * 30; // adjust sensitivity
        const moveY = y * 30;

        elearningHeroBg.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
      });

      elearningHero.addEventListener('mouseleave', () => {
        elearningHeroBg.style.transform = 'translate(-50%, -50%)';
      });

      const elearningCourseDemoIFrameLightbox = document.getElementById('elearningLightboxCourse');
      const elearningCourseDemoIFrameFrame = document.getElementById('elearningFrame');
      const elearningCourseDemoIFrameCloseBtn = document.querySelector('#elearning #elearningCourseClose');

      // URL map for different demos
      const elearningCourseDemoIFrameUrls = {
        iianc: 'portfolio/elearning/iianc/story.html',
        unboxed: 'portfolio/elearning/unboxed/story.html',
        gci: 'portfolio/elearning/gci/story.html',
        NRCCRSM: 'portfolio/elearning/NRCCRSM/story_html5.html'
      };

      // Click listeners for thumbnails
      document.querySelectorAll('.elearningDemoThumbnail').forEach(elearningCourseDemoIFrameThumbnail => {
        elearningCourseDemoIFrameThumbnail.addEventListener('click', () => {
          const classList = elearningCourseDemoIFrameThumbnail.classList;
          let elearningCourseDemoIFrameKey = null;

          if (classList.contains('unboxed')) elearningCourseDemoIFrameKey = 'unboxed';
          else if (classList.contains('gci')) elearningCourseDemoIFrameKey = 'gci';
          else if (classList.contains('NRCCRSM')) elearningCourseDemoIFrameKey = 'NRCCRSM';
          else if (classList.contains('iianc')) elearningCourseDemoIFrameKey = 'iianc';

          if (elearningCourseDemoIFrameKey) {
            elearningCourseDemoIFrameFrame.src = elearningCourseDemoIFrameUrls[elearningCourseDemoIFrameKey];
            elearningCourseDemoIFrameLightbox.classList.add('show');
          }
          
          if (elearningCourseDemoIFrameKey === 'NRCCRSM') {
            elearningCourseDemoIFrameCloseBtn.style.color = 'black';
            elearningCourseDemoIFrameCloseBtn.style.top = '-5px'
          } else {
            elearningCourseDemoIFrameCloseBtn.style.color = 'white';
            elearningCourseDemoIFrameCloseBtn.style.top = '10px'
          }

        });

      });
      // Close lightbox
      elearningCourseDemoIFrameCloseBtn.addEventListener('click', () => {
        elearningCourseDemoIFrameFrame.src = ''; // Stop playback
        elearningCourseDemoIFrameLightbox.classList.remove('show');

      });

      const elearningDemotem3Btn = document.querySelector('#elearning .demontem3');
      const elearningDemotem2Btn = document.querySelector('#elearning .demontem2');
      const elearningDemotem1Btn = document.querySelector('#elearning .demontem1');
      const elearningDemotem3 = document.getElementById('demontem-3'); 
      const elearningDemotem2 = document.getElementById('demontem-2'); 
      const elearningDemotem1 = document.getElementById('demontem-1'); 

      elearningDemotem3Btn.addEventListener('click', () => {
        elearningDemotem3.classList.add("selected"); 
        elearningDemotem2.classList.remove("selected");
        elearningDemotem1.classList.remove("selected");
        elearningDemotem3Btn.classList.add("selected"); 
        elearningDemotem2Btn.classList.remove("selected"); 
        elearningDemotem1Btn.classList.remove("selected"); 
      });

      elearningDemotem2Btn.addEventListener('click', () => {
        elearningDemotem3.classList.remove("selected"); 
        elearningDemotem2.classList.add("selected");
        elearningDemotem1.classList.remove("selected");
        elearningDemotem3Btn.classList.remove("selected"); 
        elearningDemotem2Btn.classList.add("selected"); 
        elearningDemotem1Btn.classList.remove("selected"); 
      });

      elearningDemotem1Btn.addEventListener('click', () => {
        elearningDemotem3.classList.remove("selected"); 
        elearningDemotem2.classList.remove("selected");
        elearningDemotem1.classList.add("selected");
        elearningDemotem3Btn.classList.remove("selected"); 
        elearningDemotem2Btn.classList.remove("selected"); 
        elearningDemotem1Btn.classList.add("selected"); 
      });


      const courseBtns = [];
      const courseSections = [];
      
      // 1. Collect buttons and containers
      for (let courseNumber = 1; courseNumber <= 13; courseNumber++) {
        const elearningCouresBtn = document.querySelector(`#elearning .coursetem${courseNumber}`);
        const elearningSection = document.getElementById(`coursetem-${courseNumber}`);
      
        if (elearningCouresBtn && elearningSection) {
          courseBtns.push(elearningCouresBtn);
          courseSections.push(elearningSection);
      
          // 2. Add click event to each button
          elearningCouresBtn.addEventListener('click', () => {
            // Remove 'selected' from all buttons and sections
            courseBtns.forEach(b => b.classList.remove('selected'));
            courseSections.forEach(s => s.classList.remove('selected'));
      
            // Add 'selected' only to the clicked pair
            elearningCouresBtn.classList.add('selected');
            elearningSection.classList.add('selected');

            document.querySelectorAll('#elearning video').forEach(video => {
              video.pause();
            });
          });
        }
      }
      
      const thumbsWrap = document.querySelector('.course-thumbs-wrap');
      const leftArrow = document.querySelector('.course-arrow.left');
      const rightArrow = document.querySelector('.course-arrow.right');
      
      // Scroll by 1 thumbnail width (plus margin)
      const scrollAmount = window.innerWidth * 0.5;
      
      leftArrow.addEventListener('click', () => {
        thumbsWrap.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
      
      rightArrow.addEventListener('click', () => {
        thumbsWrap.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });

      const elearningThumbs = document.querySelectorAll('#elearningGallery .thumb');
      const elearningLightbox = document.getElementById('elearningLightboxImage');
      const elearningLightboxImg = document.getElementById('elearningLightboxImg');
      const elearningImageLightboxClose = document.getElementById('elearningImageLightboxClose');
      
      elearningThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
          const imgIndex = thumb.getAttribute('in');
          const fullImgPath = `images/elearning/image${imgIndex}.webp`;
      
          elearningLightboxImg.src = fullImgPath;
          elearningLightbox.classList.add('show');
          elearningLightbox.style.display = 'flex';
        });
      });
      
      elearningImageLightboxClose.addEventListener('click', () => {
        elearningLightbox.classList.remove('show');
        elearningLightbox.style.display = 'none';
        elearningLightboxImg.src = ''; // optional: clear image
      });


      const printThumbs = document.querySelectorAll('#printGallery .thumb');
      const printLightbox = document.getElementById('printLightboxImage');
      const printLightboxImg = document.getElementById('printLightboxImg');
      const printImageLightboxClose = document.getElementById('printImageLightboxClose');
      
      printThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
          const imgIndex = thumb.getAttribute('in');
          const fullImgPath = `images/print/image${imgIndex}.webp`;
      
          printLightboxImg.src = fullImgPath;
          printLightbox.classList.add('show');
          printLightbox.style.display = 'flex';
        });
      });
      
      printImageLightboxClose.addEventListener('click', () => {
        printLightbox.classList.remove('show');
        printLightbox.style.display = 'none';
        printLightboxImg.src = ''; // optional: clear image
      });

      
      const socialGallery = document.getElementById('socialGallery');
      const socialLightbox = document.getElementById('socialLightboxImage');
      const socialLightboxImg = document.getElementById('socialLightboxImg');
      const socialLightboxClose = document.getElementById('socialImageLightboxClose');
    
      const totalSocialImages = 54;
    
      // Generate thumbnails and append to the gallery
      for (let i = 1; i <= totalSocialImages; i++) {
        const socialThumbPath = `images/social/thumbnail/image${i}.webp`;
        const socialFullPath = `images/social/image${i}.webp`;
    
        const socialThumbImg = document.createElement('img');
        socialThumbImg.src = socialThumbPath;
        socialThumbImg.alt = `Social Template ${i}`;
        socialThumbImg.classList.add('thumb');
        socialThumbImg.dataset.full = socialFullPath;
    
        // Add click event to open lightbox
        socialThumbImg.addEventListener('click', () => {
          socialLightboxImg.src = socialFullPath;
          socialLightbox.style.display = 'flex';
        });
    
        socialGallery.appendChild(socialThumbImg);
      }
    
      // Close the lightbox on close button or outside click
      socialLightbox.addEventListener('click', (e) => {
        if (
          e.target === socialLightbox || 
          e.target === socialLightboxClose
        ) {
          socialLightbox.style.display = 'none';
        }
      });


      const othersGametem1Btn = document.querySelector('#others .item9 .otherstem1');
      const othersGametem2Btn = document.querySelector('#others .item9 .otherstem2');
      const othersGametem1 = document.querySelector('#others #others-game-1'); 
      const othersGametem2 = document.querySelector('#others #others-game-2'); 

      othersGametem1Btn.addEventListener('click', () => {
        othersGametem1Btn.classList.add("selected"); 
        othersGametem2Btn.classList.remove("selected");
        othersGametem1.classList.add("selected"); 
        othersGametem2.classList.remove("selected");
      });
      othersGametem2Btn.addEventListener('click', () => {
        othersGametem2Btn.classList.add("selected"); 
        othersGametem1Btn.classList.remove("selected");
        othersGametem2.classList.add("selected"); 
        othersGametem1.classList.remove("selected");
      });

      const othersApptem1Btn = document.querySelector('#others .item11 .otherstem1');
      const othersApptem2Btn = document.querySelector('#others .item11 .otherstem2');
      const othersApptem3Btn = document.querySelector('#others .item11 .otherstem3');
      const othersApptem4Btn = document.querySelector('#others .item11 .otherstem4');
      const othersApptem1 = document.querySelector('#others #others-app-1'); 
      const othersApptem2 = document.querySelector('#others #others-app-2'); 
      const othersApptem3 = document.querySelector('#others #others-app-3'); 
      const othersApptem4 = document.querySelector('#others #others-app-4'); 

      othersApptem1Btn.addEventListener('click', () => {
        othersApptem1Btn.classList.add("selected"); 
        othersApptem2Btn.classList.remove("selected");
        othersApptem3Btn.classList.remove("selected");
        othersApptem4Btn.classList.remove("selected");
        othersApptem1.classList.add("selected"); 
        othersApptem2.classList.remove("selected");
        othersApptem3.classList.remove("selected");
        othersApptem4.classList.remove("selected");
      });
      othersApptem2Btn.addEventListener('click', () => {
        othersApptem2Btn.classList.add("selected"); 
        othersApptem1Btn.classList.remove("selected");
        othersApptem3Btn.classList.remove("selected");
        othersApptem4Btn.classList.remove("selected");
        othersApptem2.classList.add("selected"); 
        othersApptem1.classList.remove("selected");
        othersApptem3.classList.remove("selected");
        othersApptem4.classList.remove("selected");
      });
      othersApptem3Btn.addEventListener('click', () => {
        othersApptem3Btn.classList.add("selected"); 
        othersApptem1Btn.classList.remove("selected");
        othersApptem2Btn.classList.remove("selected");
        othersApptem4Btn.classList.remove("selected");
        othersApptem3.classList.add("selected"); 
        othersApptem1.classList.remove("selected");
        othersApptem2.classList.remove("selected");
        othersApptem4.classList.remove("selected");
      });
      othersApptem4Btn.addEventListener('click', () => {
        othersApptem4Btn.classList.add("selected"); 
        othersApptem1Btn.classList.remove("selected");
        othersApptem3Btn.classList.remove("selected");
        othersApptem2Btn.classList.remove("selected");
        othersApptem4.classList.add("selected"); 
        othersApptem1.classList.remove("selected");
        othersApptem3.classList.remove("selected");
        othersApptem2.classList.remove("selected");
      });

      const otherVideoWrap = document.querySelector('.item10 .others-video-wrap');
      const otherVideoButtons = document.querySelectorAll('.video-button');
      const otherReleasedVideos = document.querySelector('.other-released-videos');
      function clearVideoPlayer() {
        otherReleasedVideos.classList.remove('mp4');
        otherReleasedVideos.classList.remove('mp4-short');
        otherReleasedVideos.classList.remove('youtube');
        while (otherVideoWrap.firstChild) {
          otherVideoWrap.removeChild(otherVideoWrap.firstChild);
        }
      }
    
      function loadVideo(type, src) {
        clearVideoPlayer();
    
        if (type === 'mp4') {
          const video = document.createElement('video');
          video.setAttribute('controls', '');
          video.setAttribute('width', '100%');
    
          const source = document.createElement('source');
          source.setAttribute('src', src);
          source.setAttribute('type', 'video/mp4');
    
          video.appendChild(source);
          otherVideoWrap.appendChild(video);
          otherReleasedVideos.classList.add('mp4');

        } else if (type === 'mp4-short') {
          const video = document.createElement('video');
          video.setAttribute('controls', '');
    
          const source = document.createElement('source');
          source.setAttribute('src', src);
          source.setAttribute('type', 'video/mp4');
    
          video.appendChild(source);
          otherVideoWrap.appendChild(video);  
          otherReleasedVideos.classList.add('mp4-short');
                
        }else if (type === 'youtube') {
          const iframe = document.createElement('iframe');
          iframe.setAttribute('width', '100%');
          iframe.setAttribute('height', '450');
          iframe.setAttribute('src', src);
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allowfullscreen', '');
          iframe.setAttribute('allow', 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
          iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
          otherVideoWrap.appendChild(iframe);
          otherReleasedVideos.classList.add('youtube');
          
        }
      }
    
      otherVideoButtons.forEach(button => {
        button.addEventListener('click', () => {
          const type = button.getAttribute('data-type');
          const src = button.getAttribute('data-src');
          // Remove 'selected' class from all buttons
          otherVideoButtons.forEach(btn => btn.classList.remove('selected'));
          // Add 'selected' to the clicked button
          button.classList.add('selected');
          loadVideo(type, src);
        });
      });
    
      const navbarNav = document.getElementById('navbarNav');
      const navLinks = document.querySelectorAll('.nav-link');
    
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          // Collapse menu if it's currently shown
          if (navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
          }
        });
      });
});
