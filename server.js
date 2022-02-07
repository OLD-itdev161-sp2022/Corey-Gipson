import { decodeBase64 } from 'bcryptjs';
import express from 'express';
import { route } from 'express/lib/application';
import connectDatabase from './config/db';

// Initialize express application
const app = express();

// Connect database
connectDatabase();

// Configure Middleware
app.use(express.jason({ extended: false}));

// API endpoints
/** 
 * @route GET /
 * @decode Test endpoint
*/

app.get('/', (req, res) => 
    res.send('http get request sent to root api endpoint')
    );

/** 
 * @route POST api/users
 * @decode Register user
*/

app.post('/api/users', (req,res) => {
    console.log(req.body);
    res.send(req.body);
});

    // Connection Listener
    app.listen(3000, () => console.log('Express server running on port 3000'));