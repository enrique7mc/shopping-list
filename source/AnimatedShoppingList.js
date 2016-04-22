import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AnimatedShoppingList extends React.Component {
  constructor () {
    super(...arguments);

    this.state = {
      items: [
        { id: 1, name: 'Milk' },
        { id: 2, name: 'Eggs' },
        { id: 3, name: 'Coffee' }
      ]
    };
  }

  handleRemove (i) {
    let newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  handleChange (event) {
    if (event.key === 'Enter') {
      let newItem = { id: Date.now(), name: event.target.value }
      let newItems = this.state.items.concat(newItem);
      event.target.value = '';
      this.setState({ items: newItems });
    }
  }

  render() {
    let shoppingItems = this.state.items.map((item, i) => {
      return (
        <div key={ item.id } className='item'
             onClick={ this.handleRemove.bind(this, i) }>
             { item.name }
        </div>
      );
    });

    return (
      <div>
        <ReactCSSTransitionGroup transitionName='example'
                                 transitionEnterTimeout={ 300 }
                                 transitionEnterTimeout={ 300 }
                                 transitionAppear={ true }
                                 transitionAppearTimeout={ 300 }>
          { shoppingItems }
        </ReactCSSTransitionGroup>
        <input type='text' value={ this.state.newItem }
               onKeyDown={ this.handleChange.bind(this) } />
      </div>
    );
  }
}
