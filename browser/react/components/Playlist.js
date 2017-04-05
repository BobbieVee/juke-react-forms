import React from 'react';



const Playlist = function (props) {
return (
<div className="well">
  <form className="form-horizontal">
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input className="form-control" value={props.value} type="text" onChange ={props.onChange}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
          <button type="submit" className="btn btn-success" onClick={props.onClick}>Create Playlist</button>
        </div>
      </div>
    </fieldset>
  </form>
</div>
)};

export default Playlist;
