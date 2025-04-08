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

      const projectHiCreo = document.querySelector('.project-item.hicreo');
      const projectElearning = document.querySelector('.project-item.elearning');
      const projectPrint = document.querySelector('.project-item.print-media');
      const projectGame = document.querySelector('.project-item.mobile-game');
      const projectMainMenu = document.querySelector('.project-main-menu');
      const portfolioHiCreo = document.querySelector('.project-content-wrap.hiCreo');
      const portfolioElearning = document.querySelector('.project-content-wrap.elearning');
      const portfolioPrint = document.querySelector('.project-content-wrap.print-media');
      const portfolioGame = document.querySelector('.project-content-wrap.mobile-game');

      projectHiCreo.addEventListener('click', function () {
        projectMainMenu.style.display = 'none'
        portfolioHiCreo.style.display = 'block'
      });

      projectElearning.addEventListener('click', function () {
        projectMainMenu.style.display = 'none'
        portfolioElearning.style.display = 'block'
      });

      projectPrint.addEventListener('click', function () {
        projectMainMenu.style.display = 'none'
        portfolioPrint.style.display = 'block'
      });

      projectGame.addEventListener('click', function () {
        projectMainMenu.style.display = 'none'
        portfolioGame.style.display = 'block'
      });

    });