import React, { useState } from 'react';

interface Props {
  recipientId: string;
}

const NotificationSender: React.FC<Props> = ({ recipientId }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('https://push-notification-server.com/send_notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: recipientId,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send notification');
      }

      alert('Notification sent successfully');
      setMessage('');
    } catch (error) {
      console.error(error);
      alert('Failed to send notification');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
      <button type="submit">Send Notification</button>
    </form>
  );
};

export default NotificationSender;