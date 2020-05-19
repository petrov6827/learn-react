import React from 'react';
import s from './ProfileStatus.module.scss';

const ProfileStatusWithHooks = (props) => {
  
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  });

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

// componentDidUpdate(prevProps, prevState) {
//   if (prevProps.status !== this.props.status) {
//     this.setState({
//       status: this.props.status,
//     });
//   }
// }

return (
  <div>
    {!editMode && (
      <div className={s.profile__status}>
        <span onDoubleClick={this.activateEditMode}>{status || '-----'}</span>
      </div>
    )}
    {editMode && (
      <div>
        <input
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={status}
          onChange={onStatusChange}
        />
      </div>
    )}
  </div>
);

export default ProfileStatusWithHooks;
