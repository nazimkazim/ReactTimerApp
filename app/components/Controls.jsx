var React = require('react');
var Controls = React.createClass({
  propTypes:{
    countdownStatus:React.PropTypes.string.isRequired   
  },
  render:function() {
      var {countdownStatus} = this.props;
      
      return (
        <button className="button alert hollow">Clear</button>
      )
  }
});

module.exports = Controls;

































