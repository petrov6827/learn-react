import React from 'react';
import s from './ProfileStatus.module.scss';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activatedEditMode() {
    this.setState({
      editMode: true,
    });
    // this.state.editMode = true;
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div className={s.profile__status}>
            <span
              onFocus={true}
              onDoubleClick={this.activatedEditMode.bind(this)}
            >
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
