var React = require('react');
var ImageTag = require('./imagetag.jsx');

var BioTooltip = React.createClass({
  render: function() {
    return(
      <div className="bio-section">
        <div className="tooltip-arrow"></div>
        <div className="content-box">
          { this.props.photoSrc ? <img src={this.props.photoSrc} /> : null }
          { this.props.bio ? <div>{this.props.bio}</div> : null }
        </div>
      </div>
    );
  }
});

var SpacePathwayProfile = React.createClass({
  render: function() {
    var id = this.props.name.replace(/\s+/g, '-').toLowerCase();

    return (
      <div className="space-pathway-profile" id={id}>
        <div className="detail">
          <div className="header">
            { this.props.iconPath ? <ImageTag src1x={this.props.iconPath} width="100" /> 
                                  : null}
            <h1><a href={"#"+id}>{this.props.name}</a></h1>
          </div>
          { this.props.type ? <div className="type">{this.props.type}</div> : null }
          <div className="description">{this.props.description}</div>
        </div>
        <div className="contacts">
          { this.props.contacts ? <h2>{(this.props.contacts.length > 1) ? this.props.contactTitle + "s" : this.props.contactTitle}</h2>
                                : null}
          <ul>
          {
            this.props.contacts ? this.props.contacts.map(function(contact) {
              return (
                <li key={contact.name}>
                  <div className="name">{contact.name}</div>
                  { contact.twitter ? <div className="twitter"><a href={"https://twitter.com/"+contact.twitter}>{contact.twitter}</a></div> : null }
                  { contact.bio ? <BioTooltip {...contact.bio} /> : null }
                </li>
              )
            }) : null
          }
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = SpacePathwayProfile;
