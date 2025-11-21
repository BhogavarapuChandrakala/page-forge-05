import { AppBar, Toolbar, Container, Button, Box, Typography, Select, FormControl, MenuItem, InputAdornment, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Phone, Search, MapPin } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('english');
  const [country, setCountry] = useState('india');

  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1100 }}>
      {/* Top Navigation Bar */}
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', py: 1 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Left side - empty or can add content */}
            <Box />
            
            {/* Right side */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                <Phone size={16} color="#666" />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  +1-202-555-0178
                </Typography>
              </Box>

              <FormControl size="small" sx={{ minWidth: 100, display: { xs: 'none', sm: 'block' } }}>
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  sx={{ fontSize: '0.875rem', '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                >
                  <MenuItem value="english">English</MenuItem>
                  <MenuItem value="spanish">Spanish</MenuItem>
                </Select>
              </FormControl>

              <Button 
                variant="text" 
                onClick={() => navigate('/signin')}
                sx={{ 
                  display: { xs: 'none', sm: 'flex' },
                  color: 'text.secondary',
                  textTransform: 'none'
                }}
              >
                Sign In
              </Button>

              <Button 
                variant="contained" 
                onClick={() => navigate('/signup')}
                sx={{ 
                  bgcolor: 'primary.main',
                  '&:hover': { bgcolor: 'primary.dark' },
                  textTransform: 'none',
                  px: 3
                }}
              >
                Post A Jobs
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation Bar */}
      <AppBar position="static" sx={{ bgcolor: 'background.paper', boxShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }}>
            {/* Logo and Country Selector */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={28} color="#0066FF" />
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  MyJob
                </Typography>
              </Link>
              
              <FormControl size="small" sx={{ minWidth: 100, display: { xs: 'none', sm: 'block' } }}>
                <Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  sx={{ fontSize: '0.875rem' }}
                  startAdornment={
                    <InputAdornment position="start">
                      <Box sx={{ width: 20, height: 14, bgcolor: '#FF9933', borderRadius: 0.5, mr: 0.5 }} />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="india">India</MenuItem>
                  <MenuItem value="usa">USA</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.9rem' }}>
                  Home
                </Typography>
              </Link>
              <Link to="/find-job" style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.9rem' }}>
                  Find Job
                </Typography>
              </Link>
              <Link to="/find-employers" style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.9rem' }}>
                  Employers
                </Typography>
              </Link>
              <Link to="/find-candidate" style={{ textDecoration: 'none' }}>
                <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.9rem' }}>
                  Candidates
                </Typography>
              </Link>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.9rem' }}>
                Pricing Plans
              </Typography>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer', fontSize: '0.9rem' }}>
                Customer Supports
              </Typography>
            </Box>

            {/* Search Bar */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 1, alignItems: 'center' }}>
              <TextField
                placeholder="Job title, keyword, company"
                size="small"
                sx={{ 
                  width: 250,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'background.default'
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search size={18} color="#999" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
