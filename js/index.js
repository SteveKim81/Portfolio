window.addEventListener('load', function () {

    const line1 = document.querySelector('.line-1');
    if (line1) {
      line1.style.opacity = 1;
    }
    
    if (window.scrollY == 0) {
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
    }
    if (window.scrollY == 0) {
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
      }else{
        const line2 = document.querySelector('.line-2');
        if (line2) {
          line2.style.opacity = 1;
        }
      }

      if (window.scrollY == 0) {

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
      }else{
        const line3 = document.querySelector('.line-3');
        if (line3) {
          line3.style.opacity = 1;
        }
      }

      if (window.scrollY == 0) {
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
      }else{
        const lineName = document.querySelector('.line-name');
          if (lineName) {
            lineName.style.opacity = 1;
          }
      }


      if (window.scrollY == 0) {
        setTimeout(function () {
          const iconDivider = document.querySelector('.icon-divider');
          if (iconDivider) {
            iconDivider.style.opacity = 1;
          }
        }, 8000);

        setTimeout(function () {

          window.scrollBy({
            top: 700,
            behavior: 'smooth'
          });
        }, 8800);
      }else{
        const iconDivider = document.querySelector('.icon-divider');
          if (iconDivider) {
            iconDivider.style.opacity = 1;
          }
      }

      window.addEventListener('scroll', function () {

        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
          navbar.classList.add('visible');
        } else {
          navbar.classList.remove('visible');
        }

        if (window.scrollY > 200) {
          const intro = document.querySelector('#intro');
          if (intro) {
            intro.style.display = "block";
          }
        }

        console.log(window.scrollY);

      });

      const projectMainMenu = document.querySelector('.project-main-menu');
      const portfolioHiCreo = document.querySelector('.project-content-wrap.hicreo');
      const portfolioElearning = document.querySelector('.project-content-wrap.elearning');
      const portfolioPrint = document.querySelector('.project-content-wrap.print-media');
      const portfolioGame = document.querySelector('.project-content-wrap.mobile-game');
      const closeButtons = document.querySelectorAll('.project-content-wrap .close-button');
      const portfolios = document.querySelectorAll('.project-content-wrap');
      const projectItemBtn = document.querySelectorAll('.project-sub-menu .project-item');
      const projectSubMenu = document.querySelector('.project-sub-menu');
      const projectHiCreoBtn = document.querySelector('.project-sub-menu .project-item.hicreo');
      const projectElearningBtn = document.querySelector('.project-sub-menu .project-item.elearning');
      const projectPrintBtn = document.querySelector('.project-sub-menu .project-item.print-media');
      const projectGameBtn = document.querySelector('.project-sub-menu .project-item.mobile-game');

      function hideAllPortfolios() {
        portfolios.forEach(p => {
          p.style.display = 'none';
        });
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
      
        else if (e.target.closest('.project-item.print-media')) {
          hideAllPortfolios();
          removeActiveFromProjectButtons();
          portfolioPrint.style.display = 'block';
          projectMainMenu.style.display = 'none';
          projectSubMenu.style.display = 'flex';
          projectPrintBtn.classList.add('active');
        }
      
        else if (e.target.closest('.project-item.mobile-game')) {
          hideAllPortfolios();
          removeActiveFromProjectButtons();
          portfolioGame.style.display = 'block';
          projectMainMenu.style.display = 'none';
          projectSubMenu.style.display = 'flex';
          projectGameBtn.classList.add('active');
        }
      });

      closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.project-content-wrap').forEach(panel => {
            panel.style.display = 'none';
          });
          projectMainMenu.style.display = 'block';
        });

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






    });