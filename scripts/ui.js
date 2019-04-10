document.getElementById('cn').onclick = () => {
  document.title = '笑话生成器';
  document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
  document.getElementById('lbl-cn').textContent = '中国';
  document.getElementById('lbl-us').textContent = '美国';
  document.getElementById('lbl-uk').textContent = '英国';
  document.getElementById('customname').placeholder = '李雷';
  document.querySelector('.randomize').textContent = '随机生成笑话';
};

document.getElementById('us').onclick =
document.getElementById('uk').onclick = () => {
  document.title = 'Silly story generator';
  document.getElementById('lbl-customname').textContent = 'Enter custom name:';
  document.getElementById('lbl-cn').textContent = 'CN';
  document.getElementById('lbl-us').textContent = 'US';
  document.getElementById('lbl-uk').textContent = 'UK';
  document.getElementById('customname').placeholder = 'Bob';
  document.querySelector('.randomize').textContent = 'Generate random story';
};


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ['Willy the Goblin',
               'Big Daddy',
               'Father Christmas'];
const insertY = ['the soup kitchen',
               'Disneyland',
               'the White House'];
const insertZ = ['spontaneously combusted',
               'melted into a puddle on the sidewalk',
               'turned into a slug and crawled away'];

const storyTextZh = '外边有34度，于是:insertx:出去遛弯。当走到:inserty:时他们被眼前的景象惊呆了，然后就:insertz:。李雷全程目睹但他并没有慌，因为:insertx:是一个270斤的胖子，天气又辣么热。';
const insertA = ['怪兽威利', '大老爹', '圣诞老人'];
const insertB = ['救助站', '迪士尼乐园', '白宫'];
const insertC = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];
function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {
  let newStory, xItem, yItem, zItem, name;

  if(customName.value !== '') {
    name = customName.value;  
  }

  let weight = Math.random() * 300;
  let temperature =  Math.random() * 94;

  if(!document.getElementById("cn").checked) {
    newStory = storyText;
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    if(!document.getElementById("uk").checked) {
      weight *= 0.0714286;
      weight = weight.toFixed(2);
      weight += ' stone';
      temperature = (temperature - 32) * 5 / 9;
      temperature = temperature.toFixed(2);
      temperature += ' centigrade';
    }else{
      weight = weight.toFixed(2);
      temperature = temperature.toFixed(2);
      weight += ' pounds';
      temperature += ' fahrenheit';
    }
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("Bob", name);  
  }else{
    newStory = storyTextZh;
    xItem = randomValueFromArray(insertA);
    yItem = randomValueFromArray(insertB);
    zItem = randomValueFromArray(insertC);
    weight = weight.toFixed(2);
    temperature = temperature.toFixed(2);
    newStory = newStory.replace("270", weight);
    newStory = newStory.replace("34", temperature);
    newStory = newStory.replace("李雷", name);  
  } 
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
