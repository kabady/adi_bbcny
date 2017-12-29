import '../../js-lib/build/normalize-5.0.0.min.css';
import '../../style/style.scss';
import './index.scss';
import { ajaxSend } from '../ajax';
import { DomAPI } from '../../lib/DomAPI-0.0.4';
let HTML: string = require('./index.html');

let DOMAPI = DomAPI.CreateByHtmlString(HTML);
new DomAPI('body').append(DOMAPI.getElemList());


DOMAPI.find('.part-2 video').setAttr('poster', DOMAPI.find('.part-2 > img').getAttr('src'))
DOMAPI.find('.action-rule-click').on('click', ev => new DomAPI('.rule-float').show())
DOMAPI.find('.icon-close').on('click', ev => new DomAPI('.rule-float').hide())

DOMAPI.find('.action-ajax-click').on('click', ev => {
  DOMAPI.find('.action-ajax-click').addClass('pointer-events-none')
  ajaxSend( () => DOMAPI.find('.action-ajax-click').removeClass('pointer-events-none'))
})