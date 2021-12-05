import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import '../styles.css'
import Avatar from './Avatar'
import NewInput from './NewInput'
// import Timeline from './Timeline'
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ReactGridLayout extends React.PureComponent {

  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
    compactType: null
  };

  constructor(props) {
    super(props);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  createElement(el) {
    const i = el.i;
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };

    let usedComponents;
    if (el.btn === 1) {
      usedComponents = <Avatar />;
    } else if (el.btn === 2) {
      usedComponents = <NewInput />;
    } 
    // else if (el.btn === 3) {
    //   usedComponents = <Timeline />;
    // }

    return (
      <div key={i} data-grid={el}>
        {usedComponents}
        <span
          className="removeItem"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, el.i)}
        >
          x
        </span>
      </div>
    );
  }

  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    this.props.removeItem(i)
  }

  onDrage(layout) {
    this.setState({ layout: layout });
  }

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          onDrag={this.onDrag}
          {...this.props}
        >
          {_.map(this.props.items, (el) => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}