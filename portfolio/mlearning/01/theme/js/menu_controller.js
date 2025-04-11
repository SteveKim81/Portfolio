$(window).on('load', () => {
  const defaultSetting = {
    showDelay: 0,
    hideDelay: 0,
    clickEffect: false
  }

  const objectDeepClone = (json) => JSON.parse(JSON.stringify(json))

  const InitMenuClickEvent = (param = {}) => {
    $(document)
      .off('click touchstart', '#treeview li a')
      .on('click touchstart', '#treeview li a', (event) => {
        const _event = event

        _event.stopPropagation()
        _event.preventDefault()

        const _$clickedATag = $(_event.currentTarget)
        const _$menuListTag = _$clickedATag.parent()

        ClickMenuItem({ liTag: _$menuListTag }) //jw20190215 It came from main.js

        if (_$menuListTag.hasClass('group')) {
          const _$childUlTag = _$menuListTag.children('ul')

          if (_$childUlTag.length > 0) {
            if (
              _$childUlTag.css('display') === 'none' &&
              !_$menuListTag.hasClass('hideProceedingPage')
            ) {
              //Harvey July 22 2019/2717
              UpdateClickEffect({ lsId: _$menuListTag.attr('id'), event: _event })

              OpenSelectedFrame({ lsId: _$menuListTag.attr('id') }).then(() => {
                UpdateFrameIndicator(param)
              })
            } else {
              UpdateClickEffect({ lsId: _$menuListTag.attr('id'), event: _event })

              CloseSelectedFrame({ lsId: _$menuListTag.attr('id') }).then(() => {
                UpdateFrameIndicator(param)
              })
            }
          }
        } else {
          UpdateClickEffect({ lsId: _$menuListTag.attr('id'), event: _event })
        }
      })
  }

  const InitFrameIndicator = (param = {}) => {
    const _location =
      param.location !== undefined ? param.location : menuNaviController.location

    MenuController.root
      .find('li')
      .toArray()
      .forEach((liTag) => {
        if ($(liTag).hasClass('quiz') && _location === '0') {
          if (
            $(liTag).children('a.title').children('span.group-indicator').length === 0
          ) {
            $(liTag).children('a.title').append('<span class="group-indicator">▲</span>')
          }
        } else if ($(liTag).hasClass('group')) {
          if (
            $(liTag).children('a.title').children('span.group-indicator').length === 0
          ) {
            $(liTag).children('a.title').append('<span class="group-indicator">▲</span>')
          }
        }
      })
  }

  const UpdateFrameIndicator = (param = {}) => {
    MenuController.root
      .find('li.quiz, li.group')
      .toArray()
      .forEach((liTag) => {
        if ($(liTag).children('ul').length === 0) {
          $(liTag).children('a.title').find('.group-indicator').hide()
        } else if ($(liTag).children('ul').length > 0) {
          $(liTag).hasClass('empty')
            ? $(liTag).children('a.title').find('.group-indicator').hide()
            : $(liTag).children('a.title').find('.group-indicator').show()

          if ($(liTag).children('ul').css('display') === 'none') {
            $(liTag)
              .children('a.title')
              .find('.group-indicator')
              .removeClass('group-indicator-minus')
              .html('▲')
          } else {
            $(liTag)
              .children('a.title')
              .find('.group-indicator')
              .addClass('group-indicator-minus')
              .html('▼')
          }
        }
      })
  }

  const UpdateClickEffect = (param = {}) => {
    if (MenuController.setting.clickEffect === true) {
      const { lsId: _lsId } = param

      const _currentMenu = MenuController.root.find('#' + _lsId)

      if (_currentMenu.length === 0) return

      $('.ink').remove()

      const _clickedATag = _currentMenu.children('a.title')

      if (_clickedATag.children('.ink').length === 0) {
        _clickedATag.prepend('<span class="ink"></span>')
      }

      const _ink = _clickedATag.find('.ink')

      _ink.addClass('animate-ink').css({
        left: 0,
        top: 0,
        width: _currentMenu.width(),
        height: _currentMenu.height()
      })
    }
  }

  const OpenSelectedFrame = (param = {}) =>
    new Promise((resolve, reject) => {
      const { lsId: _lsId } = param

      let _currentMenu = MenuController.root.find('#' + _lsId)

      if (_currentMenu.length === 0) {
        // kevin Apr.17.2019 / 2130. Authoring/Preview, Publish/Sidebar
        // return
        _currentMenu = MenuController.root.find(
          '#' + menuNaviController.pages[menuNaviController.currentIndex].lsId
        )
        // ./ kevin Apr.17.2019 / 2130. Authoring/Preview, Publish/Sidebar
      }

      const _haveToOpenFrameTags = GetParentFrames(_currentMenu)

      if (_currentMenu.hasClass('quiz')) {
        if (_currentMenu.children('ul').length !== 0) {
          _haveToOpenFrameTags.push(_currentMenu.attr('id'))
        }
      } else if (_currentMenu.hasClass('group')) {
        if (_currentMenu.children('ul').length !== 0) {
          _haveToOpenFrameTags.push(_currentMenu.attr('id'))
        }
      }

      MenuController.root
        .find('li.quiz, li.group')
        .toArray()
        .forEach((liTag) => {
          if (_haveToOpenFrameTags.find((id) => liTag.id === id) !== undefined) {
            if ($(liTag).children('ul').css('display') === 'none') {
              $(liTag)
                .children('ul')
                /**
                 * https://github.com/hiCreo/editor/issues/1629
                 *
                 * Do not use animation because it makes page transition somehow wrong.
                 */
                /* .slideDown(MenuController.setting.showDelay) */
                .show()
            }
          } else {
            if ($(liTag).children('ul').css('display') !== 'none') {
              $(liTag)
                .children('ul')
                /**
                 * https://github.com/hiCreo/editor/issues/1629
                 *
                 * Do not use animation because it makes page transition somehow wrong.
                 */
                /* .slideUp(MenuController.setting.hideDelay) */
                .hide()
            }
          }
        })

      resolve()
    })

  const CloseSelectedFrame = (param) =>
    new Promise((resolve, reject) => {
      const { lsId: _lsId, isInit: _isInit } = param

      let _$currentMenu = MenuController.root.find('#' + _lsId)

      if (_$currentMenu.length === 0) return

      _$currentMenu
        .children('ul')
        .removeClass('slidingDown')
        .addClass('slidingUp')
        .slideUp(_isInit === true ? 0 : MenuController.setting.showDelay, function () {
          $(this).removeClass('slidingUp')

          resolve()
        })
    })

  const GetParentFrames = (currentTag) => {
    const _parentUlTag = currentTag.closest('ul')

    if (
      _parentUlTag.length > 0 &&
      _parentUlTag.closest('#' + MenuController.root.attr('id')).length > 0
    ) {
      return GetParentFrames(_parentUlTag.closest('li')).concat(
        _parentUlTag.closest('li').attr('id')
      )
    }

    return []
  }

  window.CreateItem = (pageInfo) => {
    if (pageInfo.groupType === '1' && pageInfo.pageType === null) {
      // kevin Mar.19.2019 / group
      return `
        <li class="group" id="${pageInfo.lsId}">
          <a class="title">
            <div class="title_block">${pageInfo.name}</div>
          </a>
          <ul></ul>
        </li>`
    } else if (pageInfo.groupType === '1' && pageInfo.pageType === '200') {
      // kevin Mar.19.2019 / quiz creator
      return `
        <li class="quiz" id="${pageInfo.lsId}">
          <a class="title">
            <div class="title_block">${pageInfo.name}</div>
          </a>
          <ul></ul>
        </li>`
    } else if (pageInfo.groupType === '0') {
      // kevin Mar.19.2019 / page
      return `
        <li class="page" id="${pageInfo.lsId}">
          <a class="title">
            <div class="title_block">${pageInfo.name}</div>
          </a>
        </li>`
    } else {
      return ''
    }
  }

  window.MenuController = {
    name: 'MenuController',
    setting: objectDeepClone(defaultSetting),
    root: null,
    init: (param = {}) => {
      MenuController.root = param.root !== undefined ? param.root : $('#treeview')

      InitMenuClickEvent(param)
      InitFrameIndicator(param)
      OpenSelectedFrame(param).then(() => {
        UpdateFrameIndicator(param)
      })
    },
    openSelectedFrame: (param = {}) => {
      // kevin Apr.04.2019 / only one frame can be opened
      return OpenSelectedFrame(param)
    },
    updateFrameIndicator: (param = {}) => {
      return UpdateFrameIndicator(param)
    },
    updateClickEffect: (param = {}) => {
      return UpdateClickEffect(param)
    },
    updateThumbnailUiSize: () => {},
    updateThumbnail: () => {},
    getEditBoxStyle: () => {
      return {
        display: 'inline-block',
        top: '1px',
        right: '5px'
      }
    },
    activateNextPage: () => {
      const _nextNaviData =
        menuNaviController.pages.length > menuNaviController.currentIndex + 1
          ? menuNaviController.pages[menuNaviController.currentIndex + 1]
          : null

      if (_nextNaviData !== null) {
        $('li#' + _nextNaviData.lsId)
          .addClass('activated')
          .parents('.group')
          .toArray()
          .forEach((_groupTag) => {
            _groupTag.classList.remove('hideProceedingPage')
          })
      }
    }
  }
})
