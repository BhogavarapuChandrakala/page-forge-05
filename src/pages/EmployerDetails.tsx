import { useParams, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import AuthHeader from '@/components/AuthHeader';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
  Chip,
  IconButton,
} from '@mui/material';
import {
  NavigateNext,
  LocationOn,
  CalendarToday,
  BusinessCenter,
  Language,
  Phone,
  Email,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  ArrowForward,
  Apple as AppleIcon,
  Settings,
  GridView,
  ViewList,
} from '@mui/icons-material';

const EmployerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const openPositionsRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const scrollToOpenPositions = () => {
    openPositionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getCompanyIcon = (company: string) => {
    const iconProps = { sx: { fontSize: 28, color: 'white' } };
    const companyLower = company.toLowerCase();
    
    if (companyLower.includes('apple')) {
      return <AppleIcon {...iconProps} />;
    } else if (companyLower.includes('facebook')) {
      return <Facebook {...iconProps} />;
    } else if (companyLower.includes('microsoft')) {
      return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0.5, width: 24, height: 24 }}>
          <Box sx={{ bgcolor: '#F25022', width: 11, height: 11 }}/>
          <Box sx={{ bgcolor: '#7FBA00', width: 11, height: 11 }}/>
          <Box sx={{ bgcolor: '#00A4EF', width: 11, height: 11 }}/>
          <Box sx={{ bgcolor: '#FFB900', width: 11, height: 11 }}/>
        </Box>
      );
    } else if (companyLower.includes('upwork')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>ᑌ</Box>;
    } else if (companyLower.includes('freepik')) {
      return <Box sx={{ fontWeight: 900, fontSize: '1.5rem', color: 'white' }}>F</Box>;
    } else if (companyLower.includes('instagram')) {
      return <Instagram {...iconProps} />;
    }
    
    return company.charAt(0).toUpperCase();
  };

  const openPositions = [
    { id: 1, company: 'Freepik', title: 'Visual Designer', type: 'Featured', salary: '$10K-$15K', logo: 'F', color: '#1da1f2', location: 'China' },
    { id: 2, company: 'Instagram', title: 'Front End Developer', type: '', salary: '$300-$500', logo: '📷', color: '#c13584', location: 'Australia' },
    { id: 3, company: 'Upwork', title: 'Technical Support Specialist', type: '', salary: '$300-$400', logo: 'Up', color: '#6fda44', location: 'France' },
    { id: 4, company: 'Facebook', title: 'Software Engineer', type: '', salary: '$15K-$20K', logo: 'f', color: '#1877f2', location: 'Los Angeles' },
    { id: 5, company: 'Microsoft', title: 'Product Designer', type: '', salary: '$400-$500', logo: 'M', color: '#f25022', location: 'Australia' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <AuthHeader />
      
      <Box sx={{ bgcolor: 'grey.50', py: 3, borderBottom: 1, borderColor: 'grey.200' }}>
        <Container maxWidth="lg">
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link underline="hover" color="inherit" href="/">Home</Link>
            <Link underline="hover" color="inherit" href="/find-employers">Find Employers</Link>
            <Typography color="text.primary">Single Employers</Typography>
          </Breadcrumbs>
          <Typography variant="h4" sx={{ mt: 2, fontWeight: 700 }}>Single Employers</Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                    }}
                  >
                      {getCompanyIcon('Twitter')}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                      Twitter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Information Technology (IT)
                    </Typography>
                  </Box>
                  <Button 
                    variant="contained" 
                    size="large" 
                    endIcon={<ArrowForward />}
                    onClick={scrollToOpenPositions}
                  >
                    View Open Position
                  </Button>
                </Box>

                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
                  Description
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                  Enim at velit at nibh maximus fermentum. Mauris ac justo nibh. Praesent nec lorem lorem. 
                  Donec ullamcorper lacus mollis tortor pretium malesuada. In quis porta nibh, quis fringilla eros. 
                  Phasellus faucibus massa a efficitur blandit, orci eget porta ac, eget vulputate quam sem nec arcu. 
                  Sed eget posuere risus, nulla at lorem dolor. Cras aptent taciti sociosqu ad litora torquent hendrerit. 
                  Vestibulum in maximus orci, sed dolor fermentum. Mauris eleifend eu leo ac gravida. Etiam libero neque, 
                  consectetur leo ac viverra in, auctor nequis. Donec imperdiet massa a elementum rhoncus vulputate velit.
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                  Nam dapibus consectetur erat in euismod. Cras aliquet nibh. Sed tristique dictum elementum. Aliquam sit amet orci interdum, bibh. Sed tristique dictum elementum. In neque sit amet orci interdum tincidunt.
                </Typography>

                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
                  Company Benefits
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, mb: 2 }}>
                  Integer aliquet pretium consequat. Donec et sapien id leo accumsan pellentesque eget maximus tellus. Duis et est ac leo rhoncus tincidunt vitae vehicula augue.
                </Typography>
                <Box component="ul" sx={{ pl: 3, listStyleType: 'disc', listStylePosition: 'outside', '& li': { mb: 1.5, color: 'text.secondary', lineHeight: 1.8 } }}>
                  <Typography component="li" variant="body1" color="text.secondary">
                    In hac habitasse platea dictum.
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary">
                    Sed aliquet, arcu at iaculis laoreet, nibh ante eget taliquet idum rhoncus.
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary">
                    Vestibulum ut vestibulum orci.
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary">
                    Etiam libero neque, consectetur eu tellus vitae, venenatis rhoncus vulputate velit.
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary">
                    Nam condimentum sit amet ipsum ut malesuada
                  </Typography>
                </Box>

                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
                  Company Vision
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                  Praesent ultrices congue ex, sit amet elementum at venenatis sapien blandit. Etiam massa risus, 
                  accumsan nec tempus nec, venenatis in mi. Maecenas nulla sit, blandit id rhoncus in, pulvinar eget 
                  sapor ac, cursus convallis ac. Pellentesque facilisis tincidunt dictum.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mt: 4, alignItems: 'center', flexWrap: 'wrap' }}>
                  <Typography variant="body2" color="text.secondary">Share profile:</Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Button 
                      variant="outlined" 
                      startIcon={<Facebook />} 
                      size="small"
                      sx={{ textTransform: 'none' }}
                    >
                      Facebook
                    </Button>
                    <Button 
                      variant="outlined" 
                      startIcon={<Twitter />} 
                      size="small"
                      sx={{ textTransform: 'none' }}
                    >
                      Twitter
                    </Button>
                    <Button 
                      variant="outlined" 
                      size="small"
                      sx={{ textTransform: 'none' }}
                    >
                      Pinterest
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 3, borderRadius: 2 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                  Company Overview
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <BusinessCenter sx={{ color: 'primary.main', fontSize: 28, mb: 0.5 }} />
                      <Typography variant="caption" color="text.secondary" display="block" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
                        FOUNDED IN:
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        14 June, 2021
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <CalendarToday sx={{ color: 'primary.main', fontSize: 28, mb: 0.5 }} />
                      <Typography variant="caption" color="text.secondary" display="block" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
                        ORGANIZATION TYPE
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        Private Company
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <BusinessCenter sx={{ color: 'primary.main', fontSize: 28, mb: 0.5 }} />
                      <Typography variant="caption" color="text.secondary" display="block" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
                        TEAM SIZE
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        120-300 Candidates
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      <Settings sx={{ color: 'primary.main', fontSize: 28, mb: 0.5 }} />
                      <Typography variant="caption" color="text.secondary" display="block" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
                        INDUSTRY TYPES
                      </Typography>
                      <Typography variant="body1" fontWeight={600}>
                        Technology
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ mb: 3, borderRadius: 2 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                  Contact Information
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Language sx={{ color: 'primary.main', fontSize: 18 }} />
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>WEBSITE</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ ml: 4 }}>www.estherhoward.com</Typography>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Phone sx={{ color: 'primary.main', fontSize: 18 }} />
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>PHONE</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ ml: 4 }}>+1-202-555-0141</Typography>
                </Box>

                <Box sx={{ mb: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Email sx={{ color: 'primary.main', fontSize: 18 }} />
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>EMAIL ADDRESS</Typography>
                  </Box>
                  <Typography variant="body2" sx={{ ml: 4 }}>esther.howard@gmail.com</Typography>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ borderRadius: 2 }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
                  Follow us on:
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    sx={{ 
                      bgcolor: '#1877F2', 
                      color: 'white', 
                      width: 40, 
                      height: 40,
                      '&:hover': { bgcolor: '#1565C0' }
                    }}
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      bgcolor: '#1DA1F2', 
                      color: 'white', 
                      width: 40, 
                      height: 40,
                      '&:hover': { bgcolor: '#0D8BD9' }
                    }}
                  >
                    <Twitter />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      bgcolor: '#FF0000', 
                      color: 'white', 
                      width: 40, 
                      height: 40,
                      '&:hover': { bgcolor: '#CC0000' }
                    }}
                  >
                    <YouTube />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }} ref={openPositionsRef}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" fontWeight={700}>
              Open Position (05)
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                onClick={() => setViewMode('grid')}
                sx={{
                  border: '1px solid',
                  borderColor: viewMode === 'grid' ? '#023047' : '#d3d3d3',
                  bgcolor: viewMode === 'grid' ? '#023047' : 'transparent',
                  color: viewMode === 'grid' ? '#f6f6f6' : '#6f6f6f',
                  '&:hover': {
                    bgcolor: viewMode === 'grid' ? '#023047' : '#d3d3d3',
                  },
                }}
              >
                <GridView />
              </IconButton>
              <IconButton
                onClick={() => setViewMode('list')}
                sx={{
                  border: '1px solid',
                  borderColor: viewMode === 'list' ? '#023047' : '#d3d3d3',
                  bgcolor: viewMode === 'list' ? '#023047' : 'transparent',
                  color: viewMode === 'list' ? '#f6f6f6' : '#6f6f6f',
                  '&:hover': {
                    bgcolor: viewMode === 'list' ? '#023047' : '#d3d3d3',
                  },
                }}
              >
                <ViewList />
              </IconButton>
            </Box>
          </Box>

          {viewMode === 'grid' ? (
            <Grid container spacing={3}>
              {openPositions.map((job) => (
                <Grid item xs={12} sm={6} key={job.id}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      '&:hover': { boxShadow: 4 },
                      height: '100%',
                    }}
                    onClick={() => navigate(`/job/${job.id}`)}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            borderRadius: 1,
                            bgcolor: job.color,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '20px',
                            fontWeight: 700,
                          }}
                        >
                          {getCompanyIcon(job.company)}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              {job.company}
                            </Typography>
                            {job.type && (
                              <Chip label={job.type} size="small" color="warning" />
                            )}
                          </Box>
                          <Typography variant="h6" fontWeight={600} gutterBottom>
                            {job.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {job.type || 'Full Time'} • {job.salary}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {openPositions.map((job) => (
                <Card
                  key={job.id}
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': { boxShadow: 4 },
                  }}
                  onClick={() => navigate(`/job/${job.id}`)}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: 1,
                          bgcolor: job.color,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {getCompanyIcon(job.company)}
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, flexWrap: 'wrap' }}>
                          <Typography variant="h6" fontWeight={600}>
                            {job.title}
                          </Typography>
                          {job.type && (
                            <Chip label={job.type} size="small" color="warning" />
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, flexWrap: 'wrap' }}>
                          <Typography variant="body2" color="text.secondary">
                            {job.company}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            •
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {job.type || 'Full Time'}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            •
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {job.salary}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ flexShrink: 0 }}>
                        <Button
                          variant="contained"
                          endIcon={<ArrowForward />}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/job/${job.id}`);
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default EmployerDetails;
