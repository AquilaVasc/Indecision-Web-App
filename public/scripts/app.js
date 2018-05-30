'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('It is running again!');

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: []
    };
    _this.hendleRemove = _this.hendleRemove.bind(_this);
    _this.choose = _this.choose.bind(_this);
    _this.addToOptions = _this.addToOptions.bind(_this);
    _this.removeOne = _this.removeOne.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {}
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('has gone');
    }
  }, {
    key: 'hendleRemove',
    value: function hendleRemove() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'choose',
    value: function choose() {
      var _this2 = this;

      var randomInt = function randomInt() {
        return Math.floor(Math.random() * _this2.state.options.length);
      };
      alert(this.state.options[randomInt()]);
    }
  }, {
    key: 'addToOptions',
    value: function addToOptions(option) {
      if (!option) {
        return 'empty';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'alredy exists';
      }
      this.setState(function (prevState) {
        return { options: prevState.options.concat([option]) };
      });
    }
  }, {
    key: 'removeOne',
    value: function removeOne(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (opt) {
            return option !== opt;
          })
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var subititle = 'Put your life in the hands of a computer';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, {
          subititle: subititle
        }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          choose: this.choose
        }),
        React.createElement(Options, {
          options: this.state.options,
          remove: this.hendleRemove,
          removeOne: this.removeOne
        }),
        React.createElement(AddOption, { add: this.addToOptions })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

;

IndecisionApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subititle && React.createElement(
      'h2',
      null,
      props.subititle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        disabled: !props.hasOptions,
        onClick: props.choose
      },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.remove },
      'Remove All'
    ),
    props.options.length === 0 && React.createElement(
      'p',
      null,
      'Please add an option to get started'
    ),
    React.createElement(
      'ol',
      null,
      props.options.map(function (option) {
        return React.createElement(Option, {
          key: option,
          text: option,
          removeOne: props.removeOne
        });
      })
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'li',
      null,
      props.text,
      React.createElement(
        'button',
        {
          onClick: function onClick() {
            return props.removeOne(props.text);
          }
        },
        'Remove'
      )
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOption, [{
    key: 'add',
    value: function add(e) {
      e.preventDefault();
      var option = e.target.elements.option;
      var treatment = this.props.add(option.value.trim());
      this.setState(function () {
        return { error: treatment };
      });
      if (option) {
        option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.add.bind(this) },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Your Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

;

// const User = (props) =>{
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age:</p>
//     </div>
//   );
// }

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
