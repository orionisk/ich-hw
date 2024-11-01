import { Input } from '@/components/ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { setFilter } from '@/redux/usersSlice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.users.filter);

  return (
    <Input
      placeholder='Search users...'
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      className='max-w-sm'
    />
  );
}
