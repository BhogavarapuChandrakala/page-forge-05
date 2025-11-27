import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/AuthHeader';
import Footer from '@/components/Footer';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
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
  ArrowForward,
  CheckCircle,
} from '@mui/icons-material';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

  const appliedJobs = [
    { id: 1, company: 'Upwork', logo: 'Up', color: '#6fda44', title: 'Networking Engineer', type: 'Remote', location: 'Washington', salary: '$50k-80k/month', date: 'Feb 2, 2019 19:28', status: 'Active' },
    { id: 2, company: 'Dribbble', logo: '🎨', color: '#ea4c89', title: 'Product Designer', type: 'Full Time', location: 'Dhaka', salary: '$50k-80k/month', date: 'Dec 7, 2019 23:26', status: 'Active' },
    { id: 3, company: 'Apple', logo: '', color: '#000', title: 'Junior Graphic Designer', type: 'Temporary', location: 'Brazil', salary: '$50k-80k/month', date: 'Feb 2, 2019 19:28', status: 'Active' },
    { id: 4, company: 'Microsoft', logo: 'M', color: '#f25022', title: 'Visual Designer', type: 'Contract Base', location: 'Wisconsin', salary: '$50k-80k/month', date: 'Dec 7, 2019 23:26', status: 'Active' },
  ];

  const menuItems = [
    { icon: <Layers />, label: 'Overview', value: 'overview' },
    { icon: <WorkOutline />, label: 'Applied Jobs', value: 'applied', onClick: () => navigate('/applied-jobs') },
    { icon: <BookmarkBorder />, label: 'Favorite Jobs', value: 'favorite' },
    { icon: <Notifications />, label: 'Job Alert', value: 'alert', badge: '09' },
    { icon: <Settings />, label: 'Settings', value: 'settings' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AuthHeader />

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
            <Box sx={{ mb: 4 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Hello, Esther Howard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Here is your daily activities and job alerts
              </Typography>
            </Box>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4}>
                <Card sx={{ bgcolor: 'primary.50', border: 1, borderColor: 'primary.100' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="h4" fontWeight={700}>
                          589
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Applied jobs
                        </Typography>
                      </Box>
                      <BusinessCenter sx={{ fontSize: 48, color: 'primary.main', opacity: 0.3 }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ bgcolor: 'warning.50', border: 1, borderColor: 'warning.100' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="h4" fontWeight={700}>
                          238
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Favorite jobs
                        </Typography>
                      </Box>
                      <BookmarkBorder sx={{ fontSize: 48, color: 'warning.main', opacity: 0.3 }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card sx={{ bgcolor: 'success.50', border: 1, borderColor: 'success.100' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography variant="h4" fontWeight={700}>
                          574
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Job Alerts
                        </Typography>
                      </Box>
                      <Notifications sx={{ fontSize: 48, color: 'success.main', opacity: 0.3 }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Card sx={{ bgcolor: 'error.50', border: 1, borderColor: 'error.main', mb: 4 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ width: 56, height: 56 }} />
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        Your profile editing is not completed.
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Complete your profile editing & build your custom Resume
                      </Typography>
                    </Box>
                  </Box>
                  <Button variant="contained" color="error" endIcon={<ArrowForward />}>
                    Edit Profile
                  </Button>
                </Box>
              </CardContent>
            </Card>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" fontWeight={700}>
                Recently Applied
              </Typography>
              <Button endIcon={<ArrowForward />} onClick={() => navigate('/applied-jobs')}>
                View all
              </Button>
            </Box>

            <Card>
              <Box sx={{ overflow: 'auto' }}>
                <Box sx={{ minWidth: 800 }}>
                  <Box sx={{ display: 'flex', bgcolor: 'grey.100', p: 2, fontWeight: 600 }}>
                    <Box sx={{ flex: 3 }}>Job</Box>
                    <Box sx={{ flex: 2 }}>Date Applied</Box>
                    <Box sx={{ flex: 1 }}>Status</Box>
                    <Box sx={{ flex: 1 }}>Action</Box>
                  </Box>
                  {appliedJobs.map((job) => (
                    <Box
                      key={job.id}
                      sx={{
                        display: 'flex',
                        p: 2,
                        alignItems: 'center',
                        borderBottom: 1,
                        borderColor: 'grey.200',
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
                        <Button variant="outlined" size="small">
                          View Details
                        </Button>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Dashboard;
