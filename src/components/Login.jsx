import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from "react-router-dom";
import './login.css';
// Login Component with Tabs
export default function LoginTabs() {
  const [value, setValue] = React.useState('1');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogin = () => {
    if (value === '1' && username === 'admin' && password === 'admin123') {
      navigate('/admin');
    } else if (value === '2' && username === 'user' && password === 'user123') {
      navigate('/user');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="login tabs">
            <Tab label="Admin Login" value="1" />
            <Tab label="User Login" value="2" />
          </TabList>
        </Box>

        {/* Admin Login Panel */}
        <TabPanel value="1">
          <div className="login-container">
            <h2>Admin Login</h2>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </TabPanel>

        {/* User Login Panel */}
        <TabPanel value="2">
          <div className="login-container">
            <h2>User Login</h2>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
