const quotes = [
  {
    quote: '삶이 있는 한 희망은 있다.',
    author: '키케로',
  },
  {
    quote: '산다는것 그것은 치열한 전투이다.',
    author: '로망로랑',
  },
  {
    quote: '하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.',
    author: '사무엘존슨',
  },
  {
    quote: '언제나 현재에 집중할수 있다면 행복할것이다.',
    author: '파울로 코엘료',
  },
  {
    quote: '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.',
    author: '찰리 채플린',
  },
  {
    quote: '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.',
    author: '찰리 채플린',
  },
  {
    quote: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.',
    author: '엘버트 허버드',
  },
  {
    quote: '신은 용기있는자를 결코 버리지 않는다.',
    author: '켄러',
  },
  {
    quote: '신은 용기있는자를 결코 버리지 않는다.',
    author: '켄러',
  },
  {
    quote: '먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.',
    author: '엘사 맥스웰',
  },
  {
    quote: '먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.',
    author: '채근담',
  },
  {
    quote: '행복한 삶을 살기위해 필요한 것은 거의 없다.',
    author: '마르쿠스 아우렐리우스 안토니우스담',
  },
  {
    quote: '절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.',
    author: 'L.론허바드',
  },
  {
    quote: '어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.',
    author: '제임스 오펜하임',
  },
  {
    quote: '너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다.',
    author: '랄프 왈도 에머슨',
  },
  {
    quote: '한번의 실패와 영원한 실패를 혼동하지 마라.',
    author: 'F.스콧 핏제랄드',
  },
  {
    quote: '절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다.',
    author: 'L론허바드',
  },
  {
    quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.',
    author: '앙드레 말로',
  },
  {
    quote: '좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.',
    author: '단테',
  },
  {
    quote: '행복은 습관이다,그것을 몸에 지니라.',
    author: '허버드',
  },
];

const quote = document.querySelector('.quote span:first-child');
const author = document.querySelector('.quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote}  `;
const sub = document.createElement('sub');
author.appendChild(sub);

sub.innerText = `© ${todaysQuote.author}`;
