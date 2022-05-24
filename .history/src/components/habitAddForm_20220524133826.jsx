import React, { PureComponent } from "react";

import React from 'react';

const HabitAddForm = (props) => (
      
  );

export default HabitAddForm;


class abitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  onSubmit = (event) => {
    event.preventDefault();
    //   얘를 해줘야 초기화하는걸 막아줌.
    const name = this.inputRef.current.value;
    name && this.props.handleAdd(name);
    // 검색창 초기화
    this.formRef.current.reset();
  };

  render() {
    console.log("habitAddForm");
    return (
      <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
      //   form에서는 버튼이 눌리면 submit이라는 이벤트가 발생한다. 따라서 onSubmit를 활용할 수 잇다.
      //   form태그에는 자동으로 submit이 내장되어 있음. input에서 enter 또는 button 클릭
    );
  }
}

// export default abitAddForm;