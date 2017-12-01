import * as React from 'react';
import { BaseComponent } from '../Utils';
import { connect } from 'react-redux';
// import AppState from '../redux/app-state';
import { bindActionCreators } from 'redux';
import { changeValueActionCreator } from './actions';

interface ListViewProps {
  value: any;
  changeValueAction?: any;
}

class MainView extends BaseComponent {
  constructor(props: ListViewProps) {
    super(props);
    console.log(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <h2>main view</h2>
        <button 
          onClick={() => { this.props.children}}
        >Click me</button>
      </div>
    );
  }
}

const mapStateToProps = (state: any): ListViewProps => ({ value: state });

const mapDispatchToProps = (dispatch: any): any => ({
  changeValueAction: bindActionCreators(changeValueActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);