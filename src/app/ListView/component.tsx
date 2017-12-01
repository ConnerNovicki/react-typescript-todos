import * as React from 'react';
import { BaseComponent } from '../Utils';
import { connect } from 'react-redux';
import AppState from '../redux/app-state';
import { bindActionCreators } from 'redux';
import { changeValueActionCreator } from './actions';

interface ListViewProps {
  value: string;
}

class MainView extends BaseComponent {
  constructor(props: ListViewProps) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h2>main view</h2>
        <button>Click me</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): ListViewProps => ({ value: state.listView.value });

const mapDispatchToProps = (dispatch: any) => ({
  changeValueAction: bindActionCreators(changeValueActionCreator, dispatch),
});

export default connect(mapStateToProps)(mapDispatchToProps)(MainView);