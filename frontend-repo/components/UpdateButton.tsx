
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { updateUserAction } from '../store/actions';
import { RootState } from '../store/store';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.user);

  const handleClick = () => {
    const userId = '123';
    const data = { name: 'John Doe', email: 'john@example.com' };
    dispatch(updateUserAction({ userId, data }));
  };

  return (
    <>
      <Button onClick={handleClick} disabled={loading}>
        Update User Data
      </Button>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
    </>
  );
};

export default UpdateButton;
