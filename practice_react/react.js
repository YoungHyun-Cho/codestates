import React from 'react';


class Subject extends Component {
    render() {
        return (
            <header>
                <h1>WEB</h1>
                world wide web!
            </header>
        );
    }
}
// class Subject : 서브젝트라는 컴포넌트를 만들겠다.
// render는 함수임. class 안에 소속된 함수는 function 키워드를 생략할 수 있다. 
// 컴포넌트를 만들 때에는 그 컴포넌트는 반드시 하나의 최상위 태그로 시작해야 함. 
// Subject 컴포넌트에서는 header 태그가 최상위 태그가 됨. 가장 먼저 쓰는 태그가 최상위 태그임. 
// 6~9 : header 태그를 Subject라고 정의한 것임. 
// 리액트 코드에서 Subject태그를 변경하면 HTML에서는 header 태그에 동일한 내용이 적용됨. 

class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JS</a></li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render () {
        return (
            <article>
                <h2>HTML</h2>
                HTML is HyperText Markup Language.
            </article>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                Hello, React!!
                <Subject></Subject>
                <Subject></Subject>
                <TOC></TOC>
                <Content></Content>
            </div>
        );
    }
}

