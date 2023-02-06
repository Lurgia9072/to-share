import {livepeerClient } from '../lib/liverpeer/App'
import {
  LivepeerConfig,
} from '@livepeer/react';

function App() {
  return (
    <div>
      <LivepeerConfig client={livepeerClient}>
        {/* here put stream */}
      </LivepeerConfig>
    </div>
  );
}