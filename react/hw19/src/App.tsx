import { useState } from 'react';
import { Button, Card, Form, Input, Typography } from 'antd';
import { FormData } from './types';

const { Title } = Typography;

function App() {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const onFinish = (values: FormData) => {
    setSubmittedData(values);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={2}>Форма ввода данных</Title>

      <Form
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          label='Имя'
          name='name'
          rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Описание'
          name='description'
          rules={[{ required: true, message: 'Пожалуйста, введите описание' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card title='Отправленные данные' style={{ marginTop: '2rem' }}>
          <p>
            <strong>Имя:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Описание:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
}

export default App;
