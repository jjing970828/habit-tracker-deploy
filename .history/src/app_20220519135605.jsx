import { Component } from 'react';
import "./app.css";
import Habits from "./components/habits";
import Navbar from './components/navbar';
import SearchField from './components/searchField';

// jsx파일을 왜쓰는가 ?
//   순수 js로직을 다루는 파일 >> js
//   react의 컴포넌트파일 >> jsx
//   이 둘을 구분하기 위해 사용!

class App extends Component {
  state = {

  }

  render (){
<header>
  <Navbar />;
</header>

<body>
  <SearchField/>;
  <Habits />;
</body>
  }


  
}
// 원래는 React.createElement('h1', {}, 'Hello:)!!') 이렇게 표현해야 했으나 편의성을 위해 jsx를 개발!
// jsx와 html의 차이점
//  attribute 주는 방법
//   class => className, onclick => onClick
//   camelCase를 사용한다!!
//  html은 마크업 언어이지만 jsx는 js임 (babel로 변화된)
// js코드 이므로 변수 사용가능. {}로 묶으면 됨.
// 형제 노드(다수의 태그를 리턴)를 쓸 수 없음. >> 쓸꺼면 묶어서 써야됨. <React.Fragment>로 묶으면 됨.
// 의미없이 진짜 그룹만 묶을 거라면 <>로 묶어주면 된다.
// {}를 이용하여 비즈니스 로직도 작성 가능 -> js처럼 쓸수 있다는 말
// 접근에 오류가 있다면 {}부터 생각해보자!
export default App;

// state를 여기로 가져와서 이안에 navbar, input field reset버튼 추가해서 만들어보기
// 다만 컴포넌트 클래스로 변경 후 사용해야 한다.