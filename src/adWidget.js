const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="//static.dable.io/static/b/infinite-swipe/dist/swipe.min.css"/>
  <link rel="stylesheet" href="//static.dable.io/dist/widget.v2.min.css?"/>
  <style type="text/css">
      .widget .title {
        font-size: 16px;
      }
      .widget th,
      .widget td {
        text-align: left;
      }
      a {
        color: #6c6c6c;
      }
      .widget .item-link {
        font-size: 12px;
      }
      .widget .title {
        border-color: #c2c2c2;
      }
      .widget .price {
        color: #000000;
      }
      .widget .price {
        font-size: 12px;
      }
      .widget .saleprice {
        color: #777777;
      }
      .widget .saleprice {
        font-size: 12px;
      }
      .widget .published_time {
        color: #000000;
      }
      .widget .published_time {
        font-size: 12px;
      }
      .widget .author {
        color: #000000;
      }
      .widget .author {
        font-size: 12px;
      }
    </style>
  <style>
    p {
      color: blue;
    }
  </style>
  <p>AD WIDGET의 p 태그 색상은 blue !!!</p>
`;

const widgetScript = document.createElement('script');
widgetScript.textContent = `
  var selector = "#web-component"; //write css selector
  var widget_id = "GlYqNRnl"; // put widget id [AD]:GlYqNRnl [RECO]:1oVgzJj7
  var input_position = ['before','after','last','replace'][2]; //choose 0,1,2,3

  var dable_el = document.createElement('div');
  dable_el.setAttribute('id', 'dablewidget_' + widget_id);
  dable_el.setAttribute('data-widget_id', widget_id);

  var dable_target = document.querySelector(selector);
  if (!dable_target) console.error("nothing found with this selector. check again : ", selector);

  var dable_execute = {
    'last' : function () {
      dable_target.appendChild(dable_el);
    },
    'before' : function () {
      dable_target.parentNode.insertBefore(dable_el, dable_target);
    },
    'after' : function () {
      dable_target.parentNode.insertBefore(dable_el, dable_target.nextSibling);
    },
    'replace' : function () {
      dable_target.parentNode.insertBefore(dable_el, dable_target.nextSibling); 
      dable_target.parentNode.removeChild(dable_target);
    },
  };
  dable_execute[input_position]();

  (function(d,a,b,l,e,_) {
    // d: window
    // a: document
    // b: "dable"
    // l: "script"

    if (d[b]&&Array.isArray(d[b].q)) {
      console.error("site contains old widget script. change it to new one or add log collection script at the top of the site.");
    } else if (d[b]&&!Array.isArray(d[b].q)) {
      return;
    }

    d[b] = function () {
      (d[b].q = d[b].q || []).push(arguments);
    };
    
    e = a.createElement(l);
    e.async = 1;
    e.charset = 'utf-8';
    e.src = '//static.dable.io/dist/plugin.min.js'; 
    
    _ = a.getElementsByTagName(l)[0];
    _.parentNode.insertBefore(e, _);
    
    return console.info('Widget added. check the dable plugin to find the widget')
  })(window, document, 'dable', 'script');
  
  dable('setService', 'dable.io');
  dable('renderWidget', 'dablewidget_'+widget_id,null, {"category1":"Featured", "ignore_items":true});
  
  TEST_API_SERVER_DOMAIN = 'localhost:4001';
`;

class ADWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const renderWidget = async () => {
      // const response = await fetch('http://localhost:4001/widgets/id/GlYqNRnl/users/79350651.1679053218674?from=http%3A%2F%2Flocalhost%3A1234%2F&url=http%3A%2F%2Flocalhost%3A1234%2F&ref=http%3A%2F%2Flocalhost%3A1234%2F&cid=79350651.1679053218674&uid=79350651.1679053218674&site=dable.io&gdpr=0&service_id=0&service_type=news&country=KR&client_id=0&inarticle_widgets=%5B%2226XgB6lN%22%2C%2237JyWBoN%22%2C%22xXA8xalG%22%2C%226Xg1m67N%22%5D&randomStr=b4b76afc-7d61-4885-8a77-051638f58b0a&id=dablewidget_GlYqNRnl&category1=Featured&ad_params=%7B%7D&pixel_ratio=1&ua=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2012.5.0)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F110.0.5481.177%20Safari%2F537.36&client_width=513&network=non-wifi&lang=ko&pre_expose=1&is_top_win=1&top_win_accessible=1&is_lazyload=0');
      const response = await fetch('http://localhost:4001/webcomponent/a');
      const data = await response.json();
      
      const widgetWrapEl = document.createElement('div');
      widgetWrapEl.classList.add('widget-wrap');

      const widgetHEl = document.createElement('div');
      widgetHEl.setAttribute('data-responsive-group', '0');
      widgetHEl.classList.add('widget', 'widget--h', 'line', 'singlepage');
      widgetWrapEl.appendChild(widgetHEl);

      const widgetRecomendationsEl = document.createElement('div');
      widgetRecomendationsEl.setAttribute('data-total', '1');
      widgetRecomendationsEl.setAttribute('data-item_total', '5');
      widgetRecomendationsEl.setAttribute('data-item_count', '5');
      widgetRecomendationsEl.setAttribute('data-infinite', 'true');
      widgetRecomendationsEl.setAttribute('data-animation_type', 'slide');
      widgetRecomendationsEl.setAttribute('data-autoswipe_secondes', '0');
      widgetRecomendationsEl.classList.add('recommendations');
      widgetHEl.appendChild(widgetRecomendationsEl);

      const widgetTitleEl = document.createElement('h1');
      widgetTitleEl.textContent = 'WebComponent AD Widget';
      widgetTitleEl.classList.add('title');
      widgetRecomendationsEl.appendChild(widgetTitleEl);

      const widgetListEl = document.createElement('div');
      widgetListEl.classList.add('list');
      widgetRecomendationsEl.appendChild(widgetListEl);

      const widgetTargetWrapEl = document.createElement('div');
      widgetTargetWrapEl.setAttribute('data-data_count', '5');
      widgetTargetWrapEl.setAttribute('data-item_count', '5');
      widgetTargetWrapEl.classList.add('target-wrap');
      widgetListEl.appendChild(widgetTargetWrapEl);

      const widgetTableEl = document.createElement('table');
      widgetTableEl.style.width = '100%';
      widgetTableEl.style.tableLayout = 'fixed';
      widgetTableEl.classList.add('target');
      widgetTargetWrapEl.appendChild(widgetTableEl);

      const widgetCaptionEl = document.createElement('caption');
      widgetCaptionEl.classList.add('blind');
      widgetCaptionEl.textContent = 'Contents for you';
      widgetTableEl.appendChild(widgetCaptionEl);

      new Array(5).fill(0).forEach(v => {
        const colEl = document.createElement('col');
        colEl.style.width = '20.00%';
        widgetTableEl.appendChild(colEl);
      });

      const widgetTrEl = document.createElement('tr');
      widgetTableEl.appendChild(widgetTrEl);

      data.forEach((item, index) => {
        const widgetTdEl = document.createElement('td');
        widgetTdEl.setAttribute('scope', 'col');
        widgetTdEl.setAttribute('data-idx', `${index}`);
        widgetTdEl.setAttribute('data-page', '1');
        widgetTdEl.setAttribute('data-item_id', 'undefined');
        widgetTdEl.setAttribute('data-ad_id', item.id);
        widgetTdEl.setAttribute('data-ad_idx', item.ad_idx);
        widgetTdEl.classList.add('item', `item${index}`, 'item-sp', 'sp-mark-boxtype');

        const widgetItemWrapperEl = document.createElement('a');
        widgetItemWrapperEl.setAttribute('href', item.link);
        widgetItemWrapperEl.setAttribute('target', '_blank');
        widgetItemWrapperEl.classList.add('item-link');
        widgetTdEl.appendChild(widgetItemWrapperEl);

        const widgetImageWrapper = document.createElement('div');
        widgetImageWrapper.classList.add('thumbnail-wrap', 'wh-ratio-16by10');
        widgetItemWrapperEl.appendChild(widgetImageWrapper);

        const widgetImageEl = document.createElement('img');
        widgetImageEl.setAttribute('src', item.image.src);
        widgetImageEl.classList.add('thumbnail');
        widgetImageWrapper.appendChild(widgetImageEl);

        const widgetSpMarkEl = document.createElement('div');
        widgetSpMarkEl.classList.add('sp-mark-box', 'topleft');
        widgetSpMarkEl.innerHTML = 'A&#x200b;D';
        widgetImageWrapper.appendChild(widgetSpMarkEl);

        const widgetTitleEl = document.createElement('div');
        widgetTitleEl.classList.add('name');
        widgetTitleEl.textContent = item.title;
        widgetItemWrapperEl.appendChild(widgetTitleEl);

        widgetTrEl.appendChild(widgetTdEl);
      });

      this.shadowRoot.appendChild(widgetWrapEl);
    };

    try {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.appendChild(widgetScript);
      renderWidget();
    } catch (error) {
      console.log("error: ", error);
    }
  }
}

customElements.define('ad-widget', ADWidget);
