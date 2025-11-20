import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import {
  Layers,
  WorkOutline,
  BookmarkBorder,
  Notifications,
  Settings,
  ExitToApp,
  BusinessCenter,
  LocationOn,
  CheckCircle,
  ArrowBack,
  ArrowForward,
} from '@mui/icons-material';

const AppliedJobs = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('applied');

  const appliedJobs = [
    { id: 1, company: 'Upwork', logo: 'Up', color: '#6fda44', title: 'Networking Engineer', type: 'Remote', location: 'Washington', salary: '$50k-80k/month', date: 'Feb 2, 2019 19:28', status: 'Active' },
    { id: 2, company: 'Dribbble', logo: '🎨', color: '#ea4c89', title: 'Product Designer', type: 'Full Time', location: 'Dhaka', salary: '$50k-80k/month', date: 'Dec 7, 2019 23:26', status: 'Active' },
    { id: 3, company: 'Apple', logo: '', color: '#000', title: 'Junior Graphic Designer', type: 'Temporary', location: 'Brazil', salary: '$50k-80k/month', date: 'Feb 2, 2019 19:28', status: 'Active' },
    { id: 4, company: 'Microsoft', logo: 'M', color: '#f25022', title: 'Visual Designer', type: 'Contract Base', location: 'Wisconsin', salary: '$50k-80k/month', date: 'Dec 7, 2019 23:26', status: 'Active' },
    { id: 5, company: 'Twitter', logo: '🐦', color: '#1da1f2', title: 'Marketing Officer', type: 'Full Time', location: 'United States', salary: '$50k-80k/month', date: 'Dec 4, 2019 21:42', status: 'Active' },
    { id: 6, company: 'Facebook', logo: 'f', color: '#1877f2', title: 'UI/UX Designer', type: 'Full Time', location: 'North Dakota', salary: '$50k-80k/month', date: 'Dec 30, 2019 07:52', status: 'Active' },
    { id: 7, company: 'Slack', logo: '#', color: '#4a154b', title: 'Software Engineer', type: 'Full Time', location: 'New York', salary: '$50k-80k/month', date: 'Dec 30, 2019 05:18', status: 'Active' },
    { id: 8, company: 'Reddit', logo: '👽', color: '#ff4500', title: 'Front End Developer', type: 'Full Time', location: 'Michigan', salary: '$50k-80k/month', date: 'Mar 20, 2019 23:14', status: 'Active' },
  ];

  const menuItems = [
    { icon: <Layers />, label: 'Overview', value: 'overview', onClick: () => navigate('/dashboard') },
    { icon: <WorkOutline />, label: 'Applied Jobs', value: 'applied' },
    { icon: <BookmarkBorder />, label: 'Favorite Jobs', value: 'favorite' },
    { icon: <Notifications />, label: 'Job Alert', value: 'alert', badge: '09' },
    { icon: <Settings />, label: 'Settings', value: 'settings' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <List>
                <Typography variant="caption" color="text.secondary" sx={{ px: 2, py: 1, display: 'block' }}>
                  CANDIDATE DASHBOARD
                </Typography>
                {menuItems.map((item) => (
                  <ListItem
                    key={item.value}
                    button
                    selected={activeSection === item.value}
                    onClick={() => {
                      if (item.onClick) {
                        item.onClick();
                      } else {
                        setActiveSection(item.value);
                      }
                    }}
                    sx={{
                      '&.Mui-selected': {
                        bgcolor: 'primary.main',
                        color: 'white',
                        '& .MuiListItemIcon-root': {
                          color: 'white',
                        },
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                    {item.badge && (
                      <Chip label={item.badge} size="small" sx={{ ml: 1 }} />
                    )}
                  </ListItem>
                ))}
                <Divider sx={{ my: 2 }} />
                <ListItem button>
                  <ListItemIcon><ExitToApp /></ListItemIcon>
                  <ListItemText primary="Log-out" />
                </ListItem>
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={9}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Applied Jobs (589)
            </Typography>

            <Card sx={{ mt: 3 }}>
              <Box sx={{ overflow: 'auto' }}>
                <Box sx={{ minWidth: 800 }}>
                  <Box sx={{ display: 'flex', bgcolor: 'grey.100', p: 2, fontWeight: 600 }}>
                    <Box sx={{ flex: 3 }}>JOBS</Box>
                    <Box sx={{ flex: 2 }}>DATE APPLIED</Box>
                    <Box sx={{ flex: 1 }}>STATUS</Box>
                    <Box sx={{ flex: 1 }}>ACTION</Box>
                  </Box>
                  {appliedJobs.map((job, index) => (
                    <Box
                      key={job.id}
                      sx={{
                        display: 'flex',
                        p: 2,
                        alignItems: 'center',
                        border: index === 3 ? 2 : 1,
                        borderColor: index === 3 ? 'primary.main' : 'grey.200',
                        borderBottom: 1,
                        '&:last-child': { borderBottom: 0 },
                      }}
                    >
                      <Box sx={{ flex: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 1,
                            bgcolor: job.color,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700,
                          }}
                        >
                          {job.logo}
                        </Box>
                        <Box>
                          <Typography variant="body1" fontWeight={600}>
                            {job.title}
                          </Typography>
                          <Chip label={job.type} size="small" color="primary" sx={{ mr: 1, mt: 0.5 }} />
                          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 0.5 }}>
                            <LocationOn fontSize="small" color="action" />
                            <Typography variant="caption" color="text.secondary">
                              {job.location}
                            </Typography>
                            <BusinessCenter fontSize="small" color="action" />
                            <Typography variant="caption" color="text.secondary">
                              {job.salary}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ flex: 2 }}>
                        <Typography variant="body2">{job.date}</Typography>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'success.main' }}>
                          <CheckCircle fontSize="small" />
                          <Typography variant="body2">{job.status}</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Button
                          variant={index === 3 ? 'contained' : 'outlined'}
                          size="small"
                          onClick={() => navigate(`/job/${job.id}`)}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Card>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              <Button variant="outlined" sx={{ minWidth: 40 }}>
                <ArrowBack />
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? 'contained' : 'outlined'}
                  sx={{ minWidth: 40 }}
                >
                  {page === 4 ? '04' : page}
                </Button>
              ))}
              <Button variant="outlined" sx={{ minWidth: 40 }}>
                <ArrowForward />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default AppliedJobs;
