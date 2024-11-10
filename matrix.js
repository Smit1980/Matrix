console.log("Typewriter script loaded");

const container = document.getElementById("text-container");
const lines = [
  { text: "     Недвижимость:", tag: "<strong><u>" },
  "    Экспертиза и управление недвижимыми активами",
  "    Выкуп имущества с электронных торгов (ФЗ №127, ФЗ №159, ФЗ №229)",
  "    Readivelopment",
  "    Портфельные инвестиции",
  "    Юридическая экспертиза в области недвижимости",
  "    Стратегическое планирование и консалтинг",
  "    Налоговый консалтинг, выявление и возврат налоговых переплат",
  "",
  { text: "         Information Technology:", tag: "<strong><u>" },
  "    Разработка продуктов любой сложности",
  "    Создание инновационных решений",
  "    Уникальные AI-решения и профессиональные инструменты для автоматизации и оптимизации бизнес-процессов",
  "    Глубокое машинное обучение и компьютерное зрение, ИИ",
  "    Лицензирование профессионального программного обеспечения",
  "    Оформления подписок на иностранные программные продукты",
  "    Разработка систем контроля", 
  "    Blockchain and Cryptocurrency - Market Asset Transactions", 
];

let currentLine = 0;
let index = 0;

function typeWriter() {
  if (currentLine < lines.length) {
    let line = lines[currentLine];
    if (typeof line === 'object') {
      container.innerHTML += line.tag;
      line = line.text;
    }

    if (index < line.length) {
      container.innerHTML += line.charAt(index);
      index++;
      setTimeout(typeWriter, 25);
    } else {
      if (typeof lines[currentLine] === 'object') {
        container.innerHTML += "</u></strong>";
      }
      container.innerHTML += '<br>';
      index = 0;
      currentLine++;
      setTimeout(typeWriter, 250);
      container.scrollTop = container.scrollHeight;
    }
  } else {
    container.style.opacity = 1;
  }
}

typeWriter();
