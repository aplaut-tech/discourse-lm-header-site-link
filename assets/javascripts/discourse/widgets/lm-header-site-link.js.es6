import { createWidget } from 'discourse/widgets/widget';
import { iconNode } from 'discourse-common/lib/icon-library';
import { h } from 'virtual-dom';


export default createWidget('lm-header-site-link', {
  tagName: 'a.lm-header-site-link',

  buildkey () {
    return 'lm-header-site-link';
  },

  buildAttributes () {
    return {
      href: 'https://leroymerlin.ru'
    };
  },

  html () {
    return [
      h('span.logo'),
      h('span.text', 'Перейти к '),
      h('span.text.accent', 'leroymerlin.ru'),
      iconNode('angle-right')
    ];
  }
});
