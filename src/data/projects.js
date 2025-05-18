import qrCodeGenerator from "../assets/projects/qrCodeGenerator.png";
import personalPortfolio from "../assets/projects/personalPortfolio.png";
import pythonPlaywright from "../assets/projects/pythonPlaywright.png";
import javaSelenium from "../assets/projects/javaSelenium.png";
import typescriptPlaywright from "../assets/projects/typescriptPlaywright.jpg";
import openAiNodeJs from "../assets/projects/openAiNodeJs.png";

export const data = [
  {
    id: 1,
    name: "Personal Portfolio",
    image: personalPortfolio,
    // Swap github and demo to match button text usage
    demo: "http://anton.qa",
    github: "https://github.com/antongulin/antongulin.github.io",
  },
  {
    id: 2,
    name: "Python + Playwright",
    image: pythonPlaywright,
    demo:
      "https://github.com/antongulin/disney-python-playwright/actions/workflows/test.yml",
    github: "https://github.com/antongulin/disney-python-playwright",
  },
  {
    id: 3,
    name: "Java + Selenium",
    image: javaSelenium,
    demo: "https://www.youtube.com/watch?v=XaUJovUyjj4",
    github: "https://github.com/antongulin/NathanJamesWorkSample",
  },
  {
    id: 4,
    name: "QR Code Generator",
    image: qrCodeGenerator,
    demo: "https://anton.qa/qr-code-component/",
    github: "https://github.com/antongulin/qr-code-component",
  },
  {
    id: 5,
    name: "TypeScript + Playwright WIP",
    image: typescriptPlaywright,
    demo: "https://github.com/antongulin/typescript-playwright",
    github: "https://github.com/antongulin/typescript-playwright",
  },
  {
    id: 6,
    name: "Open AI + NodeJS WIP",
    image: openAiNodeJs,
    demo: "https://github.com/antongulin/openai-nodejs",
    github: "https://github.com/antongulin/openai-nodejs",
  },
];
