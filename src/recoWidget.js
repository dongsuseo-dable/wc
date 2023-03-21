// const template = document.createElement('template');
// template.innerHTML = `
//   <link rel="stylesheet" href="https://static.dable.io/static/b/infinite-swipe/dist/swipe.min.css"/>
//   <link rel="stylesheet" href="https://static.dable.io/dist/widget.v2.min.css?"/>
//   <style type="text/css">.widget .title{font-size:16px;}.widget th,.widget td{text-align:left;}a{color:#6c6c6c;}.widget .item-link{font-size:12px;}.widget .title{border-color:#c2c2c2;}.widget .price{color:#000000;}.widget .price{font-size:12px;}.widget .saleprice{color:#777777;}.widget .saleprice{font-size:12px;}.widget .published_time{color:#000000;}.widget .published_time{font-size:12px;}.widget .author{color:#000000;}.widget .author{font-size:12px;}</style>
//   <style>
//     p {
//       color: blue;
//     }
//   </style>
//   <p>RECO WIDGET의 p 태그 색상은 blue !!!</p>
// `;

const widgetScript = document.createElement('script');
widgetScript.textContent = `
  var selector = "#web-component"; //write css selector
  var widget_id = "1oVgzJj7"; // put widget id [AD]:GlYqNRnl [RECO]:1oVgzJj7
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
`;

class RecoWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // const renderWidget = async () => {
    //   // const response = await fetch('http://localhost:4001/widgets/id/1oVgzJj7/users/20418167.1669268933781?from=http%3A%2F%2Flocalhost%3A1234%2F&url=http%3A%2F%2Flocalhost%3A1234%2F&ref=http%3A%2F%2Flocalhost%3A1234%2F&cid=20418167.1669268933781&uid=20418167.1669268933781&site=dable.io&gdpr=0&service_id=0&service_type=news&country=KR&client_id=0&inarticle_widgets=%5B%2226XgB6lN%22%2C%2237JyWBoN%22%2C%22xXA8xalG%22%2C%226Xg1m67N%22%5D&randomStr=fffad5f8-27dd-48dd-898c-9dc03cd520ee&id=dablewidget_1oVgzJj7&category1=Featured&ad_params=%7B%7D&pixel_ratio=1&ua=Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2012.5.0)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F110.0.5481.177%20Safari%2F537.36&client_width=558&network=non-wifi&lang=ko&pre_expose=1&is_top_win=1&top_win_accessible=1&is_lazyload=0');
    //   // const response = await fetch('http://localhost:4001/webcomponent/r');
    //   const response = await fetch('https://api.dable.io/webcomponent/r');
    //   const data = await response.json();

    //   const widgetWrapEl = document.createElement('div');
    //   widgetWrapEl.classList.add('widget-wrap');

    //   const widgetVEl = document.createElement('div');
    //   widgetVEl.setAttribute('data-responsive-group', '0');
    //   widgetVEl.classList.add('widget', 'widget--v', 'singlepage');
    //   widgetWrapEl.appendChild(widgetVEl);

    //   const widgetRecomendationsEl = document.createElement('div');
    //   widgetRecomendationsEl.setAttribute('data-item_total', '5');
    //   widgetRecomendationsEl.setAttribute('data-item_count', '5');
    //   widgetRecomendationsEl.setAttribute('data-animation_type', 'slide');
    //   widgetRecomendationsEl.setAttribute('data-autoswipe_secondes', '0');
    //   widgetRecomendationsEl.classList.add('recommendations');
    //   widgetVEl.appendChild(widgetRecomendationsEl);

    //   const widgetTitleEl = document.createElement('h1');
    //   widgetTitleEl.textContent = 'WebComponent Reco Widget';
    //   widgetTitleEl.classList.add('title');
    //   widgetRecomendationsEl.appendChild(widgetTitleEl);

    //   const widgetListEl = document.createElement('div');
    //   widgetListEl.classList.add('list');
    //   widgetRecomendationsEl.appendChild(widgetListEl);

    //   const widgetTargetWrapEl = document.createElement('div');
    //   widgetTargetWrapEl.setAttribute('data-data_count', '5');
    //   widgetTargetWrapEl.setAttribute('data-item_count', '5');
    //   widgetTargetWrapEl.classList.add('target-wrap');
    //   widgetListEl.appendChild(widgetTargetWrapEl);

    //   const widgetTargetPagesEl = document.createElement('div');
    //   widgetTargetPagesEl.style.width = '100%';
    //   widgetTargetPagesEl.classList.add('target', 'pages');
    //   widgetTargetWrapEl.appendChild(widgetTargetPagesEl);

    //   const widgetTargetPageEl = document.createElement('div');
    //   widgetTargetPageEl.setAttribute('data-page', '1');
    //   widgetTargetPagesEl.appendChild(widgetTargetPageEl);

    //   data.forEach((item, index) => {
    //     const itemContainerEl = document.createElement('div');
    //     itemContainerEl.setAttribute('data-idx', `${index}`);
    //     itemContainerEl.setAttribute('data-item_id', item.item_id);
    //     itemContainerEl.setAttribute('data-item_scroe', item.item_score);
    //     itemContainerEl.classList.add('item', `item${index}`);

    //     const itemWrapperEl = document.createElement('a');
    //     itemWrapperEl.setAttribute('href', item.link);
    //     itemWrapperEl.setAttribute('target', '_top');
    //     itemWrapperEl.classList.add('item-link');
    //     itemContainerEl.appendChild(itemWrapperEl);

    //     const imageWrapperEl = document.createElement('div');
    //     imageWrapperEl.classList.add('thumbnail-wrap', 'wh-ratio-16by10');
    //     itemWrapperEl.appendChild(imageWrapperEl);

    //     const imageEl = document.createElement('img');
    //     imageEl.src = item.image.src;
    //     imageEl.classList.add('thumbnail');
    //     imageWrapperEl.appendChild(imageEl);

    //     const titleEl = document.createElement('div');
    //     titleEl.setAttribute('data-item_id', item.item_id);
    //     titleEl.classList.add('name');
    //     titleEl.textContent = item.title;
    //     itemWrapperEl.appendChild(titleEl);

    //     widgetTargetPageEl.appendChild(itemContainerEl);
    //   });

    //   this.shadowRoot.appendChild(widgetWrapEl);
    // };

    try {
      // this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.appendChild(widgetScript);
      // renderWidget();
    } catch (error) {
      console.log("error: ", error);
    }
  }
}

customElements.define('reco-widget', RecoWidget);
