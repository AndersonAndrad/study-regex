import 'dotenv/config';
import App from './App';

App.server.listen(process.env.SERVER_PORT);
