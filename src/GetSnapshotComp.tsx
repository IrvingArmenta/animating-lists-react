import * as React from 'react';

class GetSnapshotBeforeUpdate extends React.Component<{
  callback?: VoidFunction;
}> {
  getSnapshotBeforeUpdate(prev: any) {
    this.props.callback?.();
    console.log(prev);
    // Prevents warning.
    return null;
  };

  // Prevents warning.
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  componentDidUpdate = () => {};

  render = () => null;
}

export default GetSnapshotBeforeUpdate;