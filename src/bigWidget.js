const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="https://static.dable.io/static/b/infinite-swipe/dist/swipe.min.css"/>
  <link rel="stylesheet" href="https://static.dable.io/dist/widget.v2.min.css?"/>
  <style type="text/css">
    .widget .title{font-size:16px;}.widget th,.widget td{text-align:left;}a{color:#6c6c6c;}.widget .item-link{font-size:12px;}.widget .title{border-color:#c2c2c2;}.widget .price{color:#000000;}.widget .price{font-size:12px;}.widget .saleprice{color:#777777;}.widget .saleprice{font-size:12px;}.widget .published_time{color:#000000;}.widget .published_time{font-size:12px;}.widget .author{color:#000000;}.widget .author{font-size:12px;}

    .big-widget-wrap {
      display: grid;
      grid-template-areas:
        "item1 item1"
        "item2 item3"
        "item4 item5"
        "item6 item7"
        "item8 item8"
        "item9 item9"
        "item10 item10"
        "item11 item12"
        "item13 item14"
        "item15 item15"
        "item16 item17"
        "item18 item19"
        "item20 item20"
        "item21 item22"
        "item23 item24"
        "item25 item25"
        "item26 item27"
        "item28 item29"
        "item30 item30";
      gap: 15px 15px;
      width: 100%;
    }
    .big-widget-item {
      width: 100%;
      margin-bottom: 20px;
      padding: 10px;
    }
    .big-widget-link {
      width: 100%;
    }
    .big-widget-view {
      width: 100%;
      min-height: 300px;
      max-height: 300px;
    }
    .big-widget-title {
      width: 100%;
      margin-top: 20px;
      color: black;
      font-size: 20px;
      font-weight: bold;
    }
    .big-widget-description {
      margin-top: 10px;
      color: darkgray;
      font-size: 15px;
    }
  </style>
`;

class BigWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const renderWidget = async () => {
      const response = await fetch('https://api.dable.io/webcomponent/b');
      const { itemList, videoList } = await response.json();

      const widgetWrapEl = document.createElement('div');
      widgetWrapEl.classList.add('big-widget-wrap');

      const videoIndexList = [0, 2, 4, 6, 8, 10, 12, 14];
      itemList.forEach((item, i) => {
        const isVideoItem = videoIndexList.includes(i);
        const widgetItemEl = document.createElement('div');
        widgetItemEl.classList.add('big-widget-item', `item${i + 1}`);
        widgetItemEl.style.gridArea = `item${i + 1}`;

        const widgetLinkEl = document.createElement('a');
        widgetLinkEl.classList.add('big-widget-link');
        widgetLinkEl.setAttribute('href', item.link);
        widgetLinkEl.setAttribute('target', "_top");
        widgetItemEl.appendChild(widgetLinkEl);

        if (isVideoItem) {
          // 비디오
          const videoEl = document.createElement('video');
          videoEl.style.objectFit = 'cover';
          videoEl.setAttribute('width', '100%');
          videoEl.setAttribute('height', '100%');
          videoEl.setAttribute('muted', 'muted');
          videoEl.setAttribute('loop', 'loop');
          videoEl.setAttribute('autoplay', 'autoplay');
          videoEl.setAttribute('onloadstart', 'this.volume=0');
          videoEl.classList.add('big-widget-view');

          const sourceEl = document.createElement('source');
          sourceEl.setAttribute('src', videoList.shift());
          videoEl.appendChild(sourceEl);

          widgetLinkEl.appendChild(videoEl);
        } else {
          // 이미지
          const widgetViewEl = document.createElement('img');
          widgetViewEl.setAttribute('src', item.image.src);
          widgetViewEl.classList.add('big-widget-view');
          widgetLinkEl.appendChild(widgetViewEl);
        }

        const widgetTitleEl = document.createElement('div');
        widgetTitleEl.classList.add('big-widget-title');
        widgetTitleEl.innerHTML = isVideoItem ? "[AD] " + item.title : item.title;
        widgetLinkEl.appendChild(widgetTitleEl);

        const widgetDescriptionEl = document.createElement('div');
        widgetDescriptionEl.classList.add('big-widget-description');
        widgetDescriptionEl.innerHTML = item.description;
        widgetLinkEl.appendChild(widgetDescriptionEl);

        widgetWrapEl.appendChild(widgetItemEl);
      });

      this.shadowRoot.appendChild(widgetWrapEl);
    };

    try {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      renderWidget();
    } catch (error) {
      console.log("error: ", error);
    }
  }
}

customElements.define('big-widget', BigWidget);
