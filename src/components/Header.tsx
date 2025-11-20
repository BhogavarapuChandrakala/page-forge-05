import { AppBar, Toolbar, Container, Button, IconButton, Box, Typography, Menu, MenuItem, Select, FormControl } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Phone, Bell, User } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [country, setCountry] = useState('india');
  const [language, setLanguage] = useState('english');

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'background.paper', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Briefcase size={28} color="#0066FF" />
            <Typography variant="h6" sx={{ color: 'foreground', fontWeight: 600 }}>
              MyJob
            </Typography>
          </Link>

          {/* Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>
                Home
              </Typography>
            </Link>
            <Link to="/find-job" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>
                Find Job
              </Typography>
            </Link>
            <Link to="/find-employers" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>
                Find Employers
              </Typography>
            </Link>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>
                Dashboard
              </Typography>
            </Link>
            <Link to="/find-candidate" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>
                Find Candidate
              </Typography>
            </Link>
            <Typography sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, cursor: 'pointer' }}>
              Customer Supports
            </Typography>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone size={16} />
              <Typography variant="body2" sx={{ display: { xs: 'none', md: 'block' } }}>
                +1-202-555-0178
              </Typography>
            </Box>

            <FormControl size="small" sx={{ minWidth: 80, display: { xs: 'none', sm: 'block' } }}>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                sx={{ fontSize: '0.875rem' }}
              >
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="spanish">Spanish</MenuItem>
              </Select>
            </FormControl>

            <IconButton sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Bell size={20} />
            </IconButton>

            <IconButton onClick={handleMenuOpen}>
              <User size={20} />
            </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={() => { navigate('/signin'); handleMenuClose(); }}>Sign In</MenuItem>
              <MenuItem onClick={() => { navigate('/signup'); handleMenuClose(); }}>Sign Up</MenuItem>
            </Menu>

            <Button 
              variant="contained" 
              onClick={() => navigate('/signup')}
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' }
              }}
            >
              Post A Job
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
