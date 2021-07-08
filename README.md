# Front-lap

![license](https://img.shields.io/badge/license-MIT%20License-blue.svg) 
![vue](https://img.shields.io/badge/vue-3.0.0-blue?logo=Vue.js)
![vue](https://img.shields.io/badge/react-17.0.2-blue?logo=react)



## React-playBook

- [react-playBook](https://github.com/kylpo/react-playbook)



## Convention

- camelCase
  - food_bar ⇢ foodBar

- [React hook](https://github.com/ecomfe/react-hooks)
```
import React from "react";
import PropTypes from "prop-types";
 
 
const ErrorMsg = (props) => {
    return (
        <div className="mt-0-5rem fz-smler">
            <img
                className="error-stop"
                src="/static/img/global/stop.svg"
                alt="stop icon"
            />
            {props.text}
        </div>
    );
}
 
 
ErrorMsg.propTypes = {
    text: PropTypes.string,
    loginAttempts: PropTypes.number
};
 
ErrorMsg.defaultProps = {
    text: "",
    loginAttempts: 0
};
 
export default ErrorMsg;
```
- [React code style](https://github.com/jrskerritt/react-style-guide)

- [Commitizen](https://github.com/ngryman/cz-emoji)
```
❯ feature   🌟  A new feature
  fix       🐞  A bug fix
  docs      📚  Documentation change
  refactor  🎨  A code refactoring change
  chore     🔩  A chore change
```



## Start

- ```
  git clone https://github.com/lllilllilllilili/dev-front.git
  cd react/hello-react
  npm i 
  npm start
  ```



## How to study on your environment

- git issue 확인

  - mission에 맞춰 해결
  - 추가하고 싶은 mission있으면 추가
    - Mission - OOO (OOO은 학습하고자 하는 함수 혹은 기능)

- ```
  git checkout -b feature_mission횟수_이름
  ```

- git push 후 PR, `self-review` 로 코드 확인
- mission 횟수 넘어가면 PR closed

## React Category

- useState(#75, #78)
- EventHandler(#76, #77)

## License

```xml
The MIT License (MIT)

Copyright (c) 2018 skydoves

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```





## React Category

- useState(#75, #78)
- EventHandler(#76, #77)
