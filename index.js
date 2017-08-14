var logger = require('nanologger')

module.exports = reload

function reload (url) {
  url = url || 'sse'
  return function (state, emitter) {
    var log = logger('sse')
    var source = new window.EventSource(url)

    source.addEventListener('open', function () {
      log.info('connected')
    })

    source.addEventListener('message', function (event) {
      try {
        var ev = JSON.parse(event.data)
      } catch (e) {
        return log.error('error parsing event', e)
      }
      if (ev.type === 'css') loadCss()
      else if (ev.type === 'js') loadJs()
      else log.warn('unknown', event)
    }, false)

    source.addEventListener('error', function (event) {
      if (event.target.readyState === window.EventSource.CLOSED) {
        source.close()
        log.info('closed')
      } else if (event.target.readyState === window.EventSource.CONNECTING) {
        log.warn('reconnecting')
      } else {
        log.error('connection closed: unknown error')
      }
    }, false)

    function loadJs () {
      log.info('javascript', 'reloading')
      window.location.reload()
    }

    function loadCss (content) {
      var node = document.createElement('style')
      node.setAttribute('type', 'text/css')
      node.textContent = content

      log.info('stylesheet', node)

      var linkNode = document.querySelector('link')
      if (linkNode) linkNode.parentNode.removeChild(linkNode)

      var prevNode = document.querySelector('style')
      if (prevNode) prevNode.parentNode.replaceChild(node, prevNode)
      else document.head.appendChild(node)
    }
  }
}
