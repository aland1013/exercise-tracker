require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 5000;
// const User = require('./models/user');

// app.get('', (req, res) => {
    
// });

// app.post('/api/exercise/new-user', async (req, res) => {
//     const user = new User(req.body);
//     try {
//         await user.save();
//         res.status(201).send({ user });
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// app.get('/api/exercise/users', async (req, res) => {
//     const users = await User.find({});
//     try {
//         res.status(201).send(users);
//     } catch (e) {
//         res.status(500).send(e);
//     }
// });

// app.post('/api/exercise/add', async (req, res) => {

// });

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
