window.addEventListener('load', function () {

    const line1 = document.querySelector('.line-1');
    if (line1) {
      line1.style.opacity = 1;
    }
    

      var line1Txt = document.querySelector('.line-1 span');
      line1Txt.innerHTML = line1Txt.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false}).add({
        targets: '.line-1 span',
        translateY: [100,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 300 + 30 * i
      })


      setTimeout(function () {
        const line2 = document.querySelector('.line-2');
        if (line2) {
          line2.style.opacity = 1;
        }

        var line2Txt = document.querySelector('#home .line-2 .letters');
        line2Txt.innerHTML = line2Txt.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            targets: '.line-2 .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70*i
          });
        }, 1800);




        setTimeout(function () {
        const line3 = document.querySelector('.line-3');
        if (line3) {
          line3.style.opacity = 1;
        }

        var line3Txt = document.querySelector('#home .line-3 .letters');
        line3Txt.innerHTML = line3Txt.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
          .add({
            targets: '.line-3 .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70*i
          });
        }, 3500);


        setTimeout(function () {
          const lineName = document.querySelector('.line-name');
          if (lineName) {
            lineName.style.opacity = 1;
          }

          var lineNameTxt = document.querySelector('#home .line-name .letters');
          lineNameTxt.innerHTML = lineNameTxt.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

          anime.timeline({loop: false})
          .add({
            targets: '.line-name .letter',
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el, i) => 45 * (i+1)
          })
        }, 6000);

        setTimeout(function () {
          const iconDivider = document.querySelector('.icon-divider');
          if (iconDivider) {
            iconDivider.style.opacity = 1;
          }

          const intro = document.querySelector('#intro');
          if (intro) {
            intro.style.display = "block";
          }

        }, 8000);

        setTimeout(function () {

          window.scrollBy({
            top: 700,
            behavior: 'smooth'
          });
        }, 8800);


        function isInViewport(el, offset = 0.8) {
          const rect = el.getBoundingClientRect();
          return rect.top < window.innerHeight * offset;
        }
        
        window.addEventListener('scroll', () => {
          const navbar = document.querySelector('.navbar');
          navbar.classList.toggle('visible', window.scrollY > 0);
        
          const sections = ['projects', 'testimonials', 'resume', 'contact'];
          sections.forEach(id => {
            const section = document.getElementById(id);
            if (section && isInViewport(section)) {
              section.style.display = 'block';
            }
          });
        });

      const projectMainMenu = document.querySelector('.project-main-menu');
      const portfolioHiCreo = document.querySelector('.project-content-wrap.hicreo');
      const portfolioElearning = document.querySelector('.project-content-wrap.elearning');
      const portfolioOthers = document.querySelector('.project-content-wrap.others');
      const closeButtons = document.querySelectorAll('.project-content-wrap .close-button');
      const hiCreoClose = document.querySelector('#projects .project-content-wrap.hicreo .button-close');
      const elearningClose = document.querySelector('#projects .project-content-wrap.elearning .button-close');
      const othersClose = document.querySelector('#projects .project-content-wrap.others .button-close');
      const portfolios = document.querySelectorAll('.project-content-wrap');
      const projectItemBtn = document.querySelectorAll('.project-sub-menu .project-item');
      const projectSubMenu = document.querySelector('.project-sub-menu');
      const projectHiCreoBtn = document.querySelector('.project-sub-menu .project-item.hicreo');
      const projectElearningBtn = document.querySelector('.project-sub-menu .project-item.elearning');
      const projectOthersBtn = document.querySelector('.project-sub-menu .project-item.others');

      function hideAllPortfolios() {
        portfolios.forEach(p => {
          p.style.display = 'none';
        });
      }

      function hideProjectsSubMenu() {
        projectSubMenu.style.display = 'none';
      }

      function removeActiveFromProjectButtons() {
        projectItemBtn.forEach(btn => {
          btn.classList.remove('active');
        });
      }

      document.body.addEventListener('click', function (e) {
        if (e.target.closest('.project-item.hicreo')) {
          hideAllPortfolios();
          removeActiveFromProjectButtons();
          portfolioHiCreo.style.display = 'block';
          projectMainMenu.style.display = 'none';
          projectSubMenu.style.display = 'flex';
          projectHiCreoBtn.classList.add('active');
        }
      
        else if (e.target.closest('.project-item.elearning')) {
          hideAllPortfolios();
          removeActiveFromProjectButtons();
          portfolioElearning.style.display = 'block';
          projectMainMenu.style.display = 'none';
          projectSubMenu.style.display = 'flex';
          projectElearningBtn.classList.add('active');
        }
      
        else if (e.target.closest('.project-item.others')) {
          hideAllPortfolios();
          removeActiveFromProjectButtons();
          portfolioOthers.style.display = 'block';
          projectMainMenu.style.display = 'none';
          projectSubMenu.style.display = 'flex';
          projectOthersBtn.classList.add('active');
        }
      });

      closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.project-content-wrap').forEach(panel => {
            panel.style.display = 'none';
          });
          projectMainMenu.style.display = 'block';
          hideProjectsSubMenu()
        });
      });

      
      if (hiCreoClose) {
        hiCreoClose.addEventListener('click', function (e) {
          document.querySelector('.project-content-wrap.hicreo').style.display = 'none';
          projectMainMenu.style.display = 'block';
          hideProjectsSubMenu()

          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
          
        });
      } else {
        console.warn('hiCreoClose button not found');
      }
      
      
      if (elearningClose) {
        elearningClose.addEventListener('click', function (e) {
          document.querySelector('.project-content-wrap.elearning').style.display = 'none';
          projectMainMenu.style.display = 'block';
          hideProjectsSubMenu()

          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
          
        });
      } else {
        console.warn('hiCreoClose button not found');
      }

      if (othersClose) {
        othersClose.addEventListener('click', function (e) {
          document.querySelector('.project-content-wrap.others').style.display = 'none';
          projectMainMenu.style.display = 'block';
          hideProjectsSubMenu()

          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
          
        });
      } else {
        console.warn('hiCreoClose button not found');
      }

      

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

      const webPageButton = document.querySelectorAll('.hicreo-website-wrap .page-buttons .button');
      const webPageButtonHome = document.querySelector('.hicreo-website-wrap .page-buttons .button.button-home');
      const webPageAboutUs = document.querySelector('.hicreo-website-wrap .page-buttons .button.button-about-us');
      const webPageBlogList = document.querySelector('.hicreo-website-wrap .page-buttons .button.button-blog-list');
      const webPageButtonBlogPage = document.querySelector('.hicreo-website-wrap .page-buttons .button.button-blog-page');

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

        const elearningCourseDemoIFrameLightbox = document.getElementById('elearningLightboxCourse');
        const elearningCourseDemoIFrameFrame = document.getElementById('elearningFrame');
        const elearningCourseDemoIFrameCloseBtn = document.querySelector('.lightbox-close');

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

        const elearnignAdamVideo = document.getElementById('elearningAdam');
        const timeLinks = document.querySelectorAll('[data-time]');
      
        timeLinks.forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            const time = parseFloat(this.getAttribute('data-time'));
            elearnignAdamVideo.currentTime = time;
            elearnignAdamVideo.play();
          });
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

    });

    document.addEventListener("DOMContentLoaded", function () {
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
    });