//CommonJS 스펙의 모듈을 가져오는 방법
//ES6는 import를 사용
import _ from 'lodash';
import './style.css';
import './hello.scss'
import { area, circumference } from './js/circle'; //named import
import cube from './js/cube'; //default import는 이름을 임의로 변경할 수 있다. 

console.log("test")
function component() {
    let element = document.createElement('div');
 
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  }
  document.body.appendChild(component());
  console.log(area(5), circumference(5));
  console.log(cube(3))