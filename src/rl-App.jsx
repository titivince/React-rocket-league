import React from 'react';

class RlApp extends React.Component {

  state = {
    lvl: 70,
    const: 70 ,
    itemGain: 0,
    itemWantedGet: 0,
    itemWanted: 20,
    ratio: 0
  };
  setLvl(e) {
    var calRatio = Number(this.state.itemWantedGet / this.state.itemGain).toFixed(4);
    this.setState({
      lvl: Number(e.target.value),
      itemGain: Number(e.target.value - this.state.const),
      ratio: calRatio
    });
  }
  setItemWanted(e) {
    this.setState({
      itemWanted: Number(e.target.value)
    })
  }

  GainLvl = () => {
  var calRatio = Number(this.state.itemWantedGet / this.state.itemGain).toFixed(4);
    this.setState({
      lvl: Number(this.state.lvl + 1),
      itemGain: Number(this.state.lvl - this.state.const + 1),
      ratio: calRatio
    });
  }
  GainLvlAndWantedItem = () => {
    var calRatio = Number(this.state.itemWantedGet / this.state.itemGain).toFixed(4);
    this.setState({
      lvl: Number(this.state.lvl + 1),
      itemWantedGet: Number(this.state.itemWantedGet + 1),
      itemGain: Number(this.state.lvl - this.state.const + 1),
      ratio: calRatio
    })
  }

  render() {
    return (
      <div>
        <h1>Rocket League</h1>
        <div class="main">
          <label>
            Current lvl
            <input type="text" value={this.state.lvl} onChange={this.setLvl.bind(this)}/>
          </label>
          <label>
            Total item wanted
            <input type="text" value={this.state.itemWanted} onChange={this.setItemWanted.bind(this)} />
          </label>

          <button class="up" type="button" onClick={this.GainLvl}>level up</button>
          <button class="wanted" type="button" onClick={this.GainLvlAndWantedItem}>Get wanted item</button>
          <div>
            <p>Item gain : {this.state.itemGain}</p>
            <p>Number item wanted : {this.state.itemWanted}</p>
            <p>Number item wanted get : {this.state.itemWantedGet}</p>
            <p>Ratio Item / wanted : {this.state.ratio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RlApp;