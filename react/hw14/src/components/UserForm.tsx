import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '@/redux/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function UserForm() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !status.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    dispatch(setUserInfo({ name, status }));
    toast({
      title: 'Success',
      description: 'User information updated'
    });
  };

  return (
    <Card className='w-[350px] bg-card'>
      <CardHeader>
        <CardTitle>Update Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              id='name'
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Enter your name'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='status'>Status</Label>
            <Input
              id='status'
              value={status}
              onChange={e => setStatus(e.target.value)}
              placeholder='Enter your status'
            />
          </div>
          <Button type='submit' className='w-full'>
            Update
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
