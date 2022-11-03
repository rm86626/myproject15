import React, {Component} from 'react';

class GrandChild extends Component {
    render() {
        let {inputRef}=this.props; //{inputRef:#1234}
        return (
            <div>
                 <h3>GrandChild组件</h3>
                        ref调用祖先传递过来的#1234函数
                         参数就是inputDOM对象
                 <input type="text" ref={inputRef}/>
            </div>
        );
    }
}

export default GrandChild;