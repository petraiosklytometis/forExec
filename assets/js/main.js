const elements = [
  { tag: 'p', text: '无人爱苦' },
  { tag: 'div', text: '亦无人寻之欲之' },
  { tag: 'footer', text: '乃因其苦' },
  { tag: 'section', text: '另一方面，我们义愤填膺地谴责和厌恶那些被一时的快乐的魅力所迷惑，被欲望所蒙蔽，以至于不能预见随之而来的痛苦和麻烦的人 同样的责备也属于那些因意志薄弱而不能履行职责的人，这就等于说因畏惧劳累和痛苦而不能履行职责。这些情况都很简单，很容易区分。在一个自由的时刻，当我们的选择权不受约束，当没有什么能阻止我们做我们最喜欢的事情时，每一种快乐都应该被欢迎，每一种痛苦都应该被避免。但在某些情况下，由于责任的要求或业务的义务，经常会出现不得不放弃快乐和接受痛苦的情况。因此，明智的人在这些问题上总是坚持这一选择原则：他拒绝快乐以确保其他更大的快乐，或者他忍受痛苦以避免更糟糕的痛苦' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i];
  let tagCreated = document.createElement(tag);
  let textCreated = document.createTextNode(text);
  tagCreated.appendChild(textCreated);
  div.appendChild(tagCreated);
}

container.appendChild(div);